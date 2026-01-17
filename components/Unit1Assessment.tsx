
import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle, RefreshCw, Activity, Sun, Wind, Droplets, 
  HelpCircle, ArrowDown, Search
} from 'lucide-react';

interface Unit1AssessmentProps {
    onBack: () => void;
}

const Unit1Assessment: React.FC<Unit1AssessmentProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const nextStep = () => {
      if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
  };

  const prevStep = () => {
      if (currentStep > 1) setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
  };

  // --- STEP 1: Multiple Choice ---
  const Step1MCQ = () => {
      const [answers, setAnswers] = useState<{[key: number]: number | null}>({});
      const [showResult, setShowResult] = useState(false);

      const questions = [
          {
              id: 1,
              text: "يُستخدم الجهاز الذي أمامك في قياس:",
              options: ["الحرارة", "الضغط الجوي", "كمية الأمطار", "سرعة الرياح"],
              correct: 1,
              visual: (
                  <div className="w-24 h-24 bg-slate-100 rounded-full border-4 border-slate-300 relative shadow-inner mx-auto mb-4 flex items-center justify-center">
                      <div className="absolute inset-1 border border-slate-300 rounded-full"></div>
                      <div className="w-1 h-10 bg-red-600 absolute bottom-1/2 left-1/2 origin-bottom transform rotate-45 rounded-full shadow-md z-10"></div>
                      <div className="w-3 h-3 bg-slate-800 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></div>
                      <span className="mt-12 text-[10px] font-bold text-slate-500">Barometer</span>
                  </div>
              )
          },
          {
              id: 2,
              text: "تتأثر المنطقة المشار إليها بالرقم (1) بمناخ البحر المتوسط نتيجة:",
              options: ["الرياح الموسمية", "الارتفاع عن السطح", "القرب من البحر", "الموقع الفلكي"],
              correct: 0,
              visual: (
                  <div className="relative h-24 bg-blue-50 rounded-xl overflow-hidden border-2 border-slate-200 mb-4 flex items-center justify-center">
                      <span className="font-bold text-slate-400">خريطة سلطنة عمان (ظفار)</span>
                  </div>
              )
          },
          {
              id: 3,
              text: "الضغط الجوي السائد في المنطقة المشار إليها بالرمز (ب):",
              options: ["منخفض", "متوسط", "مرتفع", "مرتفع جداً"],
              correct: 3,
              visual: <div className="text-center text-4xl mb-2">❄️</div>
          },
          {
              id: 4,
              text: "الجزء المشار إليه بالرمز (أ) يُطلق عليه:",
              options: ["القشرة الأرضية", "النواة الداخلية", "النواة الخارجية", "الوشاح"],
              correct: 1,
              visual: (
                  <div className="w-20 h-20 mx-auto mb-2 relative">
                      <div className="w-full h-full rounded-full bg-orange-900 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold">أ</div>
                      </div>
                  </div>
              )
          },
          {
              id: 5,
              text: "الجهاز المقابل يُستخدم لرصد:",
              options: ["البراكين", "الزلازل", "المطر", "الرياح"],
              correct: 1,
              visual: <Activity size={40} className="text-red-500 mx-auto mb-2 animate-pulse" />
          }
      ];

      const handleAnswer = (qId: number, idx: number) => {
          setAnswers(prev => ({...prev, [qId]: idx}));
      };

      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-indigo-50 p-4 rounded-2xl border-r-4 border-indigo-600">
                  <h3 className="font-bold text-indigo-900 text-lg">أولاً: اختر الإجابة الصحيحة</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                  {questions.map((q) => (
                      <div key={q.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                          {q.visual}
                          <h4 className="font-bold text-slate-800 mb-4 text-right">{q.text}</h4>
                          <div className="space-y-2">
                              {q.options.map((opt, idx) => (
                                  <button
                                      key={idx}
                                      onClick={() => handleAnswer(q.id, idx)}
                                      className={`w-full p-3 rounded-xl text-right border-2 transition-all ${
                                          showResult 
                                              ? idx === q.correct 
                                                  ? 'bg-green-100 border-green-500 text-green-900' 
                                                  : answers[q.id] === idx ? 'bg-red-100 border-red-500 text-red-900' : 'bg-white border-slate-100 opacity-50'
                                              : answers[q.id] === idx ? 'bg-indigo-50 border-indigo-500 text-indigo-900' : 'bg-white border-slate-100 hover:border-indigo-200'
                                      }`}
                                  >
                                      {opt}
                                  </button>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
              <div className="flex justify-center mt-8">
                  {!showResult && (
                      <button onClick={() => setShowResult(true)} className="bg-indigo-600 text-white px-10 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105">
                          تحقق من الإجابات
                      </button>
                  )}
              </div>
          </div>
      );
  };

  // --- STEP 2: Device Identification ---
  const Step2Device = () => {
      const [revealed, setRevealed] = useState(false);
      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-blue-50 p-4 rounded-2xl border-r-4 border-blue-600">
                  <h3 className="font-bold text-blue-900 text-lg">ثانياً: ادرس الشكل المقابل (1)</h3>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
                  <div className="relative w-24 h-64 bg-slate-100 rounded-full border-4 border-slate-300 flex flex-col items-center justify-end p-2">
                      <div className="w-4 h-full bg-slate-200 rounded-full relative overflow-hidden">
                          <div className="absolute bottom-0 w-full bg-red-600 transition-all duration-1000" style={{ height: revealed ? '70%' : '20%' }}></div>
                      </div>
                      <div className="w-16 h-16 bg-red-600 rounded-full mt-[-10px] border-4 border-slate-300 z-10"></div>
                  </div>
                  <div className="flex-1 space-y-6 text-center md:text-right">
                      <button onClick={() => setRevealed(true)} className="bg-blue-600 text-white px-8 py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                          {revealed ? 'الإجابة:' : 'إظهار الإجابة'}
                      </button>
                      {revealed && (
                          <div className="space-y-4 animate-fade-in">
                              <p className="p-3 bg-green-100 text-green-900 rounded-xl font-bold border border-green-200">أ- اسم الجهاز: البارومتر الزئبقي</p>
                              <p className="p-3 bg-green-100 text-green-900 rounded-xl font-bold border border-green-200">ب- الاستخدام: قياس الضغط الجوي</p>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      );
  };

  // --- STEP 3: Comparison ---
  const Step3Map = () => {
      const [revealed, setRevealed] = useState(false);
      return (
          <div className="space-y-8 animate-slide-up">
              <div className="bg-orange-50 p-4 rounded-2xl border-r-4 border-orange-600">
                  <h3 className="font-bold text-orange-900 text-lg">ثانياً (2): قارن بين الموقعين (أ) و (ب)</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                  <table className="w-full text-center">
                      <thead className="bg-slate-800 text-white">
                          <tr><th className="p-3">المقارنة</th><th className="p-3 bg-orange-600">أ (الصحراء)</th><th className="p-3 bg-green-600">ب (ظفار)</th></tr>
                      </thead>
                      <tbody className="divide-y">
                          <tr><td className="p-3 font-bold">الحرارة</td><td className="p-3">مرتفعة</td><td className="p-3">معتدلة</td></tr>
                          <tr><td className="p-3 font-bold">الأمطار</td><td className="p-3">نادرة</td><td className="p-3">موسمية</td></tr>
                      </tbody>
                  </table>
                  <div className="mt-4 text-center">
                      <button onClick={() => setRevealed(!revealed)} className="text-indigo-600 font-bold underline">
                          {revealed ? 'إخفاء النتيجة' : 'ما نتيجة الرياح الموسمية على (ب)؟'}
                      </button>
                      {revealed && <p className="mt-2 text-green-700 font-bold animate-fade-in">سقوط الأمطار الموسمية (الخريف) واعتدال الجو.</p>}
                  </div>
              </div>
          </div>
      );
  };

  // --- STEP 4: Recall ---
  const Step4Recall = () => {
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-teal-50 p-4 rounded-2xl border-r-4 border-teal-600">
                  <h3 className="font-bold text-teal-900 text-lg">ثالثاً: أجب عما يأتي</h3>
              </div>
              <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                      <h4 className="font-bold text-slate-800 mb-2">1. جهود سلطنة عمان للتقليل من أثر التغير المناخي؟</h4>
                      <p className="text-teal-700 text-sm">إنشاء المحميات، استزراع أشجار القرم، استخدام الطاقة المتجددة.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                      <h4 className="font-bold text-slate-800 mb-2">2. خصائص الإقليم شبه الصحراوي؟</h4>
                      <p className="text-teal-700 text-sm">قلة الأمطار، حرارة مرتفعة صيفاً، نباتات شوكية.</p>
                  </div>
              </div>
          </div>
      );
  };

  // --- STEP 5: Terms ---
  const Step5Terms = () => {
      const [matches, setMatches] = useState<number[]>([]);
      const terms = [
          {id: 1, text: "تفتيت الصخور ميكانيكياً", term: "التجوية الميكانيكية"},
          {id: 2, text: "تفاعل الأكسجين مع المعادن", term: "الأكسدة"},
          {id: 3, text: "هزات أرضية سريعة", term: "الزلازل"}
      ];
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-purple-50 p-4 rounded-2xl border-r-4 border-purple-600">
                  <h3 className="font-bold text-purple-900 text-lg">رابعاً: اكتب المصطلح</h3>
              </div>
              <div className="space-y-3">
                  {terms.map(t => (
                      <div key={t.id} className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200">
                          <span>{t.text}</span>
                          <button 
                              onClick={() => setMatches(prev => [...prev, t.id])}
                              className={`px-4 py-1 rounded-lg font-bold text-sm ${matches.includes(t.id) ? 'bg-purple-100 text-purple-700' : 'bg-slate-100'}`}
                          >
                              {matches.includes(t.id) ? t.term : 'كشف'}
                          </button>
                      </div>
                  ))}
              </div>
          </div>
      );
  };

  // --- STEP 6: Diagram ---
  const Step6Diagram = () => (
      <div className="space-y-6 animate-slide-up">
          <div className="bg-green-50 p-4 rounded-2xl border-r-4 border-green-600">
              <h3 className="font-bold text-green-900 text-lg">سادساً: أكمل المخطط</h3>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-200 text-center">
              <div className="bg-slate-800 text-white px-6 py-2 rounded-xl inline-block mb-6">تشكيل سطح الأرض</div>
              <div className="flex justify-center gap-12">
                  <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold mb-2">الخارجية</div>
                      <div className="text-sm text-slate-600">التجوية، التعرية</div>
                  </div>
                  <div className="text-center">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold mb-2">الداخلية</div>
                      <div className="text-sm text-slate-600">الزلازل، البراكين، الالتواءات</div>
                  </div>
              </div>
          </div>
      </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20 px-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 text-lg transition-colors">
                <ArrowRight size={24} /> خروج
            </button>
            <h1 className="text-xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الأولى - الصف 7)</h1>
        </div>
        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden">
                <div className="bg-indigo-600 h-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
            </div>
            {currentStep === 1 && <Step1MCQ />}
            {currentStep === 2 && <Step2Device />}
            {currentStep === 3 && <Step3Map />}
            {currentStep === 4 && <Step4Recall />}
            {currentStep === 5 && <Step5Terms />}
            {currentStep === 6 && <Step6Diagram />}
            <div className="flex justify-between pt-8 border-t border-slate-200 mt-8">
                <button onClick={prevStep} disabled={currentStep === 1} className="px-6 py-2 rounded-xl font-bold bg-slate-200 text-slate-600 disabled:opacity-50">السابق</button>
                {currentStep < totalSteps ? (
                    <button onClick={nextStep} className="px-8 py-2 rounded-xl font-bold bg-indigo-600 text-white shadow-lg">التالي</button>
                ) : (
                    <button onClick={onBack} className="px-8 py-2 rounded-xl font-bold bg-green-600 text-white shadow-lg flex items-center gap-2"><RefreshCw size={20}/> إنهاء</button>
                )}
            </div>
        </div>
    </div>
  );
};

export default Unit1Assessment;
