
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, RefreshCw, Smartphone, BookOpen, Scale, Building2, Send, Heart, Users } from 'lucide-react';

interface Unit3AssessmentProps {
    onBack: () => void;
}

const Unit3Assessment: React.FC<Unit3AssessmentProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => { if (currentStep < totalSteps) setCurrentStep(prev => prev + 1); };
  const prevStep = () => { if (currentStep > 1) setCurrentStep(prev => prev - 1); };

  // Step 1: MCQ
  const Step1MCQ = () => {
      const [answers, setAnswers] = useState<{[key: number]: number}>({});
      const questions = [
          { id: 1, text: "السلطة المسؤولة عن حل النزاعات:", options: ["التنفيذية", "التشريعية", "القضائية", "الإعلامية"], correct: 2 },
          { id: 2, text: "المجلسان اللذان يتكون منهما مجلس عُمان:", options: ["الدولة والشورى", "الشورى والوزراء", "الدولة والقضاء", "الدولة والوزراء"], correct: 0 },
          { id: 3, text: "عدد أبواب النظام الأساسي للدولة:", options: ["5", "6", "7", "8"], correct: 2 },
          { id: 4, text: "المبدأ الذي يُمثل حماية التراث الوطني:", options: ["السياسي", "الثقافي", "الاقتصادي", "الاجتماعي"], correct: 1 }
      ];
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-indigo-50 p-4 rounded-2xl border-r-4 border-indigo-600"><h3 className="font-bold text-indigo-900 text-lg">أولاً: اختر الإجابة الصحيحة</h3></div>
              <div className="grid gap-4">
                  {questions.map((q) => (
                      <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                          <h4 className="font-bold text-slate-800 mb-3">{q.id}. {q.text}</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                              {q.options.map((opt, idx) => (
                                  <button key={idx} onClick={() => setAnswers({...answers, [q.id]: idx})} className={`p-3 rounded-xl border-2 transition-all ${answers[q.id] === idx ? (idx === q.correct ? 'bg-green-100 border-green-500 text-green-900' : 'bg-red-100 border-red-500 text-red-900') : 'hover:bg-slate-50'}`}>{opt}</button>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // Step 2: Tajawob
  const Step2Tajawob = () => {
      const [show, setShow] = useState(false);
      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-blue-50 p-4 rounded-2xl border-r-4 border-blue-600"><h3 className="font-bold text-blue-900 text-lg">ثانياً: منصة "تجاوب"</h3></div>
              <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                  <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg"><Send size={40}/></div>
                  <h2 className="text-2xl font-black text-slate-800 mb-4">ما الهدف من هذه المنصة؟</h2>
                  {!show ? (
                      <button onClick={() => setShow(true)} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-blue-700">إظهار الإجابة</button>
                  ) : (
                      <div className="bg-blue-50 p-6 rounded-2xl text-center max-w-lg border border-blue-200 animate-scale-in">
                          <p className="text-blue-900 font-bold leading-relaxed">تحسين جودة الخدمات الحكومية، وتعزيز التواصل والمشاركة المجتمعية من خلال استقبال الملاحظات والمقترحات.</p>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  // Step 3: Definitions
  const Step3Definitions = () => {
      const [revealed, setRevealed] = useState<number[]>([]);
      const terms = [
          { id: 1, term: "النظام الأساسي للدولة", def: "الوثيقة الرسمية التي تحدد شكل الدولة ونظام الحكم والحقوق والواجبات." },
          { id: 2, term: "السلطة التنفيذية", def: "المسؤولة عن تنفيذ السياسات العامة (مجلس الوزراء والوزارات)." },
          { id: 3, term: "الهيكل التنظيمي", def: "توزيع السلطات والمهام والعلاقات بين مؤسسات الدولة." }
      ];
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-purple-50 p-4 rounded-2xl border-r-4 border-purple-600"><h3 className="font-bold text-purple-900 text-lg">ثالثاً: التعاريف</h3></div>
              <div className="space-y-4">
                  {terms.map(item => (
                      <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                          <div className="flex justify-between items-center mb-2">
                              <h4 className="font-bold text-slate-800 text-lg">{item.term}</h4>
                              <button onClick={() => setRevealed([...revealed, item.id])} className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">تعريف</button>
                          </div>
                          {revealed.includes(item.id) && <p className="text-purple-900 bg-purple-50 p-3 rounded-lg animate-fade-in">{item.def}</p>}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // Step 4: Charity Scheme
  const Step4Scheme = () => {
      const [show, setShow] = useState(false);
      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-green-50 p-4 rounded-2xl border-r-4 border-green-600"><h3 className="font-bold text-green-900 text-lg">رابعاً: الهيئة العمانية للأعمال الخيرية</h3></div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 text-center">
                  <div className="inline-block bg-green-100 p-4 rounded-full text-green-600 mb-4"><Heart size={40}/></div>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                          <h5 className="font-bold text-green-900 mb-2">عمل تقوم به:</h5>
                          {show && <p className="text-green-700 animate-fade-in">تقديم المساعدات للمحتاجين وإغاثة المتضررين.</p>}
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                          <h5 className="font-bold text-blue-900 mb-2">أثر هذا العمل:</h5>
                          {show && <p className="text-blue-700 animate-fade-in">تعزيز التكافل الاجتماعي ونشر المحبة.</p>}
                      </div>
                  </div>
                  <button onClick={() => setShow(!show)} className="mt-6 bg-slate-800 text-white px-6 py-2 rounded-full font-bold shadow-lg">{show ? 'إخفاء' : 'إظهار الإجابة'}</button>
              </div>
          </div>
      );
  };

  // Step 5: Classification
  const Step5Classify = () => {
      const [matches, setMatches] = useState<{[key: number]: string}>({});
      const items = [
          { id: 1, label: 'رسم بياني/نقود', type: 'economic', typeLabel: 'اقتصادي' },
          { id: 2, label: 'أسرة عمانية', type: 'social', typeLabel: 'اجتماعي' },
          { id: 3, label: 'كتب ومخطوطات', type: 'cultural', typeLabel: 'ثقافي' },
      ];
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-orange-50 p-4 rounded-2xl border-r-4 border-orange-600"><h3 className="font-bold text-orange-900 text-lg">خامساً: صنف المبادئ</h3></div>
              <div className="grid md:grid-cols-3 gap-4">
                  {items.map(item => (
                      <div key={item.id} className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 text-center">
                          <h4 className="font-bold text-slate-700 mb-4">{item.label}</h4>
                          {matches[item.id] ? (
                              <span className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold animate-scale-in">المبدأ ال{item.typeLabel}</span>
                          ) : (
                              <div className="flex flex-col gap-2">
                                  <button onClick={() => setMatches({...matches, [item.id]: 'economic'})} className="bg-green-50 text-green-700 py-1 rounded hover:bg-green-100">اقتصادي</button>
                                  <button onClick={() => setMatches({...matches, [item.id]: 'social'})} className="bg-blue-50 text-blue-700 py-1 rounded hover:bg-blue-100">اجتماعي</button>
                                  <button onClick={() => setMatches({...matches, [item.id]: 'cultural'})} className="bg-purple-50 text-purple-700 py-1 rounded hover:bg-purple-100">ثقافي</button>
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20 px-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 text-lg transition-colors"><ArrowRight size={24} /> خروج</button>
            <h1 className="text-xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثالثة - الصف 7)</h1>
        </div>
        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden"><div className="bg-indigo-600 h-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div></div>
            {currentStep === 1 && <Step1MCQ />}
            {currentStep === 2 && <Step2Tajawob />}
            {currentStep === 3 && <Step3Definitions />}
            {currentStep === 4 && <Step4Scheme />}
            {currentStep === 5 && <Step5Classify />}
            <div className="flex justify-between pt-8 border-t border-slate-200 mt-8">
                <button onClick={prevStep} disabled={currentStep === 1} className="px-6 py-2 rounded-xl font-bold bg-slate-200 text-slate-600 disabled:opacity-50">السابق</button>
                {currentStep < totalSteps ? <button onClick={nextStep} className="px-8 py-2 rounded-xl font-bold bg-indigo-600 text-white shadow-lg">التالي</button> : <button onClick={onBack} className="px-8 py-2 rounded-xl font-bold bg-green-600 text-white shadow-lg flex items-center gap-2"><RefreshCw size={20}/> إنهاء</button>}
            </div>
        </div>
    </div>
  );
};

export default Unit3Assessment;
