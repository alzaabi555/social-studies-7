import React, { useState, useEffect } from 'react';
import { WEATHER_ELEMENTS_DATA } from '../constants';
import { WeatherElement } from '../types';
import { Info, Settings, Lightbulb, PlayCircle, RefreshCw, ThermometerSun, CloudRain, Wind } from 'lucide-react';

const SectionElements: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<WeatherElement>(WEATHER_ELEMENTS_DATA[0]);
  
  // Interactive Lab State
  const [labValue, setLabValue] = useState(50); // General value 0-100
  const [isActive, setIsActive] = useState(false); // For toggle states like Rain

  // Reset lab when element changes
  useEffect(() => {
      setLabValue(50);
      setIsActive(false);
  }, [selectedElement.id]);

  // Helper to render specific SVG based on element ID and State
  const renderElementIllustration = (id: string) => {
      switch(id) {
          case 'temp':
              // Lab Value = Temperature Level (0 = Cold Blue, 100 = Hot Red)
              const tempColor = labValue > 60 ? "#EF4444" : labValue > 30 ? "#F59E0B" : "#3B82F6";
              const bgOpacity = 0.1 + (labValue / 200);
              
              return (
                  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="200" fill={tempColor} fillOpacity={bgOpacity} className="transition-all duration-500" />
                      <circle cx="350" cy="50" r="40" fill={tempColor} opacity="0.2" className="transition-all duration-500" />
                      
                      {/* Interactive Thermometer */}
                      <g transform="translate(190, 20)">
                          <rect x="0" y="0" width="20" height="140" rx="10" fill="white" stroke="#CBD5E1" strokeWidth="2" />
                          <circle cx="10" cy="140" r="20" fill={tempColor} className="transition-colors duration-500" />
                          {/* Mercury Level */}
                          <rect 
                            x="5" 
                            y={Math.max(0, 140 - (labValue * 1.2))} 
                            width="10" 
                            height={labValue * 1.2} 
                            fill={tempColor} 
                            className="transition-all duration-300 ease-out"
                          />
                          {/* Marks */}
                          <line x1="20" y1="40" x2="25" y2="40" stroke="#64748B" strokeWidth="2" />
                          <line x1="20" y1="70" x2="25" y2="70" stroke="#64748B" strokeWidth="2" />
                          <line x1="20" y1="100" x2="25" y2="100" stroke="#64748B" strokeWidth="2" />
                      </g>
                      
                      <text x="30" y="100" fill={tempColor} fontSize="24" fontWeight="bold" className="transition-colors duration-500">
                          {labValue}°C
                      </text>
                  </svg>
              );

          case 'pressure':
              // Lab Value = Pressure Piston Depth
              const pistonY = 20 + (labValue * 0.8); // Moves down as value increases
              const particleSpacing = 100 - (labValue * 0.8); // Less spacing = higher pressure
              const particleColor = labValue > 70 ? "#EF4444" : "#1E3A8A"; // Red when high pressure (hot)

              return (
                  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="200" fill="#BFDBFE" />
                      
                      {/* Particles inside */}
                      <g className="transition-all duration-300">
                          {Array.from({length: 12}).map((_, i) => (
                              <circle 
                                key={i} 
                                cx={50 + (i * 30)} 
                                cy={180 - (Math.random() * particleSpacing)} 
                                r="5" 
                                fill={particleColor}
                                className="transition-all duration-300"
                              />
                          ))}
                      </g>

                      {/* Piston Head */}
                      <rect x="0" y={pistonY} width="400" height="20" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" className="transition-all duration-300" />
                      {/* Piston Rods */}
                      <rect x="100" y="0" width="10" height={pistonY} fill="#94A3B8" />
                      <rect x="300" y="0" width="10" height={pistonY} fill="#94A3B8" />
                      
                      <text x="20" y="180" fill="#1E3A8A" fontSize="14" fontWeight="bold">
                          {labValue > 70 ? "ضغط مرتفع (High)" : "ضغط منخفض (Low)"}
                      </text>
                  </svg>
              );

          case 'wind':
              // Lab Value = Wind Speed (Animation Duration)
              const speedDuration = Math.max(0.1, 2 - (labValue / 50)); 
              
              return (
                  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="200" fill="#E2E8F0" />
                      
                      {/* Anemometer Cups */}
                      <g transform="translate(200, 100)">
                          {/* IMPORTANT: transform-box: fill-box and transform-origin: center are needed for CSS rotations on SVG elements in some browsers */}
                          <g style={{ animation: `spin ${speedDuration}s linear infinite`, transformBox: 'fill-box', transformOrigin: 'center' }}>
                              <line x1="0" y1="0" x2="60" y2="0" stroke="#475569" strokeWidth="4" />
                              <line x1="0" y1="0" x2="-60" y2="0" stroke="#475569" strokeWidth="4" />
                              <line x1="0" y1="0" x2="0" y2="60" stroke="#475569" strokeWidth="4" />
                              <line x1="0" y1="0" x2="0" y2="-60" stroke="#475569" strokeWidth="4" />
                              
                              <circle cx="60" cy="0" r="10" fill="#EF4444" />
                              <circle cx="-60" cy="0" r="10" fill="#3B82F6" />
                              <circle cx="0" cy="60" r="10" fill="#3B82F6" />
                              <circle cx="0" cy="-60" r="10" fill="#3B82F6" />
                          </g>
                          <circle cx="0" cy="0" r="5" fill="#1E293B" />
                          <rect x="-2" y="0" width="4" height="100" fill="#64748B" />
                      </g>
                      
                      <text x="20" y="180" fill="#475569" fontSize="14" fontWeight="bold">
                          السرعة: {labValue} عقدة
                      </text>
                  </svg>
              );

          case 'humidity':
              // Lab Value = Humidity % (Cloudiness / Droplets)
              return (
                  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="200" fill={labValue > 80 ? "#94A3B8" : "#BFDBFE"} className="transition-colors duration-500" />
                      
                      {/* Sun (hidden if humid) */}
                      <circle cx="350" cy="50" r="30" fill="#FDE047" opacity={1 - (labValue/100)} className="transition-opacity duration-500" />

                      {/* Clouds */}
                      <path d="M50,100 Q70,80 90,100 T130,100 T170,100" fill="none" stroke="white" strokeWidth="20" strokeLinecap="round" opacity={labValue/100} />
                      <path d="M200,80 Q220,60 240,80 T280,80 T320,80" fill="none" stroke="white" strokeWidth="30" strokeLinecap="round" opacity={labValue/100} />

                      {/* Hygrometer Needle */}
                      <g transform="translate(200, 150)">
                          <path d="M-50,0 A50,50 0 0,1 50,0" fill="none" stroke="#1E293B" strokeWidth="4" />
                          <line x1="0" y1="0" x2="0" y2="-40" stroke="#DC2626" strokeWidth="3" transform={`rotate(${(labValue * 1.8) - 90})`} className="transition-transform duration-300" />
                          <circle cx="0" cy="0" r="5" fill="#1E293B" />
                      </g>
                      
                      <text x="30" y="180" fill="#1E3A8A" fontSize="14" fontWeight="bold">
                          رطوبة: {labValue}%
                      </text>
                  </svg>
              );

          case 'precipitation':
              // Lab Value = Rain amount (mm)
              return (
                  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <rect width="400" height="200" fill="#334155" />
                      
                      {/* Rain Gauge */}
                      <g transform="translate(180, 50)">
                          <rect x="0" y="0" width="40" height="120" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
                          {/* Water Level */}
                          <rect 
                            x="2" 
                            y={120 - labValue} 
                            width="36" 
                            height={labValue} 
                            fill="#3B82F6" 
                            opacity="0.8"
                            className="transition-all duration-300"
                          />
                          {/* Marks */}
                          <line x1="0" y1="30" x2="10" y2="30" stroke="#94A3B8" />
                          <line x1="0" y1="60" x2="10" y2="60" stroke="#94A3B8" />
                          <line x1="0" y1="90" x2="10" y2="90" stroke="#94A3B8" />
                      </g>

                      {/* Falling Rain Animation (CSS) */}
                      {isActive && (
                          <g className="animate-[rain_1s_linear_infinite]">
                              {Array.from({length: 20}).map((_, i) => (
                                  <line 
                                    key={i} 
                                    x1={Math.random() * 400} 
                                    y1={Math.random() * -100} 
                                    x2={Math.random() * 400} 
                                    y2={Math.random() * 200} 
                                    stroke="#60A5FA" 
                                    strokeWidth="2" 
                                    opacity="0.6"
                                  />
                              ))}
                          </g>
                      )}
                      
                      <text x="240" y="150" fill="white" fontSize="14" fontWeight="bold">
                          المطر: {labValue} ملم
                      </text>
                  </svg>
              );

          default:
              return null;
      }
  };

  return (
    <div className="flex flex-col gap-8 p-6 animate-fade-in">
      
      <div className="text-center mb-4">
        <h2 className="text-3xl font-black text-slate-800">عناصر الطقس وأدوات القياس</h2>
        <p className="text-slate-500">مختبر الأرصاد الجوية: اختر عنصراً لتجربته</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Element Selection List */}
          <div className="space-y-3 lg:col-span-1">
              {WEATHER_ELEMENTS_DATA.map((el) => (
                  <button
                    key={el.id}
                    onClick={() => setSelectedElement(el)}
                    className={`w-full p-4 rounded-xl flex items-center justify-between border-2 transition-all duration-300 ${selectedElement.id === el.id ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg transform scale-105' : 'bg-white text-slate-600 border-slate-100 hover:border-indigo-200'}`}
                  >
                      <div className="flex items-center gap-3">
                          <span className="text-2xl">{el.icon}</span>
                          <div className="text-right">
                              <div className="font-bold text-lg">{el.name}</div>
                              <div className={`text-xs ${selectedElement.id === el.id ? 'text-indigo-200' : 'text-slate-400'}`}>الأداة: {el.instrument}</div>
                          </div>
                      </div>
                      <div className="bg-white/20 p-2 rounded-full">
                          <Settings size={18} />
                      </div>
                  </button>
              ))}
          </div>

          {/* Interactive Lab Area */}
          <div className="lg:col-span-2 space-y-6">
              
              {/* Simulation Box */}
              <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative h-72 border-4 border-slate-800">
                  {renderElementIllustration(selectedElement.id)}
                  
                  {/* Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 flex items-center gap-4">
                      <div className="text-white font-bold flex-shrink-0">تحكم في {selectedElement.name}:</div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={labValue} 
                        onChange={(e) => setLabValue(Number(e.target.value))}
                        className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                      />
                      {selectedElement.id === 'precipitation' && (
                          <button 
                            onClick={() => setIsActive(!isActive)}
                            className={`p-2 rounded-full ${isActive ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'}`}
                          >
                              <CloudRain />
                          </button>
                      )}
                  </div>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-indigo-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2 text-indigo-700 font-bold">
                          <Info size={20} /> التعريف والأهمية
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">{selectedElement.definition}</p>
                      <p className="text-xs text-slate-500 bg-indigo-50 p-2 rounded border border-indigo-100">{selectedElement.importance}</p>
                  </div>

                  <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2 text-orange-700 font-bold">
                          <Lightbulb size={20} /> في حياتنا اليومية
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed italic">"{selectedElement.realWorldExample}"</p>
                      <div className="mt-3 flex items-center gap-2 text-xs font-bold text-orange-800">
                          <span>وحدة القياس:</span>
                          <span className="bg-white px-2 py-1 rounded shadow-sm">{selectedElement.unit}</span>
                      </div>
                  </div>
              </div>

              {/* Interactive Challenge - Icon cloneElement fixed here */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white flex items-center justify-between shadow-lg">
                  <div>
                      <h4 className="font-bold text-lg mb-1">هل تعلم؟</h4>
                      <p className="text-indigo-100 text-sm max-w-md">{selectedElement.mechanism}</p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-full animate-pulse">
                      {React.cloneElement(selectedElement.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
              </div>

          </div>
      </div>
      
      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes rain { 0% { transform: translateY(0); } 100% { transform: translateY(200px); } }
      `}</style>
    </div>
  );
};

export default SectionElements;
