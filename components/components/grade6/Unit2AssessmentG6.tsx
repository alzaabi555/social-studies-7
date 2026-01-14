import React, { useState } from 'react';
import { ArrowRight, CheckCircle, XCircle, HelpCircle, RefreshCcw, Map, Image as ImageIcon, Scale, Crown } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit2AssessmentG6: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // --- Q1: Concept Matching (Page 78) ---
  const [matches, setMatches] = useState<{[key: string]: string}>({});
  const concepts = [
      { id: 'arud', term: 'علم العروض', def: 'هو ميزان الشعر به يُعرف موزونه من عدمه.' },
      { id: 'hereditary', term: 'الحكم الوراثي', def: 'هو أن يتولى الابن الأكبر للحكم أو أحد أقربائه الحكم من بعده.' },
      { id: 'sharia', term: 'علوم الشريعة', def: 'تعتمد على استنباط معارفها من القرآن والسنة (كالفقه والعقيدة).' },
  ];
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  const handleMatch = (defId: string) => {
      if (selectedTerm) {
          if (selectedTerm === defId) {
              setMatches(prev => ({ ...prev, [defId]: 'correct' }));
              setScore(s => s + 1);
          } else {
              setMatches(prev => ({ ...prev, [defId]: 'wrong' }));
              setTimeout(() => {
                  setMatches(prev => {
                      const newM = { ...prev };
                      delete newM[defId];
                      return newM;
                  });
              }, 1000);
          }
          setSelectedTerm(null);
      }
  };

  // --- Q2: Multiple Choice (Page 79 & General) ---
  const [mcqAnswers, setMcqAnswers] = useState<{[key: number]: number}>({});
  const mcqs = [
      {
          id: 1,
          question: "زياد بن المهلب الأزدي اشتهر بكونه:",
          options: ["شاعراً وخطيباً", "والياً للأمويين على عمان", "مؤسس علم العروض", "قائد حملة سقطرى"],
          correct: 1
      },
      {
          id: 2,
          question: "كعب بن معدان الأزدي برز في مجال:",
          options: ["الطب", "الفلك", "الشعر والخطابة", "سك العملات"],
          correct: 2
      },
      {
          id: 3,
          question: "بدأ الحكم الوراثي في الدولة الأموية بتولية:",
          options: ["يزيد بن معاوية", "عمر بن عبدالعزيز", "عبدالملك بن مروان", "مروان بن الحكم"],
          correct: 0
      },
      {
          id: 4,
          question: "من النتائج المترتبة على اتصاف التجار العمانيين بالأخلاق الحميدة:",
          options: ["زيادة الثروة فقط", "انتشار الإسلام في المناطق التي وصلوا إليها", "السيطرة العسكرية", "توقف التجارة"],
          correct: 1
      }
  ];

  const handleMcq = (qId: number, optIdx: number) => {
      if (mcqAnswers[qId] !== undefined) return;
      setMcqAnswers(prev => ({ ...prev, [qId]: optIdx }));
      if (optIdx === mcqs.find(q => q.id === qId)?.correct) {
          setScore(s => s + 1);
      }
  };

  // --- Q3: Image Identification (Page 78) ---
  const [imgAnswers, setImgAnswers] = useState<{[key: string]: string}>({});
  
  const handleImgSelect = (type: string, answer: string) => {
      setImgAnswers(prev => ({ ...prev, [type]: answer }));
      const correct = type === 'catapult' ? 'عسكري' : 'اقتصادي';
      if (answer === correct) setScore(s => s + 1);
  };

  // --- Q4: Map Tracing (Simulated) ---
  const [mapPathVisible, setMapPathVisible] = useState(false);

  return (
    <div className="min-h-screen bg-indigo-50 font-tajawal text-right flex flex-col" dir="rtl">
        {/* Header */}
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 text-lg">
                <ArrowRight size={24} /> خروج
            </button>
            <h1 className="text-xl md:text-2xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثانية)</h1>
            <div className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full font-bold">
                النقاط: {score}
            </div>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 space-y-8 pb-20">
            
            {/* Tabs */}
            <div className="flex justify-center bg-white p-1.5 rounded-full shadow-sm mb-6">
                <button onClick={() => setActiveTab(1)} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 1 ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}>1. المفاهيم</button>
                <button onClick={() => setActiveTab(2)} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 2 ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}>2. الشخصيات</button>
                <button onClick={() => setActiveTab(3)} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 3 ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}>3. المنجزات</button>
                <button onClick={() => setActiveTab(4)} className={`flex-1 py-2 rounded-full font-bold transition-all ${activeTab === 4 ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}>4. الخريطة</button>
            </div>

            {/* Content 1: Concepts Matching */}
            {activeTab === 1 && (
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-indigo-100 animate-slide-up">
                    <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
                        <Scale className="text-indigo-600"/> صل المفهوم بالتعريف المناسب (صفحة 78):
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            {concepts.map(c => (
                                <button
                                    key={c.id}
                                    onClick={() => !matches[c.id] && setSelectedTerm(c.id)}
                                    disabled={matches[c.id] === 'correct'}
                                    className={`w-full p-4 rounded-xl font-bold text-lg transition-all border-2 ${
                                        matches[c.id] === 'correct' ? 'bg-green-100 border-green-500 text-green-800 opacity-50' :
                                        selectedTerm === c.id ? 'bg-indigo-600 text-white border-indigo-600 scale-105' :
                                        'bg-slate-50 border-slate-200 text-slate-700 hover:border-indigo-300'
                                    }`}
                                >
                                    {c.term}
                                </button>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {concepts.map(c => (
                                <div
                                    key={c.id}
                                    onClick={() => handleMatch(c.id)}
                                    className={`w-full p-4 rounded-xl text-sm font-medium transition-all border-2 cursor-pointer relative ${
                                        matches[c.id] === 'correct' ? 'bg-green-50 border-green-200 text-green-900' :
                                        matches[c.id] === 'wrong' ? 'bg-red-50 border-red-200 text-red-900 animate-shake' :
                                        'bg-white border-slate-200 text-slate-600 hover:border-indigo-300'
                                    }`}
                                >
                                    {c.def}
                                    {matches[c.id] === 'correct' && <CheckCircle className="absolute top-1/2 left-4 -translate-y-1/2 text-green-600" size={20}/>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Content 2: MCQ */}
            {activeTab === 2 && (
                <div className="space-y-6 animate-slide-up">
                    {mcqs.map((q, idx) => (
                        <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <h4 className="font-bold text-lg text-slate-800 mb-4 flex gap-3">
                                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 flex items-center justify-center rounded-full text-sm">{idx + 1}</span>
                                {q.question}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-11">
                                {q.options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleMcq(q.id, i)}
                                        className={`p-3 rounded-lg text-right font-medium border-2 transition-all ${
                                            mcqAnswers[q.id] === i 
                                                ? (i === q.correct ? 'bg-green-100 border-green-500 text-green-900' : 'bg-red-100 border-red-500 text-red-900')
                                                : mcqAnswers[q.id] !== undefined && i === q.correct 
                                                    ? 'bg-green-50 border-green-200 text-green-800'
                                                    : 'bg-slate-50 border-slate-100 hover:bg-indigo-50 hover:border-indigo-200'
                                        }`}
                                    >
                                        {opt}
                                        {mcqAnswers[q.id] === i && (
                                            <span className="float-left">
                                                {i === q.correct ? <CheckCircle size={18}/> : <XCircle size={18}/>}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Content 3: Images (Page 78 Q3) */}
            {activeTab === 3 && (
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200 animate-slide-up">
                    <h3 className="text-xl font-black text-slate-800 mb-6 text-center">استنتج من الصور اسم المنجز التابع للدولة الأموية:</h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Image 1: Catapult */}
                        <div className="flex flex-col items-center p-4 border-2 border-slate-100 rounded-2xl">
                            <div className="w-full h-40 bg-slate-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
                                {/* Simple CSS Catapult Representation */}
                                <svg viewBox="0 0 100 100" className="w-24 h-24">
                                    <path d="M20,90 L80,90 M50,90 L50,50 L80,20" stroke="#78350F" strokeWidth="4" fill="none" />
                                    <circle cx="80" cy="20" r="5" fill="#4B5563" />
                                </svg>
                                <span className="absolute bottom-2 right-2 text-xs font-bold text-slate-400">صورة تقريبية (منجنيق)</span>
                            </div>
                            <p className="font-bold text-slate-700 mb-3">الصورة الأولى</p>
                            <div className="flex gap-2 w-full">
                                <button 
                                    onClick={() => handleImgSelect('catapult', 'عسكري')}
                                    className={`flex-1 py-2 rounded-lg font-bold border transition-colors ${imgAnswers['catapult'] === 'عسكري' ? 'bg-green-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                                >
                                    مجال عسكري
                                </button>
                                <button 
                                    onClick={() => handleImgSelect('catapult', 'عمراني')}
                                    className={`flex-1 py-2 rounded-lg font-bold border transition-colors ${imgAnswers['catapult'] === 'عمراني' ? 'bg-red-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                                >
                                    مجال عمراني
                                </button>
                            </div>
                        </div>

                        {/* Image 2: Coin */}
                        <div className="flex flex-col items-center p-4 border-2 border-slate-100 rounded-2xl">
                            <div className="w-full h-40 bg-slate-100 rounded-xl mb-4 flex items-center justify-center relative">
                                <div className="w-20 h-20 rounded-full bg-yellow-400 border-4 border-yellow-600 flex items-center justify-center shadow-lg">
                                    <span className="text-yellow-800 font-bold text-xs text-center">لا إله<br/>إلا الله</span>
                                </div>
                                <span className="absolute bottom-2 right-2 text-xs font-bold text-slate-400">صورة تقريبية (دينار)</span>
                            </div>
                            <p className="font-bold text-slate-700 mb-3">الصورة الثانية</p>
                            <div className="flex gap-2 w-full">
                                <button 
                                    onClick={() => handleImgSelect('coin', 'ثقافي')}
                                    className={`flex-1 py-2 rounded-lg font-bold border transition-colors ${imgAnswers['coin'] === 'ثقافي' ? 'bg-red-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                                >
                                    مجال ثقافي
                                </button>
                                <button 
                                    onClick={() => handleImgSelect('coin', 'اقتصادي')}
                                    className={`flex-1 py-2 rounded-lg font-bold border transition-colors ${imgAnswers['coin'] === 'اقتصادي' ? 'bg-green-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                                >
                                    مجال اقتصادي
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Content 4: Map (Page 79 Q5) */}
            {activeTab === 4 && (
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-indigo-100 animate-slide-up">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-black text-slate-800 mb-2 flex items-center justify-center gap-2">
                            <Map className="text-indigo-600"/> تتبع المسار (صفحة 79)
                        </h3>
                        <p className="text-slate-500">ارسم خط سير حملات الحجاج بن يوسف للسيطرة على عمان.</p>
                    </div>

                    <div className="relative w-full h-80 bg-blue-50 rounded-2xl overflow-hidden border-4 border-slate-200 shadow-inner">
                        {/* Map SVG */}
                        <svg viewBox="0 0 600 400" className="w-full h-full absolute inset-0">
                            {/* Land */}
                            <path d="M0,0 H600 V200 Q400,250 200,220 T0,400 Z" fill="#E2E8F0" />
                            <path d="M0,200 L600,200 L600,400 L0,400 Z" fill="#BFDBFE" />
                            
                            {/* Points */}
                            <circle cx="100" cy="150" r="6" fill="#1F2937" /> <text x="90" y="140" fontSize="12" fontWeight="bold">البصرة</text>
                            <circle cx="450" cy="280" r="6" fill="#DC2626" /> <text x="460" y="280" fontSize="12" fontWeight="bold">عمان</text>

                            {/* The Path (Hidden until clicked) */}
                            {mapPathVisible && (
                                <>
                                    {/* Land Route (Failed) */}
                                    <path d="M100,150 Q200,200 300,220" fill="none" stroke="#EF4444" strokeWidth="3" strokeDasharray="5 5" className="animate-[draw_1s_linear_forwards]" />
                                    <text x="200" y="180" fontSize="12" fill="#EF4444" fontWeight="bold">بري (فشل)</text>
                                    
                                    {/* Sea Route (Success) */}
                                    <path d="M100,150 Q300,100 450,280" fill="none" stroke="#16A34A" strokeWidth="4" markerEnd="url(#arrowMap)" className="animate-[draw_2s_linear_forwards]" style={{animationDelay: '1s'}} />
                                    <text x="300" y="120" fontSize="12" fill="#16A34A" fontWeight="bold" style={{animationDelay: '1s'}} className="animate-fade-in">بحري (نجح)</text>
                                </>
                            )}
                            
                            <defs>
                                <marker id="arrowMap" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <path d="M0,0 L0,6 L9,3 z" fill="#16A34A" />
                                </marker>
                            </defs>
                        </svg>

                        {!mapPathVisible && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
                                <button 
                                    onClick={() => { setMapPathVisible(true); setScore(s => s + 1); }}
                                    className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg animate-bounce"
                                >
                                    رسم المسار ✏️
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>
        
        <style>{`
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
            .animate-shake { animation: shake 0.4s ease-in-out; }
            @keyframes draw { to { stroke-dashoffset: 0; } }
        `}</style>
    </div>
  );
};

export default Unit2AssessmentG6;