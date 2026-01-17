
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, RefreshCw, Check, ArrowDown } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit2AssessmentG6: React.FC<Props> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const nextStep = () => { if (currentStep < totalSteps) setCurrentStep(prev => prev + 1); };
  const prevStep = () => { if (currentStep > 1) setCurrentStep(prev => prev - 1); };

  // Step 1: Concepts Matching
  const Step1Match = () => {
      const [matches, setMatches] = useState<{[key: number]: string}>({});
      const items = [
          {id: 1, text: 'ميزان الشعر', correct: 'علم العروض'},
          {id: 2, text: 'تولي الابن الأكبر للحاكم', correct: 'الحكم الوراثي'},
          {id: 3, text: 'استنباط المعارف من القرآن والسنة', correct: 'علوم الشريعة'}
      ];
      const opts = ['الحكم الوراثي', 'علم العروض', 'علوم الشريعة'];
      return (
          <div className="space-y-6 animate-fade-in">
              <div className="bg-indigo-100 p-4 rounded-xl border-r-4 border-indigo-600"><h3 className="font-bold text-indigo-900 text-lg">١- صل المفهوم بالتعريف:</h3></div>
              {items.map(i => (
                  <div key={i.id} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-4 items-center">
                      <p className="flex-1 font-medium">{i.text}</p>
                      <select className={`p-2 rounded border-2 ${matches[i.id] === i.correct ? 'bg-green-100 border-green-500' : 'bg-slate-50'}`} onChange={(e) => setMatches({...matches, [i.id]: e.target.value})}>
                          <option value="">اختر...</option>
                          {opts.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                  </div>
              ))}
          </div>
      );
  };

  // Step 2: Evidence
  const Step2Evidence = () => {
      const [rev, setRev] = useState<number[]>([]);
      const items = [
          {id: 1, q: 'نبوغ جابر بن زيد؟', a: 'أول من دون الحديث (ديوان جابر) ومؤسس الإباضية فكرياً.'},
          {id: 2, q: 'مشاركة عمان في الفتوحات؟', a: 'دور المهلب في المشرق وقتال الخوارج.'},
          {id: 3, q: 'الاهتمام العمراني الأموي؟', a: 'بناء قبة الصخرة والجامع الأموي.'}
      ];
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-emerald-100 p-4 rounded-xl border-r-4 border-emerald-600"><h3 className="font-bold text-emerald-900 text-lg">٢- اذكر دليلاً على:</h3></div>
              {items.map(i => (
                  <div key={i.id} onClick={() => setRev([...rev, i.id])} className="bg-white p-4 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
                      <h4 className="font-bold text-slate-800 mb-1">{i.q}</h4>
                      {rev.includes(i.id) ? <p className="text-emerald-700 animate-fade-in">{i.a}</p> : <span className="text-xs text-slate-400">اضغط للكشف</span>}
                  </div>
              ))}
          </div>
      );
  };

  // Step 3: Identify Images
  const Step3Identify = () => {
      const [sel, setSel] = useState<{[key: number]: string}>({});
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-orange-100 p-4 rounded-xl border-r-4 border-orange-600"><h3 className="font-bold text-orange-900 text-lg">٣- استنتج اسم المنجز من الصورة:</h3></div>
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border text-center">
                      <div className="h-32 bg-slate-100 rounded mb-4 flex items-center justify-center font-black text-4xl">🏹</div>
                      <p className="mb-2 font-bold">آلة حصار عسكرية</p>
                      <select className={`w-full p-2 border rounded ${sel[1] === 'منجنيق' ? 'bg-green-100' : ''}`} onChange={(e) => setSel({...sel, 1: e.target.value})}>
                          <option>اختر..</option><option value="منجنيق">المنجنيق</option><option value="دبابة">الدبابة</option>
                      </select>
                  </div>
                  <div className="bg-white p-6 rounded-xl border text-center">
                      <div className="h-32 bg-slate-100 rounded mb-4 flex items-center justify-center font-black text-4xl text-yellow-500">🪙</div>
                      <p className="mb-2 font-bold">عملة إسلامية</p>
                      <select className={`w-full p-2 border rounded ${sel[2] === 'دينار' ? 'bg-green-100' : ''}`} onChange={(e) => setSel({...sel, 2: e.target.value})}>
                          <option>اختر..</option><option value="درهم">الدرهم</option><option value="دينار">الدينار الأموي</option>
                      </select>
                  </div>
              </div>
          </div>
      );
  };

  // Step 4: Fields
  const Step4Fields = () => {
      const [matches, setMatches] = useState<{[key: number]: string}>({});
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-purple-100 p-4 rounded-xl border-r-4 border-purple-600"><h3 className="font-bold text-purple-900 text-lg">٤- حدد مجال الشخصية:</h3></div>
              <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center">
                      <span className="font-bold">زياد بن المهلب</span>
                      <div className="flex gap-2">
                          <button onClick={() => setMatches({...matches, 1: 'pol'})} className={`px-3 py-1 rounded border ${matches[1] === 'pol' ? 'bg-green-500 text-white' : 'bg-white'}`}>سياسي/عسكري</button>
                          <button onClick={() => setMatches({...matches, 1: 'sci'})} className={`px-3 py-1 rounded border ${matches[1] === 'sci' ? 'bg-red-500 text-white' : 'bg-white'}`}>علمي</button>
                      </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center">
                      <span className="font-bold">كعب بن معدان</span>
                      <div className="flex gap-2">
                          <button onClick={() => setMatches({...matches, 2: 'pol'})} className={`px-3 py-1 rounded border ${matches[2] === 'pol' ? 'bg-red-500 text-white' : 'bg-white'}`}>سياسي</button>
                          <button onClick={() => setMatches({...matches, 2: 'sci'})} className={`px-3 py-1 rounded border ${matches[2] === 'sci' ? 'bg-green-500 text-white' : 'bg-white'}`}>علمي (طبيب)</button>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  // Step 5: Map
  const Step5Map = () => {
      const [drawn, setDrawn] = useState(false);
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-blue-100 p-4 rounded-xl border-r-4 border-blue-600"><h3 className="font-bold text-blue-900 text-lg">٥- ارسم خط سير حملات الحجاج للسيطرة على عمان:</h3></div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 relative h-64 bg-blue-50 overflow-hidden text-center">
                  <div className="absolute top-10 left-10 w-4 h-4 bg-black rounded-full"></div><span className="absolute top-6 left-8 text-xs font-bold">العراق</span>
                  <div className="absolute bottom-10 right-20 w-4 h-4 bg-red-600 rounded-full animate-ping"></div><span className="absolute bottom-6 right-20 text-xs font-bold">عمان</span>
                  {drawn && (
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                          <path d="M50,50 Q150,150 250,200" stroke="red" strokeWidth="3" fill="none" strokeDasharray="5,5" className="animate-[draw_2s_linear_forwards]"/>
                          <path d="M50,50 Q200,50 300,200" stroke="blue" strokeWidth="3" fill="none" strokeDasharray="5,5" className="animate-[draw_2s_linear_forwards]"/>
                      </svg>
                  )}
                  <button onClick={() => setDrawn(true)} className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow">رسم المسار</button>
              </div>
          </div>
      );
  };

  // Step 6: Results
  const Step6Results = () => {
      const [rev, setRev] = useState(false);
      return (
          <div className="space-y-6 animate-slide-up">
              <div className="bg-red-100 p-4 rounded-xl border-r-4 border-red-600"><h3 className="font-bold text-red-900 text-lg">٦- ما النتيجة المترتبة على:</h3></div>
              <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-800">أخلاق التجار العمانيين؟</h4>
                      {rev ? <p className="text-green-700 animate-fade-in mt-1">انتشار الإسلام في المناطق التي وصلوا إليها.</p> : <button onClick={() => setRev(true)} className="text-xs text-slate-400 underline">كشف</button>}
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-800">ظهور الفرق المعارضة للأمويين؟</h4>
                      {rev ? <p className="text-red-700 animate-fade-in mt-1">ضعف الدولة الأموية وسقوطها.</p> : <button onClick={() => setRev(true)} className="text-xs text-slate-400 underline">كشف</button>}
                  </div>
              </div>
          </div>
      );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right flex flex-col" dir="rtl">
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20 px-6">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-purple-600 text-lg"><ArrowRight size={24} /> خروج</button>
            <h1 className="text-xl font-black text-purple-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثانية - الصف 6)</h1>
        </div>
        <div className="flex-1 max-w-4xl mx-auto w-full p-6 pb-24">
            <div className="w-full bg-slate-200 h-3 rounded-full mb-8 overflow-hidden"><div className="bg-purple-600 h-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div></div>
            {currentStep === 1 && <Step1Match />}
            {currentStep === 2 && <Step2Evidence />}
            {currentStep === 3 && <Step3Identify />}
            {currentStep === 4 && <Step4Fields />}
            {currentStep === 5 && <Step5Map />}
            {currentStep === 6 && <Step6Results />}
            <div className="flex justify-between pt-8 border-t border-slate-200 mt-8">
                <button onClick={prevStep} disabled={currentStep === 1} className="px-6 py-2 rounded-xl font-bold bg-slate-200 text-slate-600 disabled:opacity-50">السابق</button>
                {currentStep < totalSteps ? <button onClick={nextStep} className="px-8 py-2 rounded-xl font-bold bg-purple-600 text-white shadow-lg">التالي</button> : <button onClick={onBack} className="px-8 py-2 rounded-xl font-bold bg-green-600 text-white shadow-lg flex items-center gap-2"><RefreshCw size={20}/> إنهاء</button>}
            </div>
        </div>
    </div>
  );
};

export default Unit2AssessmentG6;
