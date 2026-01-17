
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Calculator, RefreshCw, XCircle, ArrowDown } from 'lucide-react';

interface Unit1AssessmentG6Props {
    onBack: () => void;
}

const Unit1AssessmentG6: React.FC<Unit1AssessmentG6Props> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const nextStep = () => { if (currentStep < totalSteps) setCurrentStep(prev => prev + 1); };
  const prevStep = () => { if (currentStep > 1) setCurrentStep(prev => prev - 1); };

  // Step 1: Definitions
  const Step1Definitions = () => {
      const [matches, setMatches] = useState<{[key: number]: string}>({});
      const defs = [
          { id: 1, text: 'عدد السكان في كم² واحد', correct: 'الكثافة السكانية' },
          { id: 2, text: 'حصر شامل للسكان والمساكن', correct: 'التعداد السكاني' },
          { id: 3, text: 'رسم بياني للعمر والنوع', correct: 'الهرم السكاني' },
          { id: 4, text: 'السنوات المتوقع عيشها', correct: 'أمد الحياة' }
      ];
      const opts = ['التعداد السكاني', 'الكثافة السكانية', 'أمد الحياة', 'الهرم السكاني'];
      return (
          <div className="space-y-6 animate-fade-in">
              <div className="bg-indigo-100 p-4 rounded-xl border-r-4 border-indigo-600"><h3 className="font-bold text-indigo-900 text-lg">١- اكتب المصطلح المناسب:</h3></div>
              {defs.map(d => (
                  <div key={d.id} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center">
                      <p className="flex-1 font-medium">{d.text}</p>
                      <select className={`p-2 rounded border-2 ${matches[d.id] === d.correct ? 'bg-green-100 border-green-500' : 'bg-slate-50'}`} onChange={(e) => setMatches({...matches, [d.id]: e.target.value})}>
                          <option value="">اختر...</option>
                          {opts.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                  </div>
              ))}
          </div>
      );
  };

  // Step 2: Consequences
  const Step2Consequences = () => {
      const [revealed, setRevealed] = useState<number[]>([]);
      const items = [
          { id: 1, q: 'التبليغ الخاطئ عن نوع المولود؟', a: 'بيانات غير دقيقة وأخطاء في التخطيط.' },
          { id: 2, q: 'تزايد هجرة الذكور؟', a: 'اختلال التركيب النوعي (زيادة الذكور في مناطق الجذب).' },
          { id: 3, q: 'التركز السكاني؟', a: 'ضغط على الخدمات، ازدحام، تلوث.' }
      ];
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-rose-100 p-4 rounded-xl border-r-4 border-rose-600"><h3 className="font-bold text-rose-900 text-lg">٢- ما النتائج المترتبة على:</h3></div>
              {items.map(i => (
                  <div key={i.id} onClick={() => setRevealed([...revealed, i.id])} className="bg-white p-4 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
                      <div className="flex justify-between font-bold text-slate-800"><span>{i.q}</span><ArrowDown size={16}/></div>
                      {revealed.includes(i.id) && <p className="mt-2 text-rose-800 animate-fade-in">{i.a}</p>}
                  </div>
              ))}
          </div>
      );
  };

  // Step 3: Classification
  const Step3Classify = () => {
      const [g, setG] = useState<string[]>([]);
      const [d, setD] = useState<string[]>([]);
      const items = [{t:'المواليد',c:'g'}, {t:'المناخ',c:'d'}, {t:'الهجرة',c:'g'}, {t:'الاقتصاد',c:'d'}, {t:'الوفيات',c:'g'}, {t:'الخدمات',c:'d'}];
      
      const move = (txt: string, type: 'g'|'d') => {
          if (type==='g') setG([...g, txt]); else setD([...d, txt]);
      };

      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-green-100 p-4 rounded-xl border-r-4 border-green-600"><h3 className="font-bold text-green-900 text-lg">٣- صنف العوامل (نمو / توزيع):</h3></div>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {items.map(i => !g.includes(i.t) && !d.includes(i.t) && (
                      <div key={i.t} className="bg-white px-3 py-1 rounded-full shadow border font-bold">
                          {i.t} 
                          <button onClick={()=>move(i.t,'g')} className="mx-1 text-blue-600">1</button>
                          <button onClick={()=>move(i.t,'d')} className="mx-1 text-orange-600">2</button>
                      </div>
                  ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center"><h4 className="font-bold text-blue-900">النمو السكاني</h4>{g.map(x=><div key={x}>{x}</div>)}</div>
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-200 text-center"><h4 className="font-bold text-orange-900">التوزيع الجغرافي</h4>{d.map(x=><div key={x}>{x}</div>)}</div>
              </div>
          </div>
      );
  };

  // Step 4: Calc Muscat
  const Step4Calc = () => {
      const [res, setRes] = useState<number|null>(null);
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-teal-100 p-4 rounded-xl border-r-4 border-teal-600"><h3 className="font-bold text-teal-900 text-lg">٤- احسب الزيادة الطبيعية (مسقط 2022)</h3></div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-lg border border-slate-200">
                  <p className="mb-4 text-slate-600">المواليد: 15,143 | الوفيات: 2,566</p>
                  <button onClick={() => setRes(15143 - 2566)} className="bg-teal-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-teal-700 flex items-center justify-center gap-2 mx-auto"><Calculator size={18}/> احسب</button>
                  {res !== null && <p className="mt-4 text-2xl font-black text-green-600 animate-bounce">{res.toLocaleString()} نسمة</p>}
              </div>
          </div>
      );
  };

  // Step 5: Calc KSA Density
  const Step5CalcKSA = () => {
      const [res, setRes] = useState<string|null>(null);
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-blue-100 p-4 rounded-xl border-r-4 border-blue-600"><h3 className="font-bold text-blue-900 text-lg">٥- احسب الكثافة السكانية للسعودية</h3></div>
              <div className="bg-white p-6 rounded-2xl text-center shadow-lg border border-slate-200">
                  <p className="mb-4 text-slate-600">السكان: 36,000,000 | المساحة: 2,149,690 كم²</p>
                  <button onClick={() => setRes((36000000/2149690).toFixed(1))} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-blue-700 flex items-center justify-center gap-2 mx-auto"><Calculator size={18}/> احسب</button>
                  {res !== null && <p className="mt-4 text-2xl font-black text-green-600 animate-bounce">{res} نسمة/كم²</p>}
              </div>
          </div>
      );
  };

  // Step 6: Comparison
  const Step6Compare = () => {
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-purple-100 p-4 rounded-xl border-r-4 border-purple-600"><h3 className="font-bold text-purple-900 text-lg">٦- مقارنات (مصادر / فئات عمرية)</h3></div>
              <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <h4 className="font-bold mb-2 text-purple-800">مصادر البيانات:</h4>
                      <p className="text-sm">الأولية (تعداد): شاملة ودقيقة.</p>
                      <p className="text-sm">الثانوية (سجلات): أقل دقة أحياناً وغير شاملة للكل.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <h4 className="font-bold mb-2 text-orange-800">الفئات العمرية:</h4>
                      <p className="text-sm">صغار السن وكبار السن: فئات <span className="text-red-600 font-bold">معالة</span> (غير منتجة).</p>
                      <p className="text-sm">متوسطو السن: فئة <span className="text-green-600 font-bold">منتجة</span> (قوى عاملة).</p>
                  </div>
              </div>
          </div>
      );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20 px-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 text-lg"><ArrowRight size={24} /> خروج</button>
            <h1 className="text-xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الأولى - الصف 6)</h1>
        </div>
        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden"><div className="bg-indigo-600 h-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div></div>
            {currentStep === 1 && <Step1Definitions />}
            {currentStep === 2 && <Step2Consequences />}
            {currentStep === 3 && <Step3Classify />}
            {currentStep === 4 && <Step4Calc />}
            {currentStep === 5 && <Step5CalcKSA />}
            {currentStep === 6 && <Step6Compare />}
            <div className="flex justify-between pt-8 border-t border-slate-200 mt-8">
                <button onClick={prevStep} disabled={currentStep === 1} className="px-6 py-2 rounded-xl font-bold bg-slate-200 text-slate-600 disabled:opacity-50">السابق</button>
                {currentStep < totalSteps ? <button onClick={nextStep} className="px-8 py-2 rounded-xl font-bold bg-indigo-600 text-white shadow-lg">التالي</button> : <button onClick={onBack} className="px-8 py-2 rounded-xl font-bold bg-green-600 text-white shadow-lg flex items-center gap-2"><RefreshCw size={20}/> إنهاء</button>}
            </div>
        </div>
    </div>
  );
};

export default Unit1AssessmentG6;
