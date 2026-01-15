
import React, { useState } from 'react';
import { Section } from '../../types';
import { Menu, ArrowRight, Target, Globe2, Sun, Cloud, Droplet, Mountain, Info, CheckCircle, HelpCircle, ShieldCheck, Leaf, Quote, Telescope, BookOpen, RotateCcw } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const EarthSpheresLesson1: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.SPHERES_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. SOLAR SYSTEM & INTRO TO SPHERES (Pages 17-20) ---
  const SolarSystemSection = () => {
      const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
      const [showIntroDialogue, setShowIntroDialogue] = useState(true);
      
      // Interactive Table State
      const [tableAnswers, setTableAnswers] = useState<{[key: number]: boolean}>({});

      const planets = [
          { id: 'mercury', name: 'عطارد', color: 'bg-stone-400', size: 12, orbit: 60, speed: 2, desc: 'أقرب الكواكب للشمس وشديد الحرارة.' },
          { id: 'venus', name: 'الزهرة', color: 'bg-orange-300', size: 18, orbit: 90, speed: 3, desc: 'توأم الأرض في الحجم، وأكثر الكواكب لمعاناً.' },
          { id: 'earth', name: 'الأرض', color: 'bg-blue-500', size: 20, orbit: 130, speed: 4, desc: 'الكوكب المائي، وهو الوحيد الذي توجد عليه حياة.' },
          { id: 'mars', name: 'المريخ', color: 'bg-red-500', size: 16, orbit: 170, speed: 5, desc: 'الكوكب الأحمر.' },
          { id: 'jupiter', name: 'المشتري', color: 'bg-orange-200', size: 40, orbit: 230, speed: 8, desc: 'أكبر كواكب المجموعة الشمسية.' },
          { id: 'saturn', name: 'زحل', color: 'bg-yellow-200', size: 35, orbit: 290, speed: 10, ring: true, desc: 'يتميز بوجود حلقات ملونة تدور حوله.' },
          { id: 'uranus', name: 'أورانوس', color: 'bg-cyan-300', size: 25, orbit: 340, speed: 12, desc: 'الكوكب البارد.' },
          { id: 'neptune', name: 'نبتون', color: 'bg-blue-700', size: 24, orbit: 390, speed: 14, desc: 'أبعد الكواكب وشديد البرودة.' },
      ];

      const tableData = [
          { id: 1, question: 'الكوكب الأقرب إلى الشمس', answer: 'عطارد' },
          { id: 2, question: 'الكوكب الأكبر في المجموعة الشمسية', answer: 'المشتري' },
          { id: 3, question: 'الكوكب الثالث في الترتيب', answer: 'الأرض' },
          { id: 4, question: 'الكوكب الذي يتميز بوجود حلقات حوله', answer: 'زحل' },
      ];

      const toggleAnswer = (id: number) => {
          setTableAnswers(prev => ({...prev, [id]: true}));
      };

      return (
          <div className="p-6 animate-fade-in space-y-12">
              
              {/* Intro Dialogue */}
              {showIntroDialogue && (
                  <div className="bg-purple-100 rounded-3xl p-8 border-4 border-purple-200 shadow-xl relative mb-8">
                      <button onClick={() => setShowIntroDialogue(false)} className="absolute top-4 right-4 text-purple-400 hover:text-purple-600">✕</button>
                      <h2 className="text-2xl font-black text-purple-900 mb-6 text-center">حوار: نافذة على الكون 🪟</h2>
                      <div className="flex flex-col gap-6">
                          <div className="flex items-start gap-4">
                              <div className="bg-white p-3 rounded-full text-3xl shadow">👩‍👧</div>
                              <div className="bg-white p-4 rounded-2xl rounded-tr-none shadow-sm text-purple-800">
                                  <strong>الأم:</strong> ماذا تشاهدين يا فجر؟ أراك تقفين عند النافذة منذ فترة.
                              </div>
                          </div>
                          <div className="flex items-start gap-4 flex-row-reverse">
                              <div className="bg-white p-3 rounded-full text-3xl shadow">👧</div>
                              <div className="bg-purple-200 p-4 rounded-2xl rounded-tl-none shadow-sm text-purple-900">
                                  <strong>فجر:</strong> أتأمل الشمس يا أمي، هل هي قريبة منا؟ وهل نحن الكوكب الوحيد الموجود في هذا الكون؟ وهل تعيش عليها كائنات حية مثلنا؟
                              </div>
                          </div>
                      </div>
                  </div>
              )}

              {/* Objectives */}
              <div className="bg-indigo-50 border-r-4 border-indigo-600 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                      <Target size={24}/> أتعلم في هذا الدرس:
                  </h3>
                  <ul className="grid gap-3 text-indigo-800 font-medium text-lg leading-relaxed">
                      <li className="flex items-center gap-2">• موقع كوكب الأرض بالنسبة إلى المجموعة الشمسية.</li>
                      <li className="flex items-center gap-2">• أغلفة كوكب الأرض، ومكوناتها.</li>
                  </ul>
              </div>

              {/* Solar System Simulation */}
              <div className="bg-black rounded-3xl p-4 md:p-8 shadow-2xl overflow-hidden relative min-h-[600px] flex items-center justify-center border-4 border-slate-700">
                  <div className="absolute top-4 left-4 z-20">
                      <div className="bg-yellow-500/20 backdrop-blur-md p-4 rounded-xl border border-yellow-500/50 text-yellow-100 max-w-sm text-center">
                          <Quote size={20} className="mx-auto mb-2 text-yellow-400"/>
                          <p className="font-serif text-lg">﴿لَا الشَّمْسُ يَنْبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ ۚ وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ﴾</p>
                          <span className="text-xs text-yellow-300 block mt-2">(يس: 40)</span>
                      </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-3 rounded-xl z-20 text-sm font-medium max-w-xs border border-white/20">
                      <Info className="inline mb-1 ml-1" size={16}/> اضغط على الكواكب لمعرفة أسمائها
                  </div>
                  
                  {/* Sun */}
                  <div className="absolute bg-yellow-500 rounded-full w-24 h-24 md:w-36 md:h-36 shadow-[0_0_80px_rgba(253,224,71,0.6)] z-10 flex items-center justify-center">
                      <span className="text-yellow-900 font-black text-sm md:text-base">الشمس</span>
                  </div>
                  {/* Planets */}
                  {planets.map((planet) => (
                      <div key={planet.id} className="absolute rounded-full border border-white/10 pointer-events-none"
                           style={{ width: `${planet.orbit * 2}px`, height: `${planet.orbit * 2}px` }}>
                          <div className="w-full h-full animate-spin-slow" style={{ animationDuration: `${planet.speed * 50}s` }}>
                              <div 
                                  onClick={() => setSelectedPlanet(planet.id)}
                                  className={`absolute top-1/2 -right-[${planet.size/2}px] -translate-y-1/2 translate-x-1/2 ${planet.color} rounded-full cursor-pointer hover:scale-150 transition-transform z-20 shadow-lg pointer-events-auto flex items-center justify-center`}
                                  style={{ width: `${planet.size}px`, height: `${planet.size}px` }}
                              >
                                  {planet.ring && <div className="absolute w-[160%] h-[40%] border-2 border-yellow-100/50 rounded-full transform rotate-12 pointer-events-none"></div>}
                              </div>
                          </div>
                      </div>
                  ))}
                  {/* Info Modal */}
                  {selectedPlanet && (
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl z-30 w-11/12 md:w-96 text-center animate-slide-up border-b-4 border-indigo-600">
                          <h3 className="text-2xl font-black text-indigo-900 mb-3">{planets.find(p => p.id === selectedPlanet)?.name}</h3>
                          <p className="text-slate-700 font-medium mb-5 text-lg leading-relaxed">{planets.find(p => p.id === selectedPlanet)?.desc}</p>
                          <button onClick={() => setSelectedPlanet(null)} className="bg-indigo-600 text-white px-8 py-2 rounded-full font-bold text-base hover:bg-indigo-700 transition-colors">إغلاق</button>
                      </div>
                  )}
              </div>

              {/* Table Activity */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-100">
                  <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                          <BookOpen size={24} className="text-orange-500"/> تأمل وأجب:
                      </h3>
                      <span className="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold">اضغط للكشف عن الإجابة</span>
                  </div>
                  
                  <div className="overflow-x-auto">
                      <table className="w-full text-right border-collapse">
                          <thead>
                              <tr className="bg-orange-50">
                                  <th className="p-4 border border-orange-200 text-orange-900 font-black w-2/3">العبارة</th>
                                  <th className="p-4 border border-orange-200 text-orange-900 font-black w-1/3">اسم الكوكب</th>
                              </tr>
                          </thead>
                          <tbody className="text-slate-700">
                              {tableData.map((row) => (
                                  <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                                      <td className="p-4 border border-orange-100 font-medium text-lg">{row.question}</td>
                                      <td 
                                          className={`p-4 border border-orange-100 font-bold cursor-pointer transition-all duration-300 text-center select-none ${tableAnswers[row.id] ? 'bg-green-50 text-green-700' : 'bg-slate-50 text-slate-400 hover:bg-orange-100 hover:text-orange-600'}`}
                                          onClick={() => toggleAnswer(row.id)}
                                      >
                                          {tableAnswers[row.id] ? (
                                              <span className="flex items-center justify-center gap-2 animate-scale-in text-xl">
                                                  <CheckCircle size={20} /> {row.answer}
                                              </span>
                                          ) : (
                                              <span className="flex items-center justify-center gap-2 text-sm">
                                                  <HelpCircle size={18} /> اضغط للكشف
                                              </span>
                                          )}
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      default: return <SolarSystemSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">أغلفة كوكب الأرض 🌍</h1>
        </div>
        <nav className="p-4 space-y-3 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveSection(Section.SPHERES_INTRO); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === Section.SPHERES_INTRO ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Sun size={20}/> النظام الشمسي
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-indigo-800">أغلفة كوكب الأرض</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default EarthSpheresLesson1;
