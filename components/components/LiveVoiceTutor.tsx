import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { Mic, MicOff, X, Volume2, WifiOff, Sparkles } from 'lucide-react';
import { createPCMBlob, decodeAudioData } from '../services/audioUtils';

export interface LiveVoiceTutorProps {
  onClose?: () => void;
  context?: string;
}

const LiveVoiceTutor: React.FC<LiveVoiceTutorProps> = ({ onClose, context = "الدراسات الاجتماعية - الصف السابع" }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const inputSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const outputNodeRef = useRef<GainNode | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const sessionRef = useRef<Promise<any> | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const disconnect = () => {
    if (sessionRef.current) {
        sessionRef.current.then(session => {
            try {
                session.close();
            } catch (e) {
                console.error("Error closing session", e);
            }
        });
        sessionRef.current = null;
    }

    if (processorRef.current) {
        processorRef.current.disconnect();
        processorRef.current = null;
    }
    
    if (inputSourceRef.current) {
        inputSourceRef.current.disconnect();
        inputSourceRef.current = null;
    }

    if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
    }

    if (inputAudioContextRef.current) {
        inputAudioContextRef.current.close();
        inputAudioContextRef.current = null;
    }

    if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
    }
    
    setIsConnected(false);
  };

  useEffect(() => {
    connectToGemini();
    return () => disconnect();
  }, []);

  const connectToGemini = async () => {
    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) throw new Error("API Key not found");

      const ai = new GoogleGenAI({ apiKey });
      
      // Setup Audio Output
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      outputNodeRef.current = audioContextRef.current.createGain();
      outputNodeRef.current.connect(audioContextRef.current.destination);

      // Setup Audio Input
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: { sampleRate: 16000, channelCount: 1, echoCancellation: true }
      });
      streamRef.current = stream;

      const inputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      inputAudioContextRef.current = inputAudioContext;
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
                voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } }
            },
            systemInstruction: `
                أنت "المعلم الذكي" لمادة الدراسات الاجتماعية (الصف السابع - سلطنة عمان).
                تحدث باللغة العربية بلهجة ودودة ومشجعة.
                السياق الحالي للطالب هو: ${context}.
                كن موجزاً في إجاباتك، وشجع الطالب على التفكير.
                إذا سألك الطالب عن موضوع خارج الدرس، لبه بذكاء ثم عد للموضوع.
            `,
        },
        callbacks: {
            onopen: () => {
                setIsConnected(true);
                // Setup Input processing
                inputSourceRef.current = inputAudioContext.createMediaStreamSource(stream);
                processorRef.current = inputAudioContext.createScriptProcessor(4096, 1, 1);
                
                processorRef.current.onaudioprocess = (e) => {
                    const inputData = e.inputBuffer.getChannelData(0);
                    const pcmBlob = createPCMBlob(inputData, 16000); 
                    
                    sessionPromise.then((session) => {
                        session.sendRealtimeInput({ media: pcmBlob });
                    });
                };

                inputSourceRef.current.connect(processorRef.current);
                processorRef.current.connect(inputAudioContext.destination);
            },
            onmessage: async (message: LiveServerMessage) => {
                // Handle Audio Output
                const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
                if (base64Audio) {
                    setIsTalking(true);
                    if (audioContextRef.current && outputNodeRef.current) {
                        const currentTime = audioContextRef.current.currentTime;
                        if (nextStartTimeRef.current < currentTime) {
                            nextStartTimeRef.current = currentTime;
                        }

                        try {
                            const audioBytes = Uint8Array.from(atob(base64Audio), c => c.charCodeAt(0));
                            const audioBuffer = await decodeAudioData(audioBytes, audioContextRef.current, 24000);
                            
                            const source = audioContextRef.current.createBufferSource();
                            source.buffer = audioBuffer;
                            source.connect(outputNodeRef.current);
                            
                            source.start(nextStartTimeRef.current);
                            nextStartTimeRef.current += audioBuffer.duration;
                            
                            source.onended = () => {
                                sourcesRef.current.delete(source);
                                if (sourcesRef.current.size === 0) {
                                    setIsTalking(false);
                                }
                            };
                            sourcesRef.current.add(source);
                        } catch (decodeErr) {
                            console.error("Audio decode error", decodeErr);
                        }
                    }
                }

                // Handle Interruption
                if (message.serverContent?.interrupted) {
                    sourcesRef.current.forEach(source => {
                        try { source.stop(); } catch(e) {}
                    });
                    sourcesRef.current.clear();
                    nextStartTimeRef.current = 0;
                    setIsTalking(false);
                }
            },
            onclose: () => {
                setIsConnected(false);
            },
            onerror: (err) => {
                console.error("Live API Error:", err);
                setError("حدث خطأ في الاتصال");
                setIsConnected(false);
            }
        }
      });
      
      sessionRef.current = sessionPromise;

    } catch (e: any) {
      console.error("Connection failed", e);
      let errorMessage = "تعذر الوصول للميكروفون أو الاتصال بالخادم";
      if (e.name === 'NotAllowedError' || e.message?.includes('Permission denied')) {
        errorMessage = "يرجى السماح بالوصول للميكروفون لاستخدام المعلم الذكي.";
      }
      setError(errorMessage);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative border-4 border-indigo-100 flex flex-col items-center">
            
            <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 bg-slate-100 rounded-full">
                <X size={20} />
            </button>

            <div className="mb-6 bg-indigo-50 p-4 rounded-full border-4 border-indigo-100">
                {error ? (
                    <WifiOff size={48} className="text-red-500" />
                ) : isTalking ? (
                    <Volume2 size={48} className="text-indigo-600 animate-pulse" />
                ) : (
                    <div className="relative">
                        <Mic size={48} className={isConnected ? "text-indigo-600" : "text-slate-400"} />
                        {isConnected && <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>}
                    </div>
                )}
            </div>

            <h2 className="text-2xl font-black text-slate-800 mb-2">المعلم الذكي المباشر</h2>
            
            {error ? (
                <div className="text-center">
                    <p className="text-red-500 font-bold mb-4 text-sm">{error}</p>
                    <button onClick={() => { setError(null); connectToGemini(); }} className="px-6 py-2 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors">
                        إعادة المحاولة
                    </button>
                </div>
            ) : (
                <div className="text-center space-y-4 w-full">
                    {!isConnected ? (
                        <p className="text-slate-500 animate-pulse">جاري الاتصال...</p>
                    ) : (
                        <>
                            <div className="flex items-center justify-center gap-2 text-indigo-600 font-medium bg-indigo-50 py-2 px-4 rounded-lg">
                                <Sparkles size={16} />
                                <span>{isTalking ? "المعلم يتحدث..." : "أستمع إليك..."}</span>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    </div>
  );
};

export default LiveVoiceTutor;