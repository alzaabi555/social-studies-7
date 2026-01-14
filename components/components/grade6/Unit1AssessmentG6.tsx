import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Calculator, Scale, Users, FileText, Database, MapPin, TrendingUp, AlertTriangle } from 'lucide-react';

interface Unit1AssessmentG6Props {
    onBack: () => void;
}

const Unit1AssessmentG6: React.FC<Unit1AssessmentG6Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState(1);

  // Q1 State
  const [q1Answers, setQ1Answers] = useState<{[key: number]: string}>({});
  const q1Correct = {
      1: 'الكثافة السكانية',
      2: 'التعداد السكاني',
      3: 'الهرم السكاني',
      4: 'أمد الحياة'
  };

  // Q2 State (Accordion)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Q3 State (Classification)
  const [q3Growth, setQ3Growth] = useState<string[]>([]);
  const [q3Dist, setQ3Dist] = useState<string[]>([]);
  const factors = ['المواليد', 'المناخ', 'الهجرة', 'األنشطة الاقتصادية', 'الوفيات', 'توفر الخدمات'];

  // Q4 State (Calculation)
  const [q4Input, setQ4Input] = useState('');
  const [q4Result, setQ4Result] = useState<string | null>(null);

  // Q5 State (Calculation)
  const [q5Input, setQ5Input] = useState('');
  const [q5Result, setQ5Result] = useState<string | null>(null);

  // Q6 State (Comparison)
  const [q6Answers, setQ6Answers] = useState<{[key: string]: string}>({});

  // --- Handlers ---

  const handleQ1Select = (id: number, value: string) => {
      setQ1Answers(prev => ({...prev, [id]: value}));
  };

  const handleQ3Move = (factor: string, target: 'growth' | 'dist') => {
      // Remove from everywhere first
      setQ3Growth(prev => prev.filter(f => f !== factor));
      setQ3Dist(prev => prev.filter(f => f !== factor));
      
      if (target === 'growth') setQ3Growth(prev => [...prev, factor]);
      else setQ3Dist(prev => [...prev, factor]);
  };

  const checkQ4 = () => {
      const val = parseInt(q4Input.replace(/,/g, ''));
      if (val === 12577) setQ4Result('correct');
      else setQ4Result('wrong');
  };

  const checkQ5 = () => {
      const val = Math.round(parseFloat(q5Input));
      if (val >= 16 && val <= 17) setQ5Result('correct'); // Accept 16 or 17 due to rounding
      else setQ5Result('wrong');
  };

  const handleQ6Select = (cellId: string, value: string) => {
      setQ6Answers(prev => ({...prev, [cellId]: value}));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-tajawal text-right flex flex-col" dir="rtl">
        {/* Header */}
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 text-lg">
                <ArrowRight size={24} /> خروج
            </button>
            <h1 className="text-2xl font-black text-indigo-800">أُقَيِّمُ تَعَلُّمِي (صفحة 52-53)</h1>
            <div className="w-10"></div>
        </div>

        <div className="flex-1 max-w-5xl mx-auto w-full p-6 space-y-10 pb-20">
            
            {/* Q1: Definitions */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-indigo-50 p-6 border-b border-indigo-100 flex items-center gap-4">
                    <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">1</span>
                    <h3 className="font-black text-xl text-indigo-900">أكتب المصطلح المناسب أمام كل عبارة:</h3>
                </div>
                <div className="p-8 space-y-6">
                    {[
                        {id: 1, text: 'عدد السكان في كيلومتر مربع واحد من الأرض.'},
                        {id: 2, text: 'عملية حصر السكان والمساكن والمنشآت لمجتمع معين في وقت محدد.'},
                        {id: 3, text: 'شكل بياني لتمثيل البيانات السكانية الخاصة بالعمر والنوع.'},
                        {id: 4, text: 'عدد السنوات التي يتوقع أن يعيشها الفرد.'},
                    ].map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row md:items-center gap-4 border-b border-slate-100 pb-6 last:border-0">
                            <p className="flex-1 text-slate-700 font-bold text-lg leading-relaxed">{item.text}</p>
                            <select 
                                onChange={(e) => handleQ1Select(item.id, e.target.value)}
                                className={`p-3 rounded-xl border-2 font-bold text-base min-w-[250px] outline-none cursor-pointer transition-colors ${q1Answers[item.id] === q1Correct[item.id as keyof typeof q1Correct] ? 'border-green-500 bg-green-50 text-green-800' : 'border-slate-300 hover:border-indigo-400'}`}
                            >
                                <option value="">اختر المصطلح...</option>
                                <option value="التعداد السكاني">التعداد السكاني</option>
                                <option value="الكثافة السكانية">الكثافة السكانية</option>
                                <option value="أمد الحياة">أمد الحياة</option>
                                <option value="الهرم السكاني">الهرم السكاني</option>
                            </select>
                        </div>
                    ))}
                </div>
            </section>

            {/* Q2: Consequences */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-orange-50 p-6 border-b border-orange-100 flex items-center gap-4">
                    <span className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">2</span>
                    <h3 className="font-black text-xl text-orange-900">ما النتائج المترتبة على:</h3>
                </div>
                <div className="p-8 space-y-4">
                    {[
                        {id: 1, title: 'التبليغ الخاطئ عن نوع المولود؟', answer: 'يؤدي إلى خلل في البيانات (التركيب النوعي) مما يؤثر على دقة التخطيط للخدمات الخاصة بكل نوع.'},
                        {id: 2, title: 'تزايد هجرة الذكور مقارنة بالإناث؟', answer: 'يؤدي إلى اختلال التوازن في التركيب النوعي (زيادة نسبة الذكور) في المناطق المستقبلة.'},
                        {id: 3, title: 'التركز السكاني في منطقة معينة؟', answer: 'يسبب الضغط على الخدمات، الازدحام المروري، التلوث، ونقص فرص العمل.'},
                        {id: 4, title: 'توفر بيانات سكانية دقيقة؟', answer: 'يساعد الدولة على التخطيط السليم للمستقبل وتوفير الخدمات (مدارس، مستشفيات) بشكل عادل.'},
                    ].map((item) => (
                        <div key={item.id} className="border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-orange-200 transition-colors">
                            <button 
                                onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                                className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-lg text-right"
                            >
                                {item.title}
                                <span className="text-orange-500 font-black text-xl">{openAccordion === item.id ? '▲' : '▼'}</span>
                            </button>
                            {openAccordion === item.id && (
                                <div className="p-5 bg-orange-50 text-orange-900 text-lg font-medium animate-slide-up leading-relaxed border-t border-orange-100">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Q3: Classification */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-green-50 p-6 border-b border-green-100 flex items-center gap-4">
                    <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">3</span>
                    <h3 className="font-black text-xl text-green-900">صنّف العوامل المؤثرة في السكان:</h3>
                </div>
                <div className="p-8">
                    <div className="flex flex-wrap gap-3 justify-center mb-8">
                        {factors.map(f => (
                            <button 
                                key={f}
                                onClick={() => {
                                    if (q3Growth.includes(f) || q3Dist.includes(f)) {
                                        setQ3Growth(prev => prev.filter(i => i !== f));
                                        setQ3Dist(prev => prev.filter(i => i !== f));
                                    } else {
                                        // Initially do nothing, waiting for placement
                                    }
                                }}
                                className={`px-5 py-3 rounded-full font-bold text-lg shadow-sm transition-all hover:scale-105 ${
                                    q3Growth.includes(f) ? 'bg-indigo-100 text-indigo-800 border-2 border-indigo-300' :
                                    q3Dist.includes(f) ? 'bg-teal-100 text-teal-800 border-2 border-teal-300' :
                                    'bg-white border-2 border-slate-300 text-slate-600 hover:border-slate-500'
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-indigo-50 border-4 border-indigo-200 rounded-3xl p-6 min-h-[200px]">
                            <h4 className="font-black text-indigo-900 text-center mb-4 flex items-center justify-center gap-2 text-xl"><TrendingUp size={28}/> النمو السكاني</h4>
                            <p className="text-sm text-center text-indigo-500 mb-4 font-bold">(اضغط أدناه لإضافة العناصر)</p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {factors.map(f => (
                                    !q3Growth.includes(f) && !q3Dist.includes(f) && ['المواليد', 'الوفيات', 'الهجرة'].includes(f) ? 
                                    <button key={f} onClick={() => handleQ3Move(f, 'growth')} className="bg-white border-2 border-indigo-200 text-indigo-700 px-4 py-2 rounded-xl text-lg font-bold hover:bg-indigo-100">+ {f}</button> : null
                                ))}
                                {q3Growth.map(f => <span key={f} className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-lg font-bold shadow-md">{f}</span>)}
                            </div>
                        </div>

                        <div className="bg-teal-50 border-4 border-teal-200 rounded-3xl p-6 min-h-[200px]">
                            <h4 className="font-black text-teal-900 text-center mb-4 flex items-center justify-center gap-2 text-xl"><MapPin size={28}/> التوزيع الجغرافي</h4>
                            <p className="text-sm text-center text-teal-500 mb-4 font-bold">(اضغط أدناه لإضافة العناصر)</p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {factors.map(f => (
                                    !q3Growth.includes(f) && !q3Dist.includes(f) && ['المناخ', 'األنشطة الاقتصادية', 'توفر الخدمات'].includes(f) ? 
                                    <button key={f} onClick={() => handleQ3Move(f, 'dist')} className="bg-white border-2 border-teal-200 text-teal-700 px-4 py-2 rounded-xl text-lg font-bold hover:bg-teal-100">+ {f}</button> : null
                                ))}
                                {q3Dist.map(f => <span key={f} className="bg-teal-600 text-white px-4 py-2 rounded-xl text-lg font-bold shadow-md">{f}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Q4 & Q5: Calculations */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Q4: Natural Increase */}
                <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="bg-blue-50 p-6 border-b border-blue-100 flex items-center gap-4">
                        <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">4</span>
                        <h3 className="font-black text-xl text-blue-900">احسب الزيادة الطبيعية (مسقط 2022)</h3>
                    </div>
                    <div className="p-8">
                        <div className="text-lg text-slate-700 mb-6 bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                            المواليد: <strong className="text-2xl text-green-700 mx-2">15,143</strong> | الوفيات: <strong className="text-2xl text-red-700 mx-2">2,566</strong>
                        </div>
                        <div className="flex gap-4">
                            <input 
                                type="text" 
                                placeholder="اكتب الناتج هنا..."
                                value={q4Input}
                                onChange={(e) => setQ4Input(e.target.value)}
                                className="flex-1 border-2 border-slate-300 rounded-xl px-4 py-3 text-center font-black text-xl font-mono focus:border-blue-500 outline-none"
                            />
                            <button onClick={checkQ4} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg">تحقق</button>
                        </div>
                        {q4Result === 'correct' && <p className="mt-4 text-green-600 font-bold text-xl flex items-center gap-2 bg-green-50 p-3 rounded-xl justify-center"><CheckCircle size={24}/> إجابة صحيحة! (12,577)</p>}
                        {q4Result === 'wrong' && <p className="mt-4 text-red-500 font-bold text-lg bg-red-50 p-3 rounded-xl text-center">حاول مرة أخرى (المواليد - الوفيات)</p>}
                    </div>
                </section>

                {/* Q5: Density */}
                <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="bg-pink-50 p-6 border-b border-pink-100 flex items-center gap-4">
                        <span className="bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">5</span>
                        <h3 className="font-black text-xl text-pink-900">احسب الكثافة السكانية (السعودية)</h3>
                    </div>
                    <div className="p-8">
                        <div className="text-lg text-slate-700 mb-6 bg-pink-50 p-4 rounded-xl border border-pink-100 text-center">
                            السكان: <strong className="text-2xl text-slate-900 mx-2">36 مليون</strong> | المساحة: <strong className="text-2xl text-slate-900 mx-2">2,149,690</strong>
                        </div>
                        <div className="flex gap-4">
                            <input 
                                type="text" 
                                placeholder="الناتج (لأقرب عدد صحيح)..."
                                value={q5Input}
                                onChange={(e) => setQ5Input(e.target.value)}
                                className="flex-1 border-2 border-slate-300 rounded-xl px-4 py-3 text-center font-black text-xl font-mono focus:border-pink-500 outline-none"
                            />
                            <button onClick={checkQ5} className="bg-pink-600 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-pink-700 shadow-lg">تحقق</button>
                        </div>
                        {q5Result === 'correct' && <p className="mt-4 text-green-600 font-bold text-xl flex items-center gap-2 bg-green-50 p-3 rounded-xl justify-center"><CheckCircle size={24}/> إجابة صحيحة! (~17 نسمة/كم²)</p>}
                        {q5Result === 'wrong' && <p className="mt-4 text-red-500 font-bold text-lg bg-red-50 p-3 rounded-xl text-center">حاول مرة أخرى (السكان ÷ المساحة)</p>}
                    </div>
                </section>
            </div>

            {/* Q6: Compare Tables */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-800 p-6 border-b border-slate-700 flex items-center gap-4 text-white">
                    <span className="bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">6</span>
                    <h3 className="font-black text-xl">قارن حسب البيانات:</h3>
                </div>
                
                <div className="p-8 space-y-12">
                    {/* Table 1: Sources */}
                    <div>
                        <h4 className="font-black text-slate-800 mb-4 border-r-8 border-orange-500 pr-4 text-xl">أ- مصادر جمع البيانات:</h4>
                        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-md">
                            <table className="w-full text-center border-collapse text-lg">
                                <thead>
                                    <tr className="bg-slate-100 text-slate-800">
                                        <th className="border p-4 font-black">وجه المقارنة</th>
                                        <th className="border p-4 bg-orange-100 text-orange-900 font-black">المصادر الأولية</th>
                                        <th className="border p-4 bg-green-100 text-green-900 font-black">المصادر الثانوية</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border p-4 font-bold bg-slate-50">الشمولية</td>
                                        <td className="border p-4 font-medium">شاملة ودقيقة (ميدانية)</td>
                                        <td className="border p-4 cursor-pointer hover:bg-green-50 transition-colors" onClick={(e) => (e.target as HTMLTableCellElement).innerText = 'أقل شمولية (سجلات محددة)'}>
                                            <span className="text-slate-400 font-bold text-base border-2 border-dashed border-slate-300 px-3 py-1 rounded-lg">اضغط للإجابة</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border p-4 font-bold bg-slate-50">الدقة</td>
                                        <td className="border p-4 cursor-pointer hover:bg-orange-50 transition-colors" onClick={(e) => (e.target as HTMLTableCellElement).innerText = 'عالية جداً'}>
                                            <span className="text-slate-400 font-bold text-base border-2 border-dashed border-slate-300 px-3 py-1 rounded-lg">اضغط للإجابة</span>
                                        </td>
                                        <td className="border p-4 font-medium">تعتمد على دقة التسجيل</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Table 2: Age Groups */}
                    <div>
                        <h4 className="font-black text-slate-800 mb-4 border-r-8 border-blue-500 pr-4 text-xl">ب- الفئات العمرية:</h4>
                        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-md">
                            <table className="w-full text-center border-collapse text-lg">
                                <thead>
                                    <tr className="bg-slate-100 text-slate-800">
                                        <th className="border p-4 font-black">وجه المقارنة</th>
                                        <th className="border p-4 bg-red-50 text-red-900 font-black">صغار السن</th>
                                        <th className="border p-4 bg-blue-50 text-blue-900 font-black">متوسطو السن</th>
                                        <th className="border p-4 bg-orange-50 text-orange-900 font-black">كبار السن</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border p-4 font-bold bg-slate-50">الفئات العمرية</td>
                                        <td className="border p-4 text-red-700 font-bold">أقل من 15 سنة</td>
                                        <td className="border p-4 text-blue-700 font-bold">15 - 64 سنة</td>
                                        <td className="border p-4 cursor-pointer hover:bg-orange-50 transition-colors" onClick={(e) => (e.target as HTMLTableCellElement).innerText = '65 سنة فأكثر'}>
                                            <span className="text-slate-400 font-bold text-base border-2 border-dashed border-slate-300 px-3 py-1 rounded-lg">اضغط للإجابة</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border p-4 font-bold bg-slate-50">العمل والإنتاج</td>
                                        <td className="border p-4 cursor-pointer hover:bg-red-50 transition-colors" onClick={(e) => (e.target as HTMLTableCellElement).innerText = 'غير منتجة (معالة)'}>
                                            <span className="text-slate-400 font-bold text-base border-2 border-dashed border-slate-300 px-3 py-1 rounded-lg">اضغط للإجابة</span>
                                        </td>
                                        <td className="border p-4 text-green-700 font-black bg-green-50">منتجة (قوى عاملة)</td>
                                        <td className="border p-4 text-orange-700 font-bold">غير منتجة (غالباً)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
  );
};

export default Unit1AssessmentG6;