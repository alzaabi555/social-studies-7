
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, RefreshCw, PenTool, HelpCircle, ArrowDown } from 'lucide-react';

interface Unit2AssessmentProps {
    onBack: () => void;
}

const Unit2Assessment: React.FC<Unit2AssessmentProps> = ({ onBack }) => {
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => { if (activeStep < totalSteps) setActiveStep(prev => prev + 1); };
  const prevStep = () => { if (activeStep > 1) setActiveStep(prev => prev - 1); };

  // Step 1: MCQ
  const Question1 = () => {
      const [answers, setAnswers] = useState<{[key: number]: number}>({});
      const questions = [
          { id: 1, q: 'العام الهجري الذي تعرضت فيه بغداد لهجوم المغول:', options: ['656هـ', '657هـ', '658هـ'], correct: 0 },
          { id: 2, q: 'الإمام العماني الذي حرر سقطرى:', options: ['المهنا بن جيفر', 'الصلت بن مالك', 'الوارث بن كعب'], correct: 1 },
          { id: 3, q: 'مؤلف كتاب الاستقامة:', options: ['أبو سعيد الكدمي', 'أبو جعفر الأزكوي', 'محمد بن محبوب'], correct: 0 }
      ];
      return (
          <div className="space-y-6 animate-fade-in">
              <div className="bg-purple-100 p-4 rounded-xl border-r-4 border-purple-600"><h3 className="text-xl font-bold text-purple-900">أولاً: اختر الإجابة الصحيحة</h3></div>
              {questions.map((q, i) => (
                  <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                      <h4 className="font-bold text-lg mb-4">{i + 1}. {q.q}</h4>
                      <div className="grid grid-cols-3 gap-3">
                          {q.options.map((opt, idx) => (
                              <button key={idx} onClick={() => setAnswers({...answers, [q.id]: idx})} className={`p-3 rounded-lg border-2 font-bold ${answers[q.id] === idx ? (idx === q.correct ? 'bg-green-100 border-green-500 text-green-900' : 'bg-red-100 border-red-500 text-red-900') : 'hover:bg-slate-50'}`}>{opt}</button>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      );
  };

  // Step 2: Short Answer
  const Question2 = () => {
      const [revealed, setRevealed] = useState<number[]>([]);
      const items = [
          { id: 1, q: 'عوامل إضعاف الإمامة الثانية؟', a: 'الفتن الداخلية والتدخلات الخارجية (الحملات العباسية).' },
          { id: 2, q: 'المساجد التي اشتهرت بالتدريس؟', a: 'جامع نزوى (العقر)، جامع صحار، جامع بهلاء.' },
          { id: 3, q: 'علل: ازدهار الزراعة؟', a: 'الاهتمام بالأفلاج، تنوع المحاصيل، والاستقرار الأمني.' }
      ];
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-purple-100 p-4 rounded-xl border-r-4 border-purple-600"><h3 className="text-xl font-bold text-purple-900">ثانياً: أجب عن الأسئلة</h3></div>
              {items.map(item => (
                  <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-200">
                      <div onClick={() => setRevealed(prev => [...prev, item.id])} className="flex justify-between items-center cursor-pointer">
                          <h4 className="font-bold text-slate-800">{item.q}</h4>
                          <button className="text-purple-600 text-sm font-bold bg-purple-50 px-3 py-1 rounded">الإجابة</button>
                      </div>
                      {revealed.includes(item.id) && <p className="mt-3 text-purple-800 font-medium bg-purple-50 p-3 rounded-lg animate-fade-in">{item.a}</p>}
                  </div>
              ))}
          </div>
      );
  };

  // Step 3: Classification
  const Question3 = () => {
      const [matches, setMatches] = useState<{[key: number]: string}>({});
      const items = [
          { id: 1, text: 'حركة الترجمة', type: 'cultural' },
          { id: 2, text: 'صناعة النسيج والسكر', type: 'economic' },
          { id: 3, text: 'إنشاء المدارس النظامية', type: 'urban' }
      ];
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-blue-100 p-4 rounded-xl border-r-4 border-blue-600"><h3 className="text-xl font-bold text-blue-900">ثالثاً: صنف الإنجازات</h3></div>
              {items.map(item => (
                  <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                      <span className="font-bold text-slate-700">{item.text}</span>
                      <div className="flex gap-2">
                          <button onClick={() => setMatches({...matches, [item.id]: 'cultural'})} className={`px-3 py-1 rounded border ${matches[item.id] === 'cultural' ? 'bg-blue-500 text-white' : 'bg-white'}`}>ثقافي</button>
                          <button onClick={() => setMatches({...matches, [item.id]: 'economic'})} className={`px-3 py-1 rounded border ${matches[item.id] === 'economic' ? 'bg-green-500 text-white' : 'bg-white'}`}>اقتصادي</button>
                          <button onClick={() => setMatches({...matches, [item.id]: 'urban'})} className={`px-3 py-1 rounded border ${matches[item.id] === 'urban' ? 'bg-orange-500 text-white' : 'bg-white'}`}>عمراني</button>
                      </div>
                      {matches[item.id] && (matches[item.id] === item.type ? <CheckCircle className="text-green-500"/> : <span className="text-red-500 font-bold">خطأ</span>)}
                  </div>
              ))}
          </div>
      );
  };

  // Step 4: Analysis
  const Question4 = () => {
      const [show, setShow] = useState(false);
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-orange-100 p-4 rounded-xl border-r-4 border-orange-600"><h3 className="text-xl font-bold text-orange-900">رابعاً: تحليل الدور السياسي</h3></div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <h4 className="font-bold text-slate-800 mb-4">ما دلالة نجدة الإمام الصلت لأهل سقطرى؟</h4>
                  {!show ? (
                      <button onClick={() => setShow(true)} className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-orange-700">إظهار التحليل</button>
                  ) : (
                      <div className="bg-orange-50 p-4 rounded-xl text-orange-900 font-medium animate-fade-in text-right">
                          <ul className="list-disc list-inside space-y-2">
                              <li>الاستجابة للاستغاثة والنخوة الإسلامية.</li>
                              <li>قوة الأسطول العماني والجاهزية العسكرية.</li>
                              <li>تأكيد سيادة عمان على الجزر والمياه الإقليمية.</li>
                          </ul>
                      </div>
                  )}
              </div>
          </div>
      );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20 px-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-purple-600 text-lg transition-colors"><ArrowRight size={24} /> خروج</button>
            <h1 className="text-xl font-black text-purple-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثانية - الصف 7)</h1>
        </div>
        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden"><div className="bg-purple-600 h-full transition-all duration-500 ease-out" style={{ width: `${(activeStep / totalSteps) * 100}%` }}></div></div>
            {activeStep === 1 && <Question1 />}
            {activeStep === 2 && <Question2 />}
            {activeStep === 3 && <Question3 />}
            {activeStep === 4 && <Question4 />}
            <div className="flex justify-between pt-8 border-t border-slate-200 mt-8">
                <button onClick={prevStep} disabled={activeStep === 1} className="px-6 py-2 rounded-xl font-bold bg-slate-200 text-slate-600 disabled:opacity-50">السابق</button>
                {activeStep < totalSteps ? <button onClick={nextStep} className="px-8 py-2 rounded-xl font-bold bg-purple-600 text-white shadow-lg">التالي</button> : <button onClick={onBack} className="px-8 py-2 rounded-xl font-bold bg-green-600 text-white shadow-lg flex items-center gap-2"><RefreshCw size={20}/> إنهاء</button>}
            </div>
        </div>
    </div>
  );
};

export default Unit2Assessment;
