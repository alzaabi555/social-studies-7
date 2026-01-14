import React, { useState } from 'react';
import { OMAN_UMAYYAD_ACHIEVEMENTS_SECTIONS, OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ } from '../constants';
import { Section } from '../types';
import { Menu, ArrowRight, BookOpen, User, PenTool, Swords, Map, Coins, Globe, Anchor, Mic, Lightbulb, Ship, Star, Shield } from 'lucide-react';
import SectionQuiz from './SectionQuiz';

interface Props {
    onBack: () => void;
}

const OmanUmayyadAchievementsLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.OMAN_ACHIEVEMENTS_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. INTRO & UNESCO ---
  const IntroSection = () => {
      const [showInfo, setShowInfo] = useState(false);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="bg-teal-50 border-r-4 border-teal-600 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                      <Star size={24}/> أهداف الدرس:
                  </h3>
                  <ul className="grid gap-3 text-teal-800 font-medium text-lg">
                      <li>1. التعرف على المنجزات الثقافية والعلمية للعمانيين في العصر الأموي.</li>
                      <li>2. تقدير الدور العسكري للعمانيين في الفتوحات وتأمين الدولة.</li>
                      <li>3. استنتاج أهمية الموقع الجغرافي لعمان في النشاط الاقتصادي.</li>
                  </ul>
              </div>

              {/* UNESCO Hook */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white text-center">
                      <div className="inline-block bg-white/20 p-4 rounded-full mb-4 animate-pulse">
                          <Globe size={48} />
                      </div>
                      <h2 className="text-3xl font-black mb-4">10 فبراير.. يوم خاص!</h2>
                      <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
                          اعتمدت منظمة <strong>اليونسكو</strong> العالمية شخصيات عمانية مؤثرة في تاريخ البشرية ضمن برنامجها الخاص.
                      </p>
                  </div>
                  
                  <div className="p-8 text-center">
                      <h3 className="text-xl font-bold text-slate-800 mb-6">هل تعلم من هي الشخصية العمانية التي أدرجت في هذا البرنامج؟</h3>
                      
                      {!showInfo ? (
                          <button 
                            onClick={() => setShowInfo(true)}
                            className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-teal-700 transition-transform hover:scale-105"
                          >
                              اكشف الشخصية 🔍
                          </button>
                      ) : (
                          <div className="animate-slide-up bg-teal-50 p-6 rounded-2xl border-2 border-teal-100 inline-block">
                              <div className="text-6xl mb-4">📖</div>
                              <h4 className="text-2xl font-black text-teal-900 mb-2">الخليل بن أحمد الفراهيدي</h4>
                              <p className="text-teal-700 font-medium">عبقري اللغة العربية ومؤسس علم العروض</p>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. CULTURAL SECTION ---
  const CulturalSection = () => {
      const [activeScholar, setActiveScholar] = useState<string | null>(null);
      const [hammerStep, setHammerStep] = useState(0);

      const playHammer = () => {
          setHammerStep(prev => prev < 4 ? prev + 1 : 0);
      };

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">أولاً: المجال الثقافي</h2>
                  <p className="text-slate-500">شهد العصر الأموي نهضة علمية كبيرة أسهم فيها العمانيون</p>
              </div>

              {/* Scholars Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                  <div 
                    onClick={() => setActiveScholar('jabir')}
                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all ${activeScholar === 'jabir' ? 'bg-amber-50 border-amber-500 shadow-md' : 'bg-white border-slate-200 hover:border-amber-300'}`}
                  >
                      <div className="flex items-center gap-4 mb-4">
                          <div className="bg-amber-100 p-3 rounded-full text-amber-700"><BookOpen size={28}/></div>
                          <h3 className="text-xl font-bold text-slate-800">جابر بن زيد</h3>
                      </div>
                      <p className="text-slate-600">أول من ألف في علم الفقه (الشرعي).</p>
                  </div>

                  <div 
                    onClick={() => setActiveScholar('kaab')}
                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all ${activeScholar === 'kaab' ? 'bg-purple-50 border-purple-500 shadow-md' : 'bg-white border-slate-200 hover:border-purple-300'}`}
                  >
                      <div className="flex items-center gap-4 mb-4">
                          <div className="bg-purple-100 p-3 rounded-full text-purple-700"><Mic size={28}/></div>
                          <h3 className="text-xl font-bold text-slate-800">كعب بن معدان</h3>
                      </div>
                      <p className="text-slate-600">برز في علم الشعر والخطابة.</p>
                  </div>
              </div>

              {/* Al-Farahidi Story */}
              <div className="bg-slate-800 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 p-32 bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-teal-300 mb-4 flex items-center gap-2">
                          <Lightbulb /> قصة اكتشاف علم العروض
                      </h3>
                      <p className="text-lg leading-relaxed mb-6 text-slate-200">
                          مر الخليل بن أحمد في سوق الصفارين، فسمع طرقات المطارق على الأواني... فماذا حدث؟
                      </p>
                      
                      <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-center">
                          <div className="flex gap-4 mb-4">
                              {/* Visual Rhythm Simulation */}
                              <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all ${hammerStep === 1 || hammerStep === 3 ? 'bg-yellow-400 border-yellow-200 scale-110' : 'bg-transparent border-slate-500'}`}>
                                  <span className="text-2xl">🔨</span>
                              </div>
                              <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all ${hammerStep === 2 || hammerStep === 4 ? 'bg-yellow-400 border-yellow-200 scale-110' : 'bg-transparent border-slate-500'}`}>
                                  <span className="text-2xl">🔨</span>
                              </div>
                          </div>
                          <button 
                            onClick={playHammer}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-bold transition-colors"
                          >
                              {hammerStep === 0 ? "استمع للإيقاع" : "طرقة أخرى"}
                          </button>
                          
                          {hammerStep > 0 && (
                              <p className="mt-4 text-yellow-300 font-bold animate-fade-in">
                                  تن تن.. تنتن.. (لاحظ الخليل أن للإيقاع وزناً موسيقياً، فأسس علم العروض لوزن الشعر)
                              </p>
                          )}
                      </div>
                  </div>
              </div>

              {/* Hind bint Al-Muhallab */}
              <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-xl shadow-sm">
                  <div className="flex items-start gap-4">
                      <div className="bg-pink-100 p-3 rounded-full text-pink-600 mt-1"><User size={24}/></div>
                      <div>
                          <h4 className="font-bold text-pink-900 text-lg mb-2">شخصية نسائية: هند بنت المهلب</h4>
                          <p className="text-pink-800 text-sm leading-relaxed italic">
                              "إذا رأيتم النعم مستدرة، فبادروا بالشكر قبل حلول الزوال."
                          </p>
                          <p className="text-xs text-pink-600 mt-2 font-bold">عُرفت بالحكمة ورجاحة العقل.</p>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. MILITARY SECTION ---
  const MilitarySection = () => {
      const [role, setRole] = useState<'internal' | 'external'>('internal');

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">ثانياً: المجال العسكري</h2>
                  <p className="text-slate-500">دور العمانيين في حماية الدولة والفتوحات</p>
              </div>

              <div className="flex justify-center bg-slate-100 p-1 rounded-full max-w-md mx-auto mb-8">
                  <button 
                      onClick={() => setRole('internal')}
                      className={`flex-1 py-2 px-4 rounded-full font-bold transition-all ${role === 'internal' ? 'bg-white shadow text-red-700' : 'text-slate-500'}`}
                  >
                      داخلياً (الأمن)
                  </button>
                  <button 
                      onClick={() => setRole('external')}
                      className={`flex-1 py-2 px-4 rounded-full font-bold transition-all ${role === 'external' ? 'bg-white shadow text-orange-700' : 'text-slate-500'}`}
                  >
                      خارجياً (الفتوحات)
                  </button>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 text-center min-h-[300px] flex flex-col justify-center items-center">
                  {role === 'internal' ? (
                      <div className="animate-slide-up">
                          <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                              <Shield size={40} />
                          </div>
                          <h3 className="text-xl font-black text-red-900 mb-3">حماية الجبهة الداخلية</h3>
                          <p className="text-lg text-slate-600 max-w-md mx-auto">
                              المحافظة على أمن السواحل العمانية واستقرارها، والتصدي لأي غزوات خارجية تهدد الوطن.
                          </p>
                      </div>
                  ) : (
                      <div className="animate-slide-up">
                          <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
                              <Swords size={40} />
                          </div>
                          <h3 className="text-xl font-black text-orange-900 mb-3">المشاركة في الفتوحات</h3>
                          <p className="text-lg text-slate-600 max-w-md mx-auto mb-4">
                              المساهمة في الفتوحات الإسلامية الكبرى، مثل فتح <strong>بلاد ما وراء النهر</strong>.
                          </p>
                          <div className="bg-orange-50 px-4 py-2 rounded-lg inline-block text-orange-800 font-bold text-sm">
                              مثال: فتح جرجان (89هـ) وبناء 40 مسجداً فيها.
                          </div>
                      </div>
                  )}
              </div>

              {/* Al-Muhallab Profile */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-xl">
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-3xl font-black shadow-lg border-4 border-slate-700">
                      ⚔️
                  </div>
                  <div className="text-center md:text-right">
                      <h4 className="text-2xl font-black text-red-400 mb-2">المهلب بن أبي صفرة</h4>
                      <p className="text-slate-300 leading-relaxed">
                          قائد عظيم ولاّه الأمويون على <strong>خراسان</strong>، وقاد جيوش المسلمين لفتح بلاد واسعة في الشرق، وكان له دور حاسم في تثبيت أركان الدولة.
                      </p>
                  </div>
              </div>
          </div>
      );
  };

  // --- 4. ECONOMIC SECTION ---
  const EconomicSection = () => {
      const [coinRevealed, setCoinRevealed] = useState(false);

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">ثالثاً: المجال الاقتصادي</h2>
                  <p className="text-slate-500">عمان.. همزة الوصل بين الشرق والغرب</p>
              </div>

              {/* Trade Map SVG */}
              <div className="bg-blue-50 p-4 rounded-3xl border border-blue-200 overflow-hidden shadow-lg relative">
                  <h3 className="font-bold text-blue-900 text-center mb-4">خطوط التجارة البحرية (الشكل 7)</h3>
                  <div className="relative h-64 bg-blue-200 rounded-xl overflow-hidden border-2 border-white shadow-inner">
                      {/* Simplified Map */}
                      <svg viewBox="0 0 400 200" className="w-full h-full opacity-80">
                          {/* Land masses (Abstract) */}
                          <path d="M0,0 L150,0 L120,100 L50,150 L0,200 Z" fill="#E2E8F0" /> {/* Africa/Arabia */}
                          <path d="M300,0 L400,0 L400,100 L350,150 L250,50 Z" fill="#E2E8F0" /> {/* India/China */}
                          
                          {/* Route Lines */}
                          <path d="M100,100 Q200,150 300,80" fill="none" stroke="#DC2626" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse"/>
                          <circle cx="100" cy="100" r="3" fill="red" /> <text x="80" y="95" fontSize="10" fontWeight="bold">عمان</text>
                          <circle cx="300" cy="80" r="3" fill="blue" /> <text x="310" y="80" fontSize="10" fontWeight="bold">الهند/الصين</text>
                          <circle cx="50" cy="150" r="3" fill="green" /> <text x="20" y="160" fontSize="10" fontWeight="bold">شرق أفريقيا</text>
                          
                          {/* Ship Animation */}
                          <g>
                              <text x="0" y="0" fontSize="20" style={{ offsetPath: "path('M100,100 Q200,150 300,80')", animation: "moveShip 4s linear infinite" }}>⛵</text>
                          </g>
                      </svg>
                  </div>
                  <div className="mt-4 flex gap-2 justify-center flex-wrap">
                      <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-blue-800 shadow-sm">موقع استراتيجي</span>
                      <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-blue-800 shadow-sm">تواصل حضاري</span>
                      <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-blue-800 shadow-sm">نشر الإسلام</span>
                  </div>
              </div>

              {/* First Coin */}
              <div className="flex flex-col items-center justify-center p-8 bg-slate-900 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gold-scale.png')] opacity-20"></div>
                  
                  <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                      <Coins /> حدث اقتصادي هام (81هـ)
                  </h3>

                  <div 
                    onClick={() => setCoinRevealed(!coinRevealed)}
                    className="relative w-40 h-40 cursor-pointer perspective-1000 group"
                  >
                      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${coinRevealed ? 'rotate-y-180' : ''}`}>
                          {/* Front */}
                          <div className="absolute inset-0 w-full h-full bg-yellow-500 rounded-full border-4 border-yellow-300 flex items-center justify-center shadow-lg backface-hidden">
                              <span className="font-black text-yellow-900 text-6xl">؟</span>
                          </div>
                          {/* Back */}
                          <div className="absolute inset-0 w-full h-full bg-yellow-400 rounded-full border-4 border-yellow-200 flex flex-col items-center justify-center shadow-lg backface-hidden rotate-y-180">
                              <span className="text-xs font-bold text-yellow-900">أول عملة</span>
                              <span className="text-2xl font-black text-yellow-900">عمانية</span>
                              <span className="text-xs font-bold text-yellow-900 mt-1">81 هـ</span>
                          </div>
                      </div>
                  </div>
                  <p className="mt-6 text-sm text-slate-300">اضغط على العملة لاكتشاف الحدث</p>
              </div>
              
              <style>{`
                @keyframes moveShip { 0% { offset-distance: 0%; } 100% { offset-distance: 100%; } }
                .rotate-y-180 { transform: rotateY(180deg); }
                .backface-hidden { backface-visibility: hidden; }
                .perspective-1000 { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
              `}</style>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.OMAN_ACHIEVEMENTS_INTRO: return <IntroSection />;
      case Section.OMAN_ACHIEVEMENTS_CULTURE: return <CulturalSection />;
      case Section.OMAN_ACHIEVEMENTS_MILITARY: return <MilitarySection />;
      case Section.OMAN_ACHIEVEMENTS_ECONOMY: return <EconomicSection />;
      case Section.QUIZ: return <SectionQuiz questions={OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-teal-700 px-2">منجزات عمان (الأموي) 🏺</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {OMAN_UMAYYAD_ACHIEVEMENTS_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === section.id ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-xl">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-teal-800">منجزات عمان الأموية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default OmanUmayyadAchievementsLesson;