import React, { useState } from 'react';
import { OMAN_UMAYYAD_SECTIONS, OMAN_UMAYYAD_QUIZ_QUESTIONS } from '../constants';
import { Section } from '../types';
import { Menu, ArrowRight, Target, Shield, Map, Flag, Users, UserCheck, Scroll, Ship, Swords, Anchor, Smile, Frown, History } from 'lucide-react';
import SectionQuiz from './SectionQuiz';

interface Props {
    onBack: () => void;
}

const OmanUmayyadLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.OMAN_UMAYYAD_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. INTRODUCTION SECTION ---
  const IntroSection = () => (
      <div className="p-6 animate-fade-in space-y-8">
          {/* Sultan Haitham Quote */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-700 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-full"><Scroll size={32} /></div>
                      <h3 className="text-xl font-bold text-orange-200">من الخطاب السامي (2020م)</h3>
                  </div>
                  <p className="text-lg leading-loose font-serif italic mb-4 text-center">
                      "وَعَلَى الصَّعِيدِ الْخَارِجِيِّ فَإِنَّنَا نَرْتَسِمُ خُطَى السُّلْطَانِ الرَّاحِلِ، مُؤَكِّدِينَ عَلَى الثَّوَابِتِ الَّتِي اخْتَطَّهَا لِسِيَاسَةِ بِلَادِنَا الْخَارِجِيَّةِ، الْقَائِمَةِ عَلَى التَّعَايُشِ السِّلْمِيِّ بَيْنَ الْأُمَمِ وَالشُّعُوبِ..."
                  </p>
                  <p className="text-left text-sm font-bold text-orange-200">- حضرة صاحب الجلالة السلطان هيثم بن طارق حفظه الله</p>
              </div>
          </div>

          {/* Objectives */}
          <div className="bg-amber-50 border-r-4 border-amber-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <Target size={24}/> أهداف الدرس:
              </h3>
              <ul className="grid gap-3 text-amber-800 font-medium text-lg">
                  <li>1. التعرف على موقف عمان مع بداية حكم الدولة الأموية.</li>
                  <li>2. تتبع مراحل استقلال عمان عن الدولة الأموية.</li>
                  <li>3. استنتاج سياسة الولاة الأمويين في عمان.</li>
                  <li>4. تحليل أسباب مقاومة العمانيين للسيطرة الأموية.</li>
              </ul>
          </div>
      </div>
  );

  // --- 2. OMANI STANCE SECTION ---
  const StanceSection = () => {
      const [revealed, setRevealed] = useState(false);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">موقف عُمان مع بداية الحكم الأموي</h2>
                  <p className="text-slate-500">كيف تعامل العمانيون مع التغيرات السياسية الكبرى؟</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-red-500">
                      <h3 className="font-bold text-lg text-slate-800 mb-3">الوضع العام</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                          حدثت صراعات وخلافات مع نهاية عصر الخلفاء الراشدين، أدت لانتقال الحكم إلى <strong>الدولة الأموية</strong>.
                      </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-green-500">
                      <h3 className="font-bold text-lg text-slate-800 mb-3">الموقف العماني</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                          ابتعـدت عُمان عـن تلـك الصراعـات، وأعلنـت عـدم ارتباطهـا بالدولـة الأمويـة، مـع <strong>الاستمرار في الدفاع عن بلادهم</strong> ضد أي هجمات خارجية.
                      </p>
                  </div>
              </div>

              {/* Al-Najdat Event */}
              <div className="bg-orange-50 rounded-3xl p-8 border border-orange-200 mt-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 p-20 bg-orange-200 opacity-20 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                      <h3 className="text-xl font-black text-orange-900 mb-4 flex items-center gap-2">
                          <Swords size={24}/> نافذة المعرفة: هجوم النجدات (69هـ)
                      </h3>
                      <div className="bg-white/80 p-4 rounded-xl text-slate-700 leading-relaxed shadow-sm">
                          <p className="mb-2">
                              دافع العمانيون عن بلادهم بشراسة عندما تعرضوا لهجوم من قبل <strong>"النجدات"</strong> (فرقة معارضة للأمويين).
                          </p>
                          <p className={`transition-all duration-500 ${revealed ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
                              انتهت المعركة بمقتل ملك عمان <strong>"عَبَّاد بن عَبد بن الجلندى"</strong> دفاعاً عن الوطن.
                          </p>
                          {!revealed && (
                              <button onClick={() => setRevealed(true)} className="mt-2 text-orange-600 font-bold underline text-sm">
                                  اضغط لمعرفة نتيجة المعركة
                              </button>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // --- 3. INDEPENDENCE SECTION ---
  const IndependenceSection = () => {
      // Timeline data for comparison
      const timelineEvents = [
          { year: '41هـ', oman: 'استقلال وعدم تبعية', umayyad: 'قيام الدولة الأموية' },
          { year: '69هـ', oman: 'مقتل عَبَّاد وتولي ابنيه', umayyad: 'عهد عبدالملك بن مروان' },
          { year: '81هـ', oman: 'دخول عمان تحت الحكم الأموي', umayyad: 'حملات الحجاج بن يوسف' }
      ];

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">استقلال عُمان ومقاومة التبعية</h2>
                  <p className="text-slate-500">عودة الحكم الوطني بقيادة ابني عَبَّاد</p>
              </div>

              {/* Comparative Timeline (New) */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                      <History size={20}/> خط زمني مقارن:
                  </h3>
                  <div className="relative">
                      <div className="absolute left-1/2 h-full w-1 bg-slate-200 -translate-x-1/2"></div>
                      <div className="space-y-8">
                          {timelineEvents.map((event, idx) => (
                              <div key={idx} className="flex justify-between items-center relative">
                                  <div className="w-5/12 text-left pr-4">
                                      <div className="bg-green-50 p-3 rounded-lg border border-green-100 shadow-sm">
                                          <span className="block text-xs text-green-600 font-bold mb-1">عمان</span>
                                          {event.oman}
                                      </div>
                                  </div>
                                  <div className="absolute left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                                      {event.year}
                                  </div>
                                  <div className="w-5/12 text-right pl-4">
                                      <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 shadow-sm">
                                          <span className="block text-xs text-orange-600 font-bold mb-1">الدولة الأموية</span>
                                          {event.umayyad}
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

              <div className="bg-slate-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3 flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 text-slate-500 shadow-md">
                          <Users size={48} />
                      </div>
                      <h3 className="font-bold text-xl text-slate-800">سعيد وسليمان</h3>
                      <p className="text-sm text-slate-500 mt-1">ابنا عَبَّاد بن عَبد</p>
                  </div>
                  <div className="md:w-2/3">
                      <h4 className="font-bold text-lg text-indigo-900 mb-4">كفاح من أجل الاستقلال</h4>
                      <p className="text-slate-700 leading-loose mb-6 text-lg">
                          بعد مقتل والدهما، قاد <strong>سعيد وسليمان</strong> المقاومة. استطاعا استعادة استقلال عمان، وأصبحا يديران شؤون البلاد بأنفسهم، ووقفوا بالمرصاد لمحاولات الأمويين للسيطرة.
                      </p>
                      <div className="bg-white p-4 rounded-xl border-l-4 border-indigo-500 flex gap-4 items-center shadow-sm">
                          <Shield size={32} className="text-indigo-600" />
                          <div>
                              <span className="block font-bold text-indigo-800">النتيجة:</span>
                              <span className="text-sm text-indigo-700">تحرير البلاد وحكم مستقل حتى عام 81هـ.</span>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Discussion Question */}
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 mt-4">
                  <h4 className="font-bold text-yellow-900 text-lg mb-2 flex items-center gap-2">
                      <UserCheck size={20}/> شارك برأيك:
                  </h4>
                  <p className="text-yellow-800 text-lg">
                      أسند "عَبَّاد بن عبد" لابنيه عدداً من المهام في إدارة عمان. 
                      <br/><strong>ما أهمية مشاركة الأبناء لأولياء أمورهم في تحمل المسؤولية؟</strong>
                  </p>
                  <textarea className="w-full mt-4 p-3 rounded-lg border border-yellow-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="اكتب رأيك هنا..."></textarea>
              </div>
          </div>
      );
  };

  // --- 4. UMAYYAD CONTROL SECTION (MAP SIMULATION) ---
  const ControlSection = () => {
      const [campaignStep, setCampaignStep] = useState(0);

      const playCampaign = () => {
          if (campaignStep < 2) setCampaignStep(prev => prev + 1);
          else setCampaignStep(0);
      };

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">سيطرة الدولة الأموية (الشكل 4)</h2>
                  <p className="text-slate-500">حملات الحجاج بن يوسف الثقفي للسيطرة على عمان</p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-xl border border-blue-100">
                  <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-blue-900">محاكاة الحملات العسكرية</h3>
                      <button onClick={playCampaign} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow hover:bg-blue-700 transition-colors">
                          {campaignStep === 0 ? "ابدأ المحاكاة" : campaignStep === 2 ? "إعادة" : "التالي"}
                      </button>
                  </div>

                  <div className="relative w-full h-80 bg-blue-50 rounded-2xl overflow-hidden border-2 border-blue-200 shadow-inner">
                      {/* Base Map SVG */}
                      <svg viewBox="0 0 600 400" className="w-full h-full absolute inset-0">
                          {/* Land Outline (Rough approximation of Oman/Gulf) */}
                          <path d="M0,200 Q100,180 200,220 T400,250 L550,280 L600,400 H0 Z" fill="#E2E8F0" />
                          <path d="M0,200 L600,200 L600,0 L0,0 Z" fill="#BFDBFE" /> {/* Sea */}
                          
                          {/* Locations */}
                          <circle cx="100" cy="150" r="5" fill="black" /> <text x="90" y="140" fontSize="12" fontWeight="bold">البصرة (العراق)</text>
                          <circle cx="400" cy="250" r="5" fill="#DC2626" /> <text x="410" y="250" fontSize="12" fontWeight="bold">مسقط</text>
                          <circle cx="350" cy="240" r="5" fill="#DC2626" /> <text x="340" y="260" fontSize="12" fontWeight="bold">صحار</text>

                          {/* Campaign 1: Failed (Land) */}
                          {campaignStep >= 1 && (
                              <g>
                                  <path d="M100,150 Q150,200 350,240" fill="none" stroke="#EF4444" strokeWidth="3" strokeDasharray="5 5" />
                                  <text x="200" y="180" fontSize="12" fill="#EF4444" fontWeight="bold">حملات برية (فاشلة)</text>
                                  <text x="300" y="220" fontSize="20">❌</text>
                              </g>
                          )}

                          {/* Campaign 2: Successful (Sea) */}
                          {campaignStep >= 2 && (
                              <g>
                                  <path d="M100,150 Q250,100 400,250" fill="none" stroke="#16A34A" strokeWidth="4" markerEnd="url(#arrow)" className="animate-[draw_2s_linear_forwards] stroke-dasharray-500" />
                                  <text x="250" y="120" fontSize="12" fill="#16A34A" fontWeight="bold">حملة بحرية ضخمة (ناجحة)</text>
                                  <text x="390" y="230" fontSize="20" className="animate-bounce">✅</text>
                              </g>
                          )}
                          
                          <defs>
                              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                  <path d="M0,0 L0,6 L9,3 z" fill="#16A34A" />
                              </marker>
                          </defs>
                      </svg>
                  </div>

                  <div className="mt-6 bg-slate-50 p-4 rounded-xl text-base text-slate-700 leading-relaxed font-medium">
                      <p>
                          لم ينجح الأمويون في البداية، لكن الحجاج بن يوسف أرسل حملة بحرية كبيرة وجيشاً جراراً، مما أدى لسيطرتهم على عمان عام <strong>81هـ</strong>.
                      </p>
                  </div>
              </div>

              {/* Personality: Sulayman bin Abbad */}
              <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500 flex items-start gap-4 shadow-sm">
                  <div className="bg-red-100 p-3 rounded-full text-red-600 mt-1">
                      <Swords size={24} />
                  </div>
                  <div>
                      <h4 className="font-bold text-red-900 text-lg mb-2">سليمان بن عَبَّاد بن الجلندى</h4>
                      <p className="text-red-800 text-base leading-relaxed">
                          كان قائداً للجيوش العمانية التي تصدت للجيش الأموي (بقيادة القاسم بن شعوة)، واستطاع الانتصار عليهم في البداية قبل أن تتغير الموازين.
                      </p>
                  </div>
              </div>
          </div>
      );
  };

  // --- 5. GOVERNORS SECTION ---
  const GovernorsSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">عُمال الدولة الأموية (الولاة)</h2>
                  <p className="text-slate-500">كيف كانت العلاقة بين الولاة الأمويين والعمانيين؟</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:scale-105 transition-transform">
                      <div className="flex items-center gap-3 mb-4">
                          <div className="bg-slate-100 p-3 rounded-full text-slate-600"><UserCheck size={24}/></div>
                          <h3 className="font-bold text-slate-800 text-lg">تعيين العمال</h3>
                      </div>
                      <p className="text-slate-600 text-base leading-relaxed">
                          استمرت الدولة الأموية في تعيين العمال (الولاة) على عمان. من أمثلتهم:
                      </p>
                      <ul className="mt-3 space-y-2 text-sm font-bold text-indigo-700">
                          <li>• صالح بن عبد الرحمن الليثي</li>
                          <li>• عمر بن عبد الله الأنصاري</li>
                      </ul>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:scale-105 transition-transform">
                      <div className="flex items-center gap-3 mb-4">
                          <div className="bg-orange-100 p-3 rounded-full text-orange-600"><Flag size={24}/></div>
                          <h3 className="font-bold text-slate-800 text-lg">زياد بن المهلب</h3>
                      </div>
                      <p className="text-slate-600 text-base leading-relaxed">
                          شخصية عمانية بارزة، كان والياً للأمويين على عمان في <strong>أواخر حكم الدولة الأموية</strong>.
                      </p>
                  </div>
              </div>

              {/* Reaction Section */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl mt-8 relative overflow-hidden">
                  <div className="relative z-10 text-center">
                      <h3 className="text-2xl font-black mb-6">موقف أهل عمان من الولاة</h3>
                      <div className="flex justify-center gap-8 md:gap-16">
                          <div className="flex flex-col items-center">
                              <div className="bg-white/20 p-4 rounded-full mb-3"><Smile size={40} className="text-yellow-300"/></div>
                              <span className="font-bold text-lg">العدل وحسن المعاملة</span>
                              <span className="text-sm opacity-80 mt-1">يتقبلون الوالي ويطيعونه</span>
                          </div>
                          <div className="w-px bg-white/30 h-32"></div>
                          <div className="flex flex-col items-center">
                              <div className="bg-white/20 p-4 rounded-full mb-3"><Frown size={40} className="text-red-300"/></div>
                              <span className="font-bold text-lg">الظلم والإساءة</span>
                              <span className="text-sm opacity-80 mt-1">يرفضونه ويشكون للخليفة</span>
                          </div>
                      </div>
                      <p className="mt-8 text-base opacity-90 font-medium bg-black/20 p-3 rounded-lg inline-block">
                          "ظل الوضع كذلك حتى سقوط الدولة الأموية عام 132هـ، حيث عادت عمان لاستقلالها الكامل."
                      </p>
                  </div>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.OMAN_UMAYYAD_INTRO: return <IntroSection />;
      case Section.OMAN_UMAYYAD_STANCE: return <StanceSection />;
      case Section.OMAN_UMAYYAD_INDEPENDENCE: return <IndependenceSection />;
      case Section.OMAN_UMAYYAD_CONTROL: return <ControlSection />;
      case Section.OMAN_UMAYYAD_GOVERNORS: return <GovernorsSection />;
      case Section.QUIZ: return <SectionQuiz questions={OMAN_UMAYYAD_QUIZ_QUESTIONS} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-orange-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-orange-100 flex flex-col`}>
        <div className="p-4 border-b border-orange-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-orange-600 bg-slate-50 hover:bg-orange-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-orange-700 px-2">عمان والأمويون ⚔️</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {OMAN_UMAYYAD_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold text-base ${activeSection === section.id ? 'bg-orange-100 text-orange-800' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-xl">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-orange-800">عمان والأمويون</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default OmanUmayyadLesson;