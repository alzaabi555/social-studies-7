import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Scale, Users, Building2, HeartHandshake, BookOpen, Crown, Vote, Flag } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const Unit3AssessmentG6: React.FC<Props> = ({ onBack }) => {
  // Q1 State
  const [q1Answers, setQ1Answers] = useState<{[key: number]: string}>({});
  const q1Correct = {
      1: 'وزارة التنمية الاجتماعية',
      2: 'جمعيات المرأة العمانية'
  };

  // Q2 State (Accordion)
  const [openDefinition, setOpenDefinition] = useState<number | null>(null);

  // Q3 State (Roles)
  const [openRole, setOpenRole] = useState<number | null>(null);

  // Q4 State (Classification)
  const [activities, setActivities] = useState([
      { id: 1, text: 'تنظيف الأفلاج', type: 'volunteer' },
      { id: 2, text: 'اختيار رئيس الجماعة', type: 'election' },
      { id: 3, text: 'تقديم فقرة بالعيد الوطني', type: 'event' },
      { id: 4, text: 'تنظيم حملة تبرع بالدم', type: 'volunteer' }
  ]);
  const [activityStatus, setActivityStatus] = useState<{[key: number]: 'correct'|'wrong'|null}>({});

  const handleQ1Select = (id: number, val: string) => {
      setQ1Answers(prev => ({ ...prev, [id]: val }));
  };

  const classifyActivity = (id: number, type: string) => {
      const item = activities.find(a => a.id === id);
      if (item && item.type === type) {
          setActivityStatus(prev => ({...prev, [id]: 'correct'}));
      } else {
          setActivityStatus(prev => ({...prev, [id]: 'wrong'}));
          setTimeout(() => setActivityStatus(prev => ({...prev, [id]: null})), 1000);
      }
  };

  return (
    <div className="min-h-screen bg-purple-50 font-tajawal text-right flex flex-col" dir="rtl">
        {/* Header */}
        <div className="bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-20">
            <button onClick={onBack} className="flex items-center gap-2 text-slate-500 font-bold hover:text-purple-600 text-lg">
                <ArrowRight size={24} /> خروج
            </button>
            <h1 className="text-xl md:text-2xl font-black text-purple-800">أُقَيِّمُ تَعَلُّمِي (الوحدة الثالثة)</h1>
            <div className="w-10"></div>
        </div>

        <div className="flex-1 max-w-4xl mx-auto w-full p-6 space-y-10 pb-20">
            
            {/* Q1: Identify Authority */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-purple-100 p-6 border-b border-purple-200 flex items-center gap-4">
                    <span className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">1</span>
                    <h3 className="font-black text-xl text-purple-900">أكتب اسم الجهة المختصة بالأعمال الآتية:</h3>
                </div>
                <div className="p-8 space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 border-b border-slate-100 pb-6">
                        <p className="flex-1 text-slate-700 font-bold text-lg leading-relaxed flex items-center gap-2">
                            <Scale size={20} className="text-purple-500"/>
                            الإشراف على مؤسسات المجتمع المدني وإشهارها.
                        </p>
                        <select 
                            onChange={(e) => handleQ1Select(1, e.target.value)}
                            className={`p-3 rounded-xl border-2 font-bold text-base outline-none cursor-pointer w-full md:w-64 transition-colors ${q1Answers[1] === q1Correct[1] ? 'border-green-500 bg-green-50 text-green-800' : 'border-slate-300'}`}
                        >
                            <option value="">اختر الجهة...</option>
                            <option value="وزارة التربية والتعليم">وزارة التربية والتعليم</option>
                            <option value="وزارة التنمية الاجتماعية">وزارة التنمية الاجتماعية</option>
                            <option value="شرطة عمان السلطانية">شرطة عمان السلطانية</option>
                        </select>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <p className="flex-1 text-slate-700 font-bold text-lg leading-relaxed flex items-center gap-2">
                            <Crown size={20} className="text-purple-500"/>
                            تفعيل دور المرأة للمساهمة في البناء والتنمية المجتمعية.
                        </p>
                        <select 
                            onChange={(e) => handleQ1Select(2, e.target.value)}
                            className={`p-3 rounded-xl border-2 font-bold text-base outline-none cursor-pointer w-full md:w-64 transition-colors ${q1Answers[2] === q1Correct[2] ? 'border-green-500 bg-green-50 text-green-800' : 'border-slate-300'}`}
                        >
                            <option value="">اختر الجهة...</option>
                            <option value="جمعيات المرأة العمانية">جمعيات المرأة العمانية</option>
                            <option value="جمعية البيئة">جمعية البيئة</option>
                            <option value="النادي الرياضي">النادي الرياضي</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Q2: Definitions */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-blue-100 p-6 border-b border-blue-200 flex items-center gap-4">
                    <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">2</span>
                    <h3 className="font-black text-xl text-blue-900">عَرِّف ما يأتي:</h3>
                </div>
                <div className="p-8 space-y-4">
                    {[
                        {id: 1, title: 'الْمُجْتَمَعُ الْمَدَنِيُّ', def: 'مؤسسات أو جمعيات أهلية (غير حكومية)، تعمل وفق قوانين الدولة، وتقدم خدمات لأفراد المجتمع دون مقابل (غير ربحية).'},
                        {id: 2, title: 'الْمُشَارَكَةُ الْمُجْتَمَعِيَّةُ', def: 'مساهمة المواطنين في جهود التنمية، سواء بالرأي أو العمل أو المال.'},
                        {id: 3, title: 'الْعَمَلُ التَّطَوُّعِيُّ', def: 'الجهد الذي يبذله الفرد من أجل الآخرين دون انتظار مقابل مادي.'},
                    ].map((item) => (
                        <div key={item.id} className="border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors">
                            <button 
                                onClick={() => setOpenDefinition(openDefinition === item.id ? null : item.id)}
                                className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-lg text-right"
                            >
                                <span className="flex items-center gap-2"><BookOpen size={20} className="text-blue-500"/> {item.title}</span>
                                <span className="text-blue-500 font-black text-xl">{openDefinition === item.id ? '▲' : '▼'}</span>
                            </button>
                            {openDefinition === item.id && (
                                <div className="p-5 bg-blue-50 text-blue-900 text-lg font-medium animate-slide-up leading-relaxed border-t border-blue-100">
                                    {item.def}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Q3: Roles */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-teal-100 p-6 border-b border-teal-200 flex items-center gap-4">
                    <span className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">3</span>
                    <h3 className="font-black text-xl text-teal-900">وَضِّح دور كل من:</h3>
                </div>
                <div className="p-8 grid md:grid-cols-3 gap-6">
                    {[
                        {id: 1, title: 'النظام الأساسي للدولة', role: 'تنظيم عمل مؤسسات المجتمع المدني وفق القانون.'},
                        {id: 2, title: 'السبلة العمانية', role: 'ترسيخ مفهوم المشاركة والتشاور بين أفراد المجتمع.'},
                        {id: 3, title: 'المشاركة المجتمعية', role: 'تعزيز التعاون والتكافل بين أفراد المجتمع.'},
                    ].map((item) => (
                        <div key={item.id} className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-teal-300 transition-all text-center">
                            <h4 className="font-bold text-lg text-slate-800 mb-4">{item.title}</h4>
                            <button 
                                onClick={() => setOpenRole(openRole === item.id ? null : item.id)}
                                className="bg-teal-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-teal-700 transition-colors"
                            >
                                {openRole === item.id ? 'إخفاء الدور' : 'كشف الدور'}
                            </button>
                            {openRole === item.id && (
                                <p className="mt-4 text-teal-900 font-medium animate-fade-in bg-teal-100 p-3 rounded-xl border border-teal-200">
                                    {item.role}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Q4: Classification */}
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-orange-100 p-6 border-b border-orange-200 flex items-center gap-4">
                    <span className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl">4</span>
                    <h3 className="font-black text-xl text-orange-900">صَنِّف الأعمال الآتية حسب شكل المشاركة:</h3>
                </div>
                <div className="p-8 space-y-6">
                    {activities.map((act) => (
                        <div key={act.id} className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-100">
                            <h4 className="font-black text-xl text-slate-800 mb-4 text-center">{act.text}</h4>
                            
                            {activityStatus[act.id] === 'correct' ? (
                                <div className="bg-green-100 text-green-800 p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 animate-scale-in">
                                    <CheckCircle /> إجابة صحيحة
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <button 
                                        onClick={() => classifyActivity(act.id, 'volunteer')}
                                        className={`px-4 py-2 rounded-xl font-bold border-2 transition-all flex items-center gap-2 ${activityStatus[act.id] === 'wrong' ? 'border-red-300 bg-red-50 text-red-800' : 'bg-white border-green-200 text-green-700 hover:bg-green-50'}`}
                                    >
                                        <HeartHandshake size={18}/> عمل تطوعي
                                    </button>
                                    <button 
                                        onClick={() => classifyActivity(act.id, 'election')}
                                        className={`px-4 py-2 rounded-xl font-bold border-2 transition-all flex items-center gap-2 ${activityStatus[act.id] === 'wrong' ? 'border-red-300 bg-red-50 text-red-800' : 'bg-white border-blue-200 text-blue-700 hover:bg-blue-50'}`}
                                    >
                                        <Vote size={18}/> انتخابات
                                    </button>
                                    <button 
                                        onClick={() => classifyActivity(act.id, 'event')}
                                        className={`px-4 py-2 rounded-xl font-bold border-2 transition-all flex items-center gap-2 ${activityStatus[act.id] === 'wrong' ? 'border-red-300 bg-red-50 text-red-800' : 'bg-white border-red-200 text-red-700 hover:bg-red-50'}`}
                                    >
                                        <Flag size={18}/> مناسبة وطنية
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

        </div>
    </div>
  );
};

export default Unit3AssessmentG6;