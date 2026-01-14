import React, { useState } from 'react';
import { COMMUNITY_PARTICIPATION_SECTIONS, COMMUNITY_PARTICIPATION_QUIZ } from '../../../constants';
import { Section } from '../../../types';
import { Menu, ArrowRight, HeartHandshake, Vote, Calendar, MessageCircle, Target, Users, Search, PlayCircle, Star, Crown, CheckCircle2 } from 'lucide-react';
import SectionQuiz from '../../SectionQuiz';

interface Props {
    onBack: () => void;
}

const CommunityParticipationLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.COMMUNITY_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. INTRO & CONCEPT ---
  const IntroSection = () => {
      const [showDefinition, setShowDefinition] = useState(false);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              {/* Hook: Sultan Haitham Quote */}
              <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full blur-3xl"></div>
                  <div className="relative z-10 text-center">
                      <div className="inline-block bg-white/20 p-3 rounded-full mb-4">
                          <Crown size={32} />
                      </div>
                      <h3 className="text-lg font-bold text-blue-200 mb-4">من خطاب حَضْرَةِ صَاحِبِ الْجَلَالَةِ السُّلْطَانِ هَيْثَمِ بْنِ طَارِقٍ -حَفِظَهُ اللهُ-</h3>
                      <p className="text-xl font-serif leading-loose mb-6">
                          "يَنْبَغِي لَنَا جَمِيعاً أَنْ نَعْمَلَ مِنْ أَجْلِ رِفْعَةِ هَذَا الْبَلَدِ... وَلَنْ يَتَأَتَّى ذَلِكَ إِلَّا بِمُسَانَدَتِكُمْ وَتَعَاوُنِكُمْ وَتَضَافُرِ كَافَّةِ الْجُهُودِ..."
                      </p>
                      <p className="text-xs opacity-80">- 11 يناير 2020م</p>
                  </div>
              </div>

              {/* Concept Comparison: Sabla vs Modern Meetings */}
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200">
                  <div className="text-center mb-6">
                      <h2 className="text-2xl font-black text-slate-800 mb-2">مفهوم المشاركة: أَصَالَةٌ وَتَطَوُّرٌ</h2>
                      <p className="text-slate-500 text-sm">كيف كانت المشاركة قديماً وكيف أصبحت اليوم؟</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                      {/* Past */}
                      <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 text-center relative group hover:shadow-md transition-shadow">
                          <span className="absolute top-4 right-4 bg-amber-200 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">قديماً</span>
                          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🕌</div>
                          <h3 className="font-bold text-amber-900 text-lg mb-2">السَّبْلَةُ الْعُمَانِيَّةُ</h3>
                          <p className="text-amber-800 text-sm leading-relaxed">
                              المكان الذي يلتقي فيه أفراد المجتمع للتشاور وحل المشكلات وتعزيز الروابط الاجتماعية.
                          </p>
                      </div>

                      {/* Present */}
                      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 text-center relative group hover:shadow-md transition-shadow">
                          <span className="absolute top-4 right-4 bg-blue-200 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">حديثاً</span>
                          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏛️</div>
                          <h3 className="font-bold text-blue-900 text-lg mb-2">الْلِقَاءَاتُ السُّلْطَانِيَّةُ</h3>
                          <p className="text-blue-800 text-sm leading-relaxed">
                              نهج حكيم بدأه السلطان الراحل قابوس بن سعيد، ويستمر في عهد السلطان هيثم بن طارق، حيث يلتقي القائد بالمواطنين مباشرة.
                          </p>
                      </div>
                  </div>

                  {/* Interactive Definition */}
                  <div className="mt-8 text-center">
                      <button 
                        onClick={() => setShowDefinition(!showDefinition)}
                        className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-indigo-700 transition-transform active:scale-95"
                      >
                          {showDefinition ? 'إخفاء التعريف' : 'استنتج: ما هي الْمُشَارَكَةُ الْمُجْتَمَعِيَّةُ؟'}
                      </button>
                      
                      {showDefinition && (
                          <div className="mt-6 bg-indigo-50 p-6 rounded-2xl border border-indigo-200 animate-slide-up text-base font-bold text-indigo-900 leading-loose">
                              "هِيَ مُشَارَكَةُ الْمُوَاطِنِينَ فِي صُنْعِ الْقَرَارَاتِ الْوَطَنِيَّةِ، وَالْمُسَاهَمَةُ فِي تَنْمِيَةِ الْمُجْتَمَعِ مِنْ خِلَالِ الْعَمَلِ التَّطَوُّعِيِّ، وَالِانْتِخَابَاتِ، وَالْمُنَاسَبَاتِ الْوَطَنِيَّةِ."
                          </div>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. FORMS OF PARTICIPATION ---
  const FormsSection = () => {
      // Drag & Drop Simulation
      const [dragItems, setDragItems] = useState([
          { id: 1, text: "تنظيف الشاطئ", type: "voluntary" },
          { id: 2, text: "التصويت لعضو الشورى", type: "election" },
          { id: 3, text: "الاحتفال بالعيد الوطني", type: "event" },
          { id: 4, text: "لقاء الوالي بالمواطنين", type: "meeting" }
      ]);
      const [activeForm, setActiveForm] = useState<string | null>(null);

      // Student Council Voting Simulation State
      const [voteCast, setVoteCast] = useState(false);
      const [votes, setVotes] = useState({ ahmed: 0, sara: 0 });

      const handleVote = (candidate: 'ahmed' | 'sara') => {
          if (!voteCast) {
              setVotes(prev => ({...prev, [candidate]: prev[candidate] + 1}));
              setVoteCast(true);
          }
      };

      const classify = (id: number, type: string) => {
          const item = dragItems.find(i => i.id === id);
          if (item && item.type === type) {
              setDragItems(prev => prev.filter(i => i.id !== id));
          }
      };

      const forms = [
          { id: 'voluntary', title: 'العمل التطوعي', icon: <HeartHandshake />, desc: 'جهد يبذله الفرد أو الجماعة لخدمة المجتمع بلا مقابل.', color: 'bg-green-100 text-green-700' },
          { id: 'election', title: 'الانتخابات', icon: <Vote />, desc: 'اختيار الممثلين في المجالس (مثل مجلس الشورى والمجالس البلدية).', color: 'bg-blue-100 text-blue-700' },
          { id: 'event', title: 'المناسبات الوطنية', icon: <Star />, desc: 'المشاركة في الاحتفالات والأعياد الوطنية لتعزيز الانتماء.', color: 'bg-red-100 text-red-700' },
          { id: 'meeting', title: 'اللقاءات', icon: <MessageCircle />, desc: 'الاجتماعات المباشرة بين المسؤولين والمواطنين لمناقشة الاحتياجات.', color: 'bg-amber-100 text-amber-700' },
      ];

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">أشكال المشاركة المجتمعية</h2>
                  <p className="text-slate-500 text-sm">تتعدد صور المشاركة لخدمة الوطن.. تعرف عليها:</p>
              </div>

              {/* Forms Grid */}
              <div className="grid grid-cols-2 gap-4">
                  {forms.map((form) => (
                      <div 
                        key={form.id}
                        onClick={() => setActiveForm(activeForm === form.id ? null : form.id)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${activeForm === form.id ? 'bg-white border-indigo-500 shadow-lg scale-105 z-10' : 'bg-white border-slate-100 hover:border-indigo-200'}`}
                      >
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto ${form.color}`}>
                              {form.icon}
                          </div>
                          <h4 className="font-bold text-center text-slate-800 text-sm mb-1">{form.title}</h4>
                          {activeForm === form.id && (
                              <p className="text-xs text-center text-slate-500 animate-fade-in mt-2 leading-relaxed">{form.desc}</p>
                          )}
                      </div>
                  ))}
              </div>

              {/* Student Council Election Simulation (New Feature) */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                  <div className="flex items-center gap-3 mb-6">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600"><Vote size={24}/></div>
                      <h3 className="text-xl font-black text-slate-800">محاكاة: انتخابات مجلس الصف</h3>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                      {!voteCast ? (
                          <>
                              <p className="text-slate-600 mb-6 font-medium">مارس حقك الانتخابي! اختر مرشحاً ليمثلك في مجلس الصف:</p>
                              <div className="grid grid-cols-2 gap-6">
                                  <button onClick={() => handleVote('ahmed')} className="group p-4 rounded-xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all">
                                      <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">👦</div>
                                      <h4 className="font-bold text-slate-800">أحمد</h4>
                                      <p className="text-xs text-slate-500 mt-1">شعار: "بيئة مدرسية أفضل"</p>
                                  </button>
                                  <button onClick={() => handleVote('sara')} className="group p-4 rounded-xl border-2 border-slate-100 hover:border-pink-500 hover:bg-pink-50 transition-all">
                                      <div className="w-16 h-16 bg-pink-100 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">👧</div>
                                      <h4 className="font-bold text-slate-800">سارة</h4>
                                      <p className="text-xs text-slate-500 mt-1">شعار: "نحو التميز والإبداع"</p>
                                  </button>
                              </div>
                          </>
                      ) : (
                          <div className="animate-fade-in py-4">
                              <div className="text-green-600 mb-4 flex justify-center"><CheckCircle2 size={48} /></div>
                              <h4 className="text-xl font-bold text-slate-800 mb-2">شكراً لمشاركتك!</h4>
                              <p className="text-slate-500 text-sm mb-6">لقد مارست أحد أهم أشكال المشاركة المجتمعية.</p>
                              <div className="flex justify-center gap-2">
                                  <div className="text-xs bg-slate-100 px-3 py-1 rounded">أحمد: {votes.ahmed}</div>
                                  <div className="text-xs bg-slate-100 px-3 py-1 rounded">سارة: {votes.sara}</div>
                              </div>
                              <button onClick={() => setVoteCast(false)} className="mt-6 text-indigo-600 text-sm font-bold underline">إعادة التصويت</button>
                          </div>
                      )}
                  </div>
              </div>

              {/* Classification Game */}
              {dragItems.length > 0 && (
                  <div className="bg-slate-100 p-6 rounded-3xl border border-slate-200 mt-8">
                      <h3 className="font-bold text-slate-800 text-lg mb-4 text-center">نشاط: صنف العمل (اضغط على النوع المناسب)</h3>
                      
                      {/* Current Item */}
                      <div className="flex justify-center mb-6">
                          <div className="bg-white px-8 py-4 rounded-2xl shadow-lg border-b-4 border-indigo-500 animate-bounce">
                              <span className="font-black text-xl text-slate-800">{dragItems[0].text}</span>
                          </div>
                      </div>

                      {/* Buckets */}
                      <div className="grid grid-cols-2 gap-3">
                          <button onClick={() => classify(dragItems[0].id, 'voluntary')} className="bg-green-100 text-green-900 py-3 rounded-xl font-bold hover:bg-green-200 border border-green-300 text-sm">عمل تطوعي</button>
                          <button onClick={() => classify(dragItems[0].id, 'election')} className="bg-blue-100 text-blue-900 py-3 rounded-xl font-bold hover:bg-blue-200 border border-blue-300 text-sm">انتخابات</button>
                          <button onClick={() => classify(dragItems[0].id, 'event')} className="bg-red-100 text-red-900 py-3 rounded-xl font-bold hover:bg-red-200 border border-red-300 text-sm">مناسبات وطنية</button>
                          <button onClick={() => classify(dragItems[0].id, 'meeting')} className="bg-amber-100 text-amber-900 py-3 rounded-xl font-bold hover:bg-amber-200 border border-amber-300 text-sm">لقاءات</button>
                      </div>
                  </div>
              )}
          </div>
      );
  };

  // --- 3. IMPORTANCE & VISION ---
  const ImportanceSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-10">
              
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">لماذا نشارك؟ (الأهمية)</h2>
                  <p className="text-slate-500 text-sm">المشاركة المجتمعية هي ركيزة أساسية لبناء الوطن</p>
              </div>

              {/* Diagram Simulation */}
              <div className="relative h-80 w-full max-w-md mx-auto">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-center font-bold text-sm shadow-xl z-10 border-4 border-white">
                      أهمية المشاركة
                  </div>
                  
                  {/* Petals */}
                  {[
                      { text: "تعزيز الانتماء والولاء", color: "bg-red-100 text-red-800", pos: "top-0 left-1/2 -translate-x-1/2" },
                      { text: "تحمل المسؤولية", color: "bg-purple-100 text-purple-800", pos: "top-[20%] right-0" },
                      { text: "الشراكة في القرار", color: "bg-blue-100 text-blue-800", pos: "bottom-[20%] right-0" },
                      { text: "تعزيز التعاون", color: "bg-green-100 text-green-800", pos: "bottom-[20%] left-0" },
                      { text: "تقريب وجهات النظر", color: "bg-orange-100 text-orange-800", pos: "top-[20%] left-0" },
                  ].map((petal, i) => (
                      <div key={i} className={`absolute ${petal.pos} w-28 h-28 rounded-full ${petal.color} flex items-center justify-center text-center text-xs font-bold p-2 shadow-md animate-scale-in border-2 border-white`} style={{ animationDelay: `${i * 0.1}s` }}>
                          {petal.text}
                      </div>
                  ))}
              </div>

              {/* Vision 2040 Card */}
              <div className="bg-white border-l-8 border-blue-600 rounded-2xl p-6 shadow-lg flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                      <Target size={32} />
                  </div>
                  <div>
                      <h3 className="font-black text-slate-800 text-lg mb-1">رُؤْيَةُ عُمَانَ 2040</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                          تعد المشاركة المجتمعية أحد <strong>الركائز الأساسية</strong> للرؤية، حيث شارك آلاف المواطنين في صياغة أهدافها وتطلعاتها المستقبلية.
                      </p>
                  </div>
              </div>

              {/* "Together We Progress" Forum Activity */}
              <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-xl border border-slate-700">
                  <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-yellow-400 flex items-center gap-2 text-lg">
                          <Users /> ملتقى "معاً نتقدم"
                      </h4>
                      <div className="bg-white/10 px-3 py-1 rounded text-xs">نشاط تلخيص</div>
                  </div>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      هو ملتقى يجمع المسؤولين بالمواطنين لمناقشة الخطط والمشاريع.
                      <br/><strong>المطلوب:</strong> شاهد المقطع (رمز الاستجابة بالكتاب ص 96) ولخص أهم القضايا التي نوقشت.
                  </p>
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                      <PlayCircle size={18} /> بدء التلخيص
                  </button>
              </div>

          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.COMMUNITY_INTRO: return <IntroSection />;
      case Section.COMMUNITY_FORMS: return <FormsSection />;
      case Section.COMMUNITY_IMPORTANCE: return <ImportanceSection />;
      case Section.QUIZ: return <SectionQuiz questions={COMMUNITY_PARTICIPATION_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-blue-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-blue-100 flex flex-col`}>
        <div className="p-4 border-b border-blue-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-blue-700 px-2">المشاركة المجتمعية 🙌</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {COMMUNITY_PARTICIPATION_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === section.id ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-xl">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-blue-800">المشاركة المجتمعية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default CommunityParticipationLesson;