import React, { useState } from 'react';
import { CIVIL_SOCIETY_SECTIONS, CIVIL_SOCIETY_QUIZ } from '../../../constants';
import { Section } from '../../../types';
import { Menu, ArrowRight, HeartHandshake, Building2, Target, Leaf, Stethoscope, Users, BookOpen, Crown, Scale, CheckCircle, XCircle } from 'lucide-react';
import SectionQuiz from '../../SectionQuiz';

interface Props {
    onBack: () => void;
}

const CivilSocietyLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.CIVIL_SOCIETY_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. INTRO & CONCEPT ---
  const IntroSection = () => {
      const [showDefinition, setShowDefinition] = useState(false);
      const [lawCheck, setLawCheck] = useState<{members: string, statute: string}>({ members: '', statute: '' });
      const [lawFeedback, setLawFeedback] = useState<string | null>(null);

      const checkLaw = () => {
          if (lawCheck.members === '40' && lawCheck.statute === 'written') {
              setLawFeedback('correct');
          } else {
              setLawFeedback('wrong');
          }
      };

      return (
          <div className="p-6 animate-fade-in space-y-8">
              {/* Quran Verse Hook */}
              <div className="bg-teal-50 border-r-4 border-teal-600 p-8 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-bold text-teal-900 mb-4">قال الله تعالى:</h3>
                  <p className="text-2xl font-serif text-teal-800 leading-loose mb-4">
                      ﴿وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ هُوَ خَيْرًا وَأَعْظَمَ أَجْرًا﴾
                  </p>
                  <p className="text-sm text-teal-600">(سورة المزمل: 20)</p>
                  <div className="mt-4 bg-white p-3 rounded-lg inline-block text-teal-700 font-bold border border-teal-100">
                      إلى ماذا تدعو الآية الكريمة؟ (فعل الخير، التعاون، التطوع)
                  </div>
              </div>

              {/* Definition Flip Card */}
              <div className="flex justify-center">
                  <div 
                    onClick={() => setShowDefinition(!showDefinition)}
                    className="cursor-pointer w-full max-w-lg h-64 perspective-1000 group"
                  >
                      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${showDefinition ? 'rotate-y-180' : ''}`}>
                          {/* Front */}
                          <div className="absolute inset-0 w-full h-full bg-white rounded-3xl shadow-xl border-2 border-slate-100 flex flex-col items-center justify-center p-6 backface-hidden">
                              <div className="bg-teal-100 p-4 rounded-full text-teal-600 mb-4">
                                  <HeartHandshake size={48} />
                              </div>
                              <h3 className="text-2xl font-black text-slate-800">ما هو المجتمع المدني؟</h3>
                              <p className="text-slate-500 mt-2 text-sm font-bold">اضغط للكشف عن التعريف</p>
                          </div>
                          
                          {/* Back */}
                          <div className="absolute inset-0 w-full h-full bg-teal-600 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180">
                              <h3 className="text-xl font-bold mb-3 border-b-2 border-teal-400 pb-2">المفهوم:</h3>
                              <p className="text-lg text-center leading-relaxed font-medium">
                                  "مؤسسات أو جمعيات أهلية (غير حكومية)، تعمل وفق قوانين الدولة، وتقدم خدمات لأفراد المجتمع دون مقابل (غير ربحية)."
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Legal Activity (Page 86) */}
              <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                      <Scale className="text-indigo-600" size={28} />
                      <h3 className="text-xl font-black text-slate-800">لعبة المحقق القانوني ⚖️</h3>
                  </div>
                  <p className="text-slate-600 mb-6">
                      حسب المرسوم السلطاني (صفحة 86)، ساعدنا في استنتاج شروط تأسيس الجمعية:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">1. عدد الأعضاء المؤسسين لا يقل عن:</label>
                          <select 
                            onChange={(e) => setLawCheck({...lawCheck, members: e.target.value})}
                            className="w-full p-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-indigo-500 outline-none"
                          >
                              <option value="">اختر العدد...</option>
                              <option value="10">10 أفراد</option>
                              <option value="20">20 فرداً</option>
                              <option value="40">40 فرداً</option>
                          </select>
                      </div>
                      
                      <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">2. يجب أن يكون للجمعية نظام:</label>
                          <select 
                            onChange={(e) => setLawCheck({...lawCheck, statute: e.target.value})}
                            className="w-full p-3 rounded-xl border-2 border-slate-200 bg-slate-50 focus:border-indigo-500 outline-none"
                          >
                              <option value="">اختر النوع...</option>
                              <option value="oral">شفهي (بالكلام فقط)</option>
                              <option value="written">مكتوب (وثيقة رسمية)</option>
                          </select>
                      </div>
                  </div>

                  <div className="mt-6 text-center">
                      <button 
                        onClick={checkLaw}
                        className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-transform active:scale-95"
                      >
                          تحقق من الشروط
                      </button>
                      
                      {lawFeedback === 'correct' && (
                          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-xl font-bold animate-fade-in flex items-center justify-center gap-2">
                              <CheckCircle /> أحسنت! هذه هي الشروط الصحيحة لتأسيس الجمعيات.
                          </div>
                      )}
                      {lawFeedback === 'wrong' && (
                          <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-xl font-bold animate-fade-in flex items-center justify-center gap-2">
                              <XCircle /> حاول مجدداً! (تلميح: العدد 40، والنظام يجب أن يوثق).
                          </div>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  // --- 2. TYPES & CLASSIFICATION ---
  const TypesSection = () => {
      const [activeType, setActiveType] = useState<string | null>(null);
      
      // Classification Game
      const [dragItems, setDragItems] = useState([
          { id: 1, name: 'جمعية البيئة العمانية', type: 'env' },
          { id: 2, name: 'جمعية الرحمة', type: 'social' },
          { id: 3, name: 'الجمعية العمانية للسرطان', type: 'health' },
          { id: 4, name: 'الجمعية العمانية للفنون', type: 'culture' },
      ]);
      const [score, setScore] = useState(0);

      const classify = (id: number, targetType: string) => {
          const item = dragItems.find(i => i.id === id);
          if (item && item.type === targetType) {
              setDragItems(prev => prev.filter(i => i.id !== id));
              setScore(prev => prev + 1);
          }
      };

      const associations = [
          { id: 'health', title: 'الرعاية الصحية', icon: <Stethoscope />, examples: 'جمعية الأطفال ذوي الإعاقة', color: 'bg-red-50 text-red-600' },
          { id: 'social', title: 'الرعاية الاجتماعية', icon: <Users />, examples: 'جمعية الرحمة لرعاية الأمومة والطفولة', color: 'bg-blue-50 text-blue-600' },
          { id: 'human', title: 'المساعدات الإنسانية', icon: <HeartHandshake />, examples: 'جمعية دار العطاء', color: 'bg-purple-50 text-purple-600' },
          { id: 'env', title: 'المحافظة على البيئة', icon: <Leaf />, examples: 'جمعية البيئة العمانية', color: 'bg-green-50 text-green-600' },
          { id: 'culture', title: 'رعاية الشباب والثقافة', icon: <BookOpen />, examples: 'الجمعية العمانية للكتاب والأدباء', color: 'bg-orange-50 text-orange-600' },
      ];

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">أنواع مؤسسات المجتمع المدني</h2>
                  <p className="text-slate-500">تتنوع المؤسسات بحسب الخدمة التي تقدمها للمجتمع</p>
              </div>

              {/* Interactive Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {associations.map((assoc) => (
                      <div 
                        key={assoc.id}
                        onClick={() => setActiveType(activeType === assoc.id ? null : assoc.id)}
                        className={`cursor-pointer p-4 rounded-2xl border-2 transition-all ${activeType === assoc.id ? 'border-teal-500 shadow-lg scale-105 bg-white' : 'border-slate-100 bg-slate-50 hover:bg-white'}`}
                      >
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto ${assoc.color}`}>
                              {assoc.icon}
                          </div>
                          <h4 className="font-bold text-center text-slate-800 text-sm mb-1">{assoc.title}</h4>
                          
                          {activeType === assoc.id && (
                              <div className="mt-2 text-center animate-slide-up">
                                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">مثال: {assoc.examples}</span>
                              </div>
                          )}
                      </div>
                  ))}
              </div>

              {/* Omani Women Achievement */}
              <div className="bg-pink-50 rounded-3xl p-6 border-l-4 border-pink-500 shadow-sm flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-full text-pink-600 mt-1">
                      <Crown size={24} />
                  </div>
                  <div>
                      <h3 className="font-black text-pink-900 text-lg mb-2">منجز عماني: جمعيات المرأة العمانية</h3>
                      <p className="text-pink-800 text-sm leading-relaxed">
                          بلغ عددها أكثر من <strong>50 جمعية</strong> في مختلف ولايات السلطنة. تهدف لتفعيل دور المرأة في العمل الاجتماعي والتطوعي وخدمة المجتمع المحلي.
                      </p>
                  </div>
              </div>

              {/* Classification Game */}
              {dragItems.length > 0 ? (
                  <div className="bg-slate-100 p-6 rounded-3xl border border-slate-200">
                      <div className="flex justify-between items-center mb-6">
                          <h3 className="font-bold text-slate-800 text-lg">نشاط صنف (صفحة 88)</h3>
                          <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-slate-600">النقاط: {score}</span>
                      </div>
                      
                      {/* Current Item to Sort */}
                      <div className="flex justify-center mb-8">
                          <div className="bg-white px-8 py-4 rounded-2xl shadow-lg border-b-4 border-teal-500 animate-bounce">
                              <span className="font-black text-xl text-slate-800">{dragItems[0].name}</span>
                          </div>
                      </div>

                      {/* Buckets */}
                      <div className="grid grid-cols-2 gap-4">
                          <button onClick={() => classify(dragItems[0].id, 'env')} className="bg-green-100 hover:bg-green-200 p-4 rounded-xl text-green-800 font-bold border-2 border-green-300">بيئية 🌿</button>
                          <button onClick={() => classify(dragItems[0].id, 'social')} className="bg-blue-100 hover:bg-blue-200 p-4 rounded-xl text-blue-800 font-bold border-2 border-blue-300">اجتماعية 🤝</button>
                          <button onClick={() => classify(dragItems[0].id, 'health')} className="bg-red-100 hover:bg-red-200 p-4 rounded-xl text-red-800 font-bold border-2 border-red-300">صحية 🏥</button>
                          <button onClick={() => classify(dragItems[0].id, 'culture')} className="bg-orange-100 hover:bg-orange-200 p-4 rounded-xl text-orange-800 font-bold border-2 border-orange-300">ثقافية 🎨</button>
                      </div>
                  </div>
              ) : (
                  <div className="bg-green-100 p-8 rounded-3xl text-center border-2 border-green-200 animate-fade-in">
                      <h3 className="text-2xl font-black text-green-800 mb-2">ممتاز! 🎉</h3>
                      <p className="text-green-700">لقد صنفت جميع المؤسسات بشكل صحيح.</p>
                      <button onClick={() => window.location.reload()} className="mt-4 text-sm font-bold underline text-green-900">إعادة اللعبة</button>
                  </div>
              )}
          </div>
      );
  };

  // --- 3. IMPORTANCE & VISION 2040 ---
  const ImportanceSection = () => {
      return (
          <div className="p-6 animate-fade-in space-y-10">
              
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 p-24 bg-teal-500 opacity-20 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                          <Target className="text-teal-400" size={32} />
                          <h2 className="text-2xl font-black">رؤية عمان 2040 والمجتمع المدني</h2>
                      </div>
                      <p className="text-lg leading-relaxed text-slate-200 mb-6">
                          ركزت الرؤية على أهمية هذه المؤسسات في:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                              <span className="block text-teal-300 font-bold text-lg mb-1">تعزيز الشراكة</span>
                              <span className="text-sm opacity-80">بين الحكومة والمجتمع في صنع القرار.</span>
                          </div>
                          <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10">
                              <span className="block text-teal-300 font-bold text-lg mb-1">دعم المشاريع</span>
                              <span className="text-sm opacity-80">خاصة مشاريع الشباب والأسر المنتجة.</span>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
                  <div className="bg-orange-50 p-6 border-b border-orange-100">
                      <h3 className="font-black text-xl text-orange-900">التحديات والحلول (صفحة 89)</h3>
                  </div>
                  <div className="p-6 space-y-6">
                      <div className="flex items-start gap-4">
                          <div className="bg-red-100 text-red-600 p-2 rounded-lg font-bold min-w-[80px] text-center text-sm">التحدي 1</div>
                          <div>
                              <p className="font-bold text-slate-800">قلة الدعم المالي</p>
                              <p className="text-sm text-green-700 mt-1">💡 الحل المقترح: إيجاد استثمارات خاصة للجمعية، وتنظيم حملات تبرع.</p>
                          </div>
                      </div>
                      <div className="flex items-start gap-4">
                          <div className="bg-red-100 text-red-600 p-2 rounded-lg font-bold min-w-[80px] text-center text-sm">التحدي 2</div>
                          <div>
                              <p className="font-bold text-slate-800">ضعف ثقافة العمل التطوعي</p>
                              <p className="text-sm text-green-700 mt-1">💡 الحل المقترح: التوعية الإعلامية والمدرسية بأهمية التطوع.</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Personal Reflection */}
              <div className="bg-teal-50 p-6 rounded-2xl border border-teal-200 text-center">
                  <h4 className="font-bold text-teal-900 text-lg mb-3">شارك برأيك</h4>
                  <p className="text-teal-800 text-sm mb-4">اختر إحدى مؤسسات المجتمع المدني التي ترغب في التطوع بها مستقبلاً، ولماذا؟</p>
                  <textarea className="w-full p-4 rounded-xl border border-teal-300 focus:outline-none focus:border-teal-500 h-24" placeholder="اكتب إجابتك هنا..."></textarea>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.CIVIL_SOCIETY_INTRO: return <IntroSection />;
      case Section.CIVIL_SOCIETY_TYPES: return <TypesSection />;
      case Section.CIVIL_SOCIETY_IMPORTANCE: return <ImportanceSection />;
      case Section.QUIZ: return <SectionQuiz questions={CIVIL_SOCIETY_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-teal-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-teal-100 flex flex-col`}>
        <div className="p-4 border-b border-teal-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-teal-700 px-2">المجتمع المدني 🤝</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {CIVIL_SOCIETY_SECTIONS.map((section) => (
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
           <span className="font-bold text-lg text-teal-800">مؤسسات المجتمع المدني</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default CivilSocietyLesson;