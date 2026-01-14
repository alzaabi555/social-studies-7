import React, { useState } from 'react';
import { Database, FileText, CheckCircle, HelpCircle, BookOpen, Target, Clock, Coins, Activity, ListChecks } from 'lucide-react';

interface SourceItem {
    id: number;
    text: string;
    type: 'primary' | 'secondary';
}

const ITEMS: SourceItem[] = [
    { id: 1, text: 'التعداد السكاني', type: 'primary' },
    { id: 2, text: 'سجلات المدارس', type: 'secondary' },
    { id: 3, text: 'الإحصاءات الحيوية (المواليد/الوفيات)', type: 'primary' },
    { id: 4, text: 'سجلات الهجرة', type: 'secondary' },
    { id: 5, text: 'المسح بالعينة', type: 'primary' },
    { id: 6, text: 'سجلات المستشفيات', type: 'secondary' },
];

const PopSources: React.FC = () => {
    const [mode, setMode] = useState<'learn' | 'play' | 'book_activity'>('learn');
    
    // Game States
    const [items, setItems] = useState<SourceItem[]>(ITEMS);
    const [primaryCount, setPrimaryCount] = useState(0);
    const [secondaryCount, setSecondaryCount] = useState(0);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

    // Book Activity State (Page 22)
    const [bookItems, setBookItems] = useState([
        { id: 1, text: 'عدد السكان', type: 'primary' },
        { id: 2, text: 'أعداد السياح الزائرين', type: 'secondary' },
        { id: 3, text: 'أنواع المساكن والمنشآت', type: 'primary' },
        { id: 4, text: 'إجمالي طلبة الصف الأول', type: 'secondary' }
    ]);
    const [bookAnswerStatus, setBookAnswerStatus] = useState<{[key:number]: 'correct'|'wrong'|null}>({});

    const handleSort = (item: SourceItem, targetType: 'primary' | 'secondary') => {
        if (item.type === targetType) {
            setFeedback('correct');
            setTimeout(() => {
                setItems(prev => prev.filter(i => i.id !== item.id));
                if (targetType === 'primary') setPrimaryCount(prev => prev + 1);
                else setSecondaryCount(prev => prev + 1);
                setFeedback(null);
            }, 500);
        } else {
            setFeedback('wrong');
            setTimeout(() => setFeedback(null), 1000);
        }
    };

    const handleBookActivitySort = (id: number, type: 'primary' | 'secondary') => {
        const item = bookItems.find(i => i.id === id);
        if (item && item.type === type) {
            setBookAnswerStatus(prev => ({...prev, [id]: 'correct'}));
        } else {
            setBookAnswerStatus(prev => ({...prev, [id]: 'wrong'}));
            setTimeout(() => {
                setBookAnswerStatus(prev => ({...prev, [id]: null}));
            }, 1000);
        }
    };

    const currentItem = items[0];

    // --- LEARN MODE CONTENT (TEXTBOOK DETAILS) ---
    if (mode === 'learn') {
        return (
            <div className="p-6 animate-fade-in space-y-10">
                <div className="text-center">
                    <h2 className="text-3xl font-black text-slate-800 mb-3">مصادر البيانات السكانية</h2>
                    <p className="text-xl text-slate-600">تنقسم المصادر إلى نوعين رئيسين.. لنتعرف عليهما بالتفصيل</p>
                </div>

                {/* 1. Primary Sources */}
                <div className="bg-orange-50 rounded-3xl p-8 border-r-8 border-orange-500 shadow-sm">
                    <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-3">
                        <Database size={32}/> أولاً: المصادر الأولية
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        
                        {/* Census */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                            <h4 className="font-black text-xl text-orange-800 mb-3">1. التعداد السكاني</h4>
                            <p className="text-base text-slate-700 leading-relaxed mb-4 font-medium">
                                هو أشمل المصادر الإحصائية وأكثرها دقة.
                            </p>
                            <div className="bg-orange-100 p-3 rounded-xl text-sm font-bold text-orange-900 leading-relaxed">
                                تعريفه: عملية حصر (السكان، والمساكن، والمنشآت) لمجتمع معين في وقت محدد وعلى فترات منتظمة.
                            </div>
                        </div>

                        {/* Vital Stats */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                            <h4 className="font-black text-xl text-orange-800 mb-3">2. الإحصاءات الحيوية</h4>
                            <p className="text-base text-slate-700 leading-relaxed mb-4 font-medium">
                                تُسمى في سلطنة عمان <span className="font-black text-orange-700">"سجل الأحوال المدنية"</span>.
                            </p>
                            <ul className="list-disc list-inside text-sm text-slate-600 font-bold space-y-2">
                                <li>سجلات المواليد والوفيات</li>
                                <li>حالات الزواج والطلاق</li>
                            </ul>
                        </div>

                        {/* Sample Surveys */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                            <h4 className="font-black text-xl text-orange-800 mb-3">3. المسوحات بالعينة</h4>
                            <p className="text-base text-slate-700 leading-relaxed mb-4 font-medium">
                                تُطبق على <span className="font-black text-orange-700">جزء من المجتمع</span> فقط. وتستخدم لجمع البيانات بين فترات التعداد.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="text-xs bg-green-100 text-green-900 px-3 py-1 rounded-full flex items-center gap-1 font-bold"><Clock size={14}/> توفر الوقت</span>
                                <span className="text-xs bg-green-100 text-green-900 px-3 py-1 rounded-full flex items-center gap-1 font-bold"><Target size={14}/> توفر الجهد</span>
                                <span className="text-xs bg-green-100 text-green-900 px-3 py-1 rounded-full flex items-center gap-1 font-bold"><Coins size={14}/> قليلة التكلفة</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Secondary Sources */}
                <div className="bg-green-50 rounded-3xl p-8 border-r-8 border-green-500 shadow-sm">
                    <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                        <FileText size={32}/> ثانياً: المصادر الثانوية
                    </h3>
                    <p className="text-green-900 text-lg mb-6 font-medium">
                        هي البيانات التي يتم جمعها من <span className="font-black">سجلات المؤسسات الحكومية والخاصة</span>.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="bg-white px-6 py-3 rounded-xl text-base font-bold text-green-800 shadow-sm border border-green-200">🏫 سجلات المدارس</span>
                        <span className="bg-white px-6 py-3 rounded-xl text-base font-bold text-green-800 shadow-sm border border-green-200">🏥 سجلات المستشفيات</span>
                        <span className="bg-white px-6 py-3 rounded-xl text-base font-bold text-green-800 shadow-sm border border-green-200">✈️ سجلات الهجرة</span>
                    </div>
                    <div className="mt-6 bg-green-100 p-4 rounded-xl text-base text-green-900 border-l-4 border-green-600 font-medium">
                        <strong>💡 معلومة:</strong> تنتهج سلطنة عمان نظام الحكومة الإلكترونية لربط هذه البيانات بالمؤسسات الحكومية لتسهيل الوصول إليها.
                    </div>
                </div>

                <div className="flex gap-6 justify-center pt-4">
                    <button 
                        onClick={() => setMode('book_activity')}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-full font-black text-lg shadow-xl transition-transform hover:scale-105 flex items-center gap-3"
                    >
                        <ListChecks size={24} />
                        نشاط الكتاب (ص 22)
                    </button>
                    <button 
                        onClick={() => setMode('play')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-black text-lg shadow-xl transition-transform hover:scale-105 flex items-center gap-3"
                    >
                        <Activity size={24} />
                        لعبة التصنيف
                    </button>
                </div>
            </div>
        );
    }

    // --- BOOK ACTIVITY MODE (Page 22) ---
    if (mode === 'book_activity') {
        return (
            <div className="p-6 animate-fade-in space-y-10">
                <div className="flex justify-between items-center mb-8">
                    <button onClick={() => setMode('learn')} className="text-base text-slate-500 underline font-bold">عودة للشرح</button>
                    <div className="text-center">
                        <h2 className="text-3xl font-black text-slate-800 mb-2">نشاط صنف (صفحة 22)</h2>
                        <p className="text-slate-600 text-lg">ادرس البيانات السكانية التالية ثم صنفها حسب مصادرها</p>
                    </div>
                    <div className="w-24"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {bookItems.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-slate-50 transition-colors">
                            <span className="font-black text-xl text-slate-800 flex-1">{item.text}</span>
                            
                            {bookAnswerStatus[item.id] === 'correct' ? (
                                <div className={`px-6 py-3 rounded-xl font-black text-lg flex items-center gap-3 ${item.type === 'primary' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>
                                    <CheckCircle size={24} />
                                    {item.type === 'primary' ? 'مصدر أولي' : 'مصدر ثانوي'}
                                </div>
                            ) : (
                                <div className="flex gap-4">
                                    <button 
                                        onClick={() => handleBookActivitySort(item.id, 'primary')}
                                        className={`px-6 py-3 rounded-xl border-2 text-base font-bold transition-all ${bookAnswerStatus[item.id] === 'wrong' ? 'border-red-300 bg-red-50' : 'border-orange-200 hover:bg-orange-50 text-orange-800 hover:border-orange-400'}`}
                                    >
                                        مصدر أولي
                                    </button>
                                    <button 
                                        onClick={() => handleBookActivitySort(item.id, 'secondary')}
                                        className={`px-6 py-3 rounded-xl border-2 text-base font-bold transition-all ${bookAnswerStatus[item.id] === 'wrong' ? 'border-red-300 bg-red-50' : 'border-green-200 hover:bg-green-50 text-green-800 hover:border-green-400'}`}
                                    >
                                        مصدر ثانوي
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 text-base text-slate-700 mt-10 leading-relaxed">
                    <h4 className="font-black text-lg mb-4 text-slate-800">توضيح الإجابات:</h4>
                    <ul className="grid gap-3">
                        <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> <strong>عدد السكان:</strong> يُجمع عبر التعداد الميداني الشامل (أولي).</li>
                        <li className="flex items-start gap-2"><span className="text-green-500 font-bold">•</span> <strong>السياح:</strong> يُؤخذ من سجلات وزارة السياحة/المنافذ الحدودية (ثانوي).</li>
                        <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> <strong>أنواع المساكن:</strong> تُرصد مباشرة أثناء التعداد (أولي).</li>
                        <li className="flex items-start gap-2"><span className="text-green-500 font-bold">•</span> <strong>طلبة الصف الأول:</strong> من سجلات وزارة التربية والتعليم (ثانوي).</li>
                    </ul>
                </div>
            </div>
        );
    }

    // --- PLAY MODE (EXISTING GAME) ---
    return (
        <div className="p-6 animate-fade-in space-y-10">
            <div className="flex justify-between items-center">
                <button onClick={() => setMode('learn')} className="text-base text-slate-500 underline font-bold">عودة للشرح</button>
                <div className="text-center">
                    <h2 className="text-3xl font-black text-slate-800 mb-2">صنّف المصادر</h2>
                    <p className="text-slate-500 text-lg">اسحب البطاقة إلى الصندوق المناسب</p>
                </div>
                <div className="w-24"></div> {/* Spacer */}
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {/* Primary Bucket */}
                <div className="bg-orange-50 border-4 border-orange-200 rounded-3xl p-8 flex flex-col items-center relative shadow-lg">
                    <div className="bg-orange-100 p-5 rounded-full text-orange-600 mb-6">
                        <Database size={48} />
                    </div>
                    <h3 className="text-2xl font-black text-orange-900">المصادر الأولية</h3>
                    <div className="mt-6 font-black text-5xl text-orange-400">{primaryCount}</div>
                    
                    {currentItem && (
                        <button 
                            onClick={() => handleSort(currentItem, 'primary')}
                            className="mt-8 w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black text-xl shadow-xl transition-transform hover:scale-105 active:scale-95"
                        >
                            تعداد / مسح / إحصاء
                        </button>
                    )}
                </div>

                {/* Secondary Bucket */}
                <div className="bg-green-50 border-4 border-green-200 rounded-3xl p-8 flex flex-col items-center relative shadow-lg">
                    <div className="bg-green-100 p-5 rounded-full text-green-600 mb-6">
                        <FileText size={48} />
                    </div>
                    <h3 className="text-2xl font-black text-green-900">المصادر الثانوية</h3>
                    <div className="mt-6 font-black text-5xl text-green-400">{secondaryCount}</div>

                    {currentItem && (
                        <button 
                            onClick={() => handleSort(currentItem, 'secondary')}
                            className="mt-8 w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black text-xl shadow-xl transition-transform hover:scale-105 active:scale-95"
                        >
                            سجلات المؤسسات
                        </button>
                    )}
                </div>
            </div>

            {/* Current Card */}
            <div className="flex justify-center mt-12 h-32">
                {currentItem ? (
                    <div className={`bg-white px-12 py-8 rounded-3xl shadow-2xl border-b-8 border-slate-200 transform transition-all duration-300 flex items-center justify-center ${feedback === 'correct' ? 'scale-0 opacity-0' : feedback === 'wrong' ? 'shake bg-red-50 border-red-200' : 'scale-100'}`}>
                        <h4 className="text-3xl font-black text-slate-800">{currentItem.text}</h4>
                    </div>
                ) : (
                    <div className="text-center animate-bounce">
                        <h3 className="text-3xl font-black text-blue-600 mb-4">أحسنت! 🎉</h3>
                        <p className="text-slate-500 text-lg">تم تصنيف جميع المصادر بنجاح.</p>
                        <button onClick={() => { setItems(ITEMS); setPrimaryCount(0); setSecondaryCount(0); }} className="mt-6 px-8 py-3 bg-slate-200 rounded-full text-base font-bold hover:bg-slate-300 transition-colors">إعادة اللعبة</button>
                    </div>
                )}
            </div>

            <style>{`
                .shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
                @keyframes shake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, 0, 0); }
                    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                    40%, 60% { transform: translate3d(4px, 0, 0); }
                }
            `}</style>
        </div>
    );
};

export default PopSources;