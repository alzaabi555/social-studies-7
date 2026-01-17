
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, RefreshCw, Building2, Users, HeartHandshake, BookOpen, Vote, Droplet, Sprout, Mic2, Star } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit3AssessmentG6: React.FC<Props> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => { if (currentStep < totalSteps) setCurrentStep(prev => prev + 1); window.scrollTo(0, 0); };
  const prevStep = () => { if (currentStep > 1) setCurrentStep(prev => prev - 1); window.scrollTo(0, 0); };

  // Q1: Identify Entity
  const Question1 = () => {
      const [answers, setAnswers] = useState<{ [key: number]: string }>({});
      const questions = [
          { id: 1, text: 'الإشراف على مؤسسات المجتمع المدني وإشهارها', correct: 'وزارة التنمية الاجتماعية', options: ['وزارة التربية والتعليم', 'وزارة التنمية الاجتماعية', 'وزارة الداخلية'] },
          { id: 2, text: 'تفعيل دور المرأة للمساهمة في التنمية', correct: 'جمعيات المرأة العمانية', options: ['جمعيات البيئة', 'الأندية الرياضية', 'جمعيات المرأة العمانية'] }
      ];
      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-teal-100 p-4 rounded-xl border-r-4 border-teal-600"><h3 className="text-xl font-bold text-teal-900">١- اكتب اسم الجهة المختصة:</h3></div>
              <div className="grid gap-6">
                  {questions.map((q) => (
                      <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                          <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-start gap-2"><span className="text-teal-600 mt-1"><Building2 size={24}/></span>{q.text}</h4>
                          <div className="flex flex-wrap gap-3">
                              {q.options.map((opt) => (
                                  <button key={opt} onClick={() => setAnswers({...answers, [q.id]: opt})} className={`px-4 py-2 rounded-lg font-bold border-2 transition-all ${answers[q.id] === opt ? (opt === q.correct ? 'bg-green-100 border-green-500 text-green-900' : 'bg-red-100 border-red-500 text-red-900') : 'bg-slate-50 border-slate-200 hover:border-teal-300'}`}>{opt}{answers[q.id] === opt && opt === q.correct && <CheckCircle className="inline mr-2" size={16}/>}</button>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // Q2: Definitions
  const Question2 = () => {
      const [flipped, setFlipped] = useState<number | null>(null);
      const definitions = [
          { id: 1, term: 'المجتمع المدني', def: 'مؤسسات أهلية تطوعية، لا تهدف للربح.', icon: <Users size={32} className="text-blue-500"/> },
          { id: 2, term: 'المشاركة المجتمعية', def: 'مساهمة المواطنين بجهدهم وفكرهم ومالهم في خدمة الوطن.', icon: <HeartHandshake size={32} className="text-rose-500"/> },
          { id: 3, term: 'العمل التطوعي', def: 'الجهد المبذول من أجل الآخرين دون مقابل مادي.', icon: <Star size={32} className="text-yellow-500"/> }
      ];
      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-blue-100 p-4 rounded-xl border-r-4 border-blue-600"><h3 className="text-xl font-bold text-blue-900">٢- عَرِّف ما يأتي (اضغط للتعريف):</h3></div>
              <div className="grid md:grid-cols-3 gap-6">
                  {definitions.map((item) => (
                      <div key={item.id} onClick={() => setFlipped(flipped === item.id ? null : item.id)} className="relative h-64 cursor-pointer perspective-1000 group">
                          <div className={`w-full h-full transition-all duration-700 transform-style-3d ${flipped === item.id ? 'rotate-y-180' : ''}`}>
                              <div className="absolute w-full h-full backface-hidden bg-white rounded-3xl shadow-lg border-2 border-slate-100 flex flex-col items-center justify-center p-6 hover:border-blue-300">
                                  <div className="bg-slate-50 p-4 rounded-full mb-4 shadow-inner">{item.icon}</div>
                                  <h4 className="text-xl font-black text-slate-800 text-center">{item.term}</h4>
                              </div>
                              <div className="absolute w-full h-full backface-hidden bg-blue-50 rounded-3xl shadow-lg border-2 border-blue-200 p-6 flex items-center justify-center rotate-y-180 text-center font-bold text-blue-900 text-sm">{item.def}</div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // Q3: Roles
  const Question3 = () => {
      const [activeRole, setActiveRole] = useState<number | null>(null);
      const items = [
          { id: 1, title: 'النظام الأساسي للدولة', content: 'كفل حق تكوين الجمعيات ووضع الأطر القانونية.', icon: <BookOpen size={24}/> },
          { id: 2, title: 'السبلة العمانية', content: 'مدرسة للشورى والحوار ومناقشة شؤون المجتمع.', icon: <Building2 size={24}/> },
          { id: 3, title: 'المشاركة المجتمعية', content: 'تعزز التلاحم والترابط وتساعد في إنجاز المشاريع.', icon: <Users size={24}/> }
      ];
      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-purple-100 p-4 rounded-xl border-r-4 border-purple-600"><h3 className="text-xl font-bold text-purple-900">٣- وضّح دور كلٍّ من:</h3></div>
              <div className="space-y-4">
                  {items.map((item) => (
                      <div key={item.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                          <button onClick={() => setActiveRole(activeRole === item.id ? null : item.id)} className={`w-full p-5 text-right flex items-center justify-between transition-colors ${activeRole === item.id ? 'bg-purple-50' : 'hover:bg-slate-50'}`}>
                              <div className="flex items-center gap-4"><div className="p-2 rounded-lg bg-slate-100 text-purple-600">{item.icon}</div><h4 className="font-bold text-slate-800 text-lg">{item.title}</h4></div>
                              <span className={`text-2xl font-bold transition-transform ${activeRole === item.id ? 'rotate-180 text-purple-600' : 'text-slate-300'}`}>▼</span>
                          </button>
                          {activeRole === item.id && <div className="p-6 bg-purple-50/30 border-t border-purple-100 animate-slide-up text-purple-900 font-medium">{item.content}</div>}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // Q4: Classification
  const Question4 = () => {
      const [feedback, setFeedback] = useState<{[key: number]: string}>({});
      const items = [
          { id: 1, text: 'تنظيف الأفلاج', type: 'voluntary', icon: <Sprout size={20}/> },
          { id: 2, text: 'اختيار رئيس الجماعة', type: 'political', icon: <Vote size={20}/> },
          { id: 3, text: 'تقديم فقرة في حفل', type: 'cultural', icon: <Mic2 size={20}/> },
          { id: 4, text: 'التبرع بالدم', type: 'voluntary', icon: <Droplet size={20}/> },
      ];
      const handleClassify = (id: number, type: string) => setFeedback({...feedback, [id]: type});
      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-orange-100 p-4 rounded-xl border-r-4 border-orange-600"><h3 className="text-xl font-bold text-orange-900">٤- صنّف الأعمال الآتية:</h3></div>
              <div className="grid gap-4">
                  {items.map((item) => (
                      <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3"><div className="bg-orange-100 p-2 rounded-full text-orange-600">{item.icon}</div><span className="font-bold text-slate-800 text-lg">{item.text}</span></div>
                          <div className="flex gap-2">
                              {['voluntary', 'political', 'cultural'].map(t => (
                                  <button key={t} onClick={() => handleClassify(item.id, t)} className={`px-4 py-2 rounded-lg border-2 font-bold text-sm ${feedback[item.id] === t ? (t === item.type ? 'bg-green-100 border-green-500 text-green-900' : 'bg-red-100 border-red-500 text-red-900') : 'bg-white hover:bg-slate-50'}`}>
                                      {t === 'voluntary' ? 'تطوعي' : t === 'political' ? 'سياسي/شورى' : 'ثقافي'}
                                  </button>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20 px-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-teal-600 text-lg transition-colors"><ArrowRight size={24} /> خروج</button>
            <h1 className="text-xl font-black text-teal-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثالثة - الصف 6)</h1>
        </div>
        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden"><div className="bg-teal-600 h-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div></div>
            {currentStep === 1 && <Question1 />}
            {currentStep === 2 && <Question2 />}
            {currentStep === 3 && <Question3 />}
            {currentStep === 4 && <Question4 />}
            <div className="flex justify-between pt-8 border-t border-slate-200 mt-8">
                <button onClick={prevStep} disabled={currentStep === 1} className="px-6 py-2 rounded-xl font-bold bg-slate-200 text-slate-600 disabled:opacity-50">السابق</button>
                {currentStep < totalSteps ? <button onClick={nextStep} className="px-8 py-2 rounded-xl font-bold bg-teal-600 text-white shadow-lg">التالي</button> : <button onClick={onBack} className="px-8 py-2 rounded-xl font-bold bg-green-600 text-white shadow-lg flex items-center gap-2"><RefreshCw size={20}/> إنهاء</button>}
            </div>
        </div>
    </div>
  );
};

export default Unit3AssessmentG6;
