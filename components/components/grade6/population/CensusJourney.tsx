import React, { useState, useEffect } from 'react';
import { Tablet, FileText, Check, Clock, Database, BookOpen, PenTool, Wifi, User, ArrowRightLeft, Image as ImageIcon, MapPin, Home, Smartphone, CheckCircle, Crown, QrCode } from 'lucide-react';

const CensusJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'simulation' | 'comparison'>('timeline');
  const [activeEra, setActiveEra] = useState<'paper' | 'digital'>('paper');

  // Simulation State
  const [paperProgress, setPaperProgress] = useState(0);
  const [digitalStep, setDigitalStep] = useState<'idle' | 'loading' | 'done'>('idle');
  const [digitalData, setDigitalData] = useState<any>(null);

  // Comparison State
  const [revealedCells, setRevealedCells] = useState<string[]>([]);

  // Population Clock State
  const [popCount, setPopCount] = useState(5200000);

  // Effect for Population Clock
  useEffect(() => {
      const interval = setInterval(() => {
          setPopCount(prev => prev + 1); // Simulate growth
      }, 3000); // New baby every 3 seconds (simulation)
      return () => clearInterval(interval);
  }, []);

  // Paper Form Data
  const paperFormData = [
      { name: "سالم بن محمد..", relation: "رب الأسرة", gender: "ذكر", age: "45" },
      { name: "أحمد بن سالم..", relation: "ابن (أكبر)", gender: "ذكر", age: "15" },
      { name: "عمر بن سالم..", relation: "ابن (أصغر)", gender: "ذكر", age: "9" }
  ];

  const fillPaperForm = () => {
      if (paperProgress < 100) {
          setPaperProgress(prev => prev + 25);
      }
  };

  const handleDigitalSend = () => {
      setDigitalStep('loading');
      setTimeout(() => {
          setDigitalData({
              name: "سالم بن محمد",
              id: "12345678",
              address: "مسقط، السيب",
              familySize: 5
          });
          setDigitalStep('done');
      }, 2000);
  };

  const toggleCell = (id: string) => {
      if (!revealedCells.includes(id)) {
          setRevealedCells([...revealedCells, id]);
      }
  };

  return (
    <div className="p-6 animate-fade-in space-y-10">
        
        {/* Census Definition Box with Clock */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="flex-1">
                    <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                        <BookOpen size={32}/>
                        ما هو التعداد السكاني؟
                    </h3>
                    <p className="leading-loose text-blue-50 text-xl font-medium">
                        "عملية <span className="text-yellow-300 font-bold bg-white/10 px-2 rounded">حصر شامل</span> (للسكان، والمساكن، والمنشآت) لمجتمع معين في <span className="text-yellow-300 font-bold bg-white/10 px-2 rounded">وقت محدد</span> وعلى <span className="text-yellow-300 font-bold bg-white/10 px-2 rounded">فترات منتظمة</span>."
                    </p>
                </div>
                
                {/* Population Clock Widget (New) */}
                <div className="bg-black/30 p-6 rounded-2xl backdrop-blur-sm border border-white/20 text-center min-w-[250px]">
                    <div className="flex items-center justify-center gap-2 mb-2 text-yellow-300">
                        <Clock size={20} className="animate-pulse" />
                        <span className="text-sm font-bold uppercase tracking-wider">الساعة السكانية (محاكاة)</span>
                    </div>
                    <div className="text-4xl font-black font-mono tracking-widest text-white shadow-black drop-shadow-md">
                        {popCount.toLocaleString()}
                    </div>
                    <p className="text-xs text-blue-200 mt-2">نسمة في سلطنة عمان</p>
                </div>
            </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center bg-slate-100 p-1.5 rounded-full max-w-3xl mx-auto mb-8 shadow-sm">
            <button onClick={() => setActiveTab('timeline')} className={`flex-1 py-3 px-6 rounded-full font-bold text-base transition-all ${activeTab === 'timeline' ? 'bg-white shadow text-blue-700' : 'text-slate-500'}`}>تطور التعداد</button>
            <button onClick={() => setActiveTab('simulation')} className={`flex-1 py-3 px-6 rounded-full font-bold text-base transition-all ${activeTab === 'simulation' ? 'bg-white shadow text-indigo-700' : 'text-slate-500'}`}>محاكاة الاستمارة (ص 19)</button>
            <button onClick={() => setActiveTab('comparison')} className={`flex-1 py-3 px-6 rounded-full font-bold text-base transition-all ${activeTab === 'comparison' ? 'bg-white shadow text-teal-700' : 'text-slate-500'}`}>المقارنة (ص 20)</button>
        </div>

        {/* TAB 1: TIMELINE */}
        {activeTab === 'timeline' && (
            <div className="animate-slide-up">
                
                {/* Omani Personality */}
                <div className="bg-[#FFF8E1] border-r-8 border-[#D4A017] rounded-2xl p-6 mb-12 shadow-lg flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4A017] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="flex-shrink-0 relative z-10">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D4A017] to-[#8D6E63] flex items-center justify-center shadow-xl border-4 border-white">
                            <Crown size={40} className="text-white drop-shadow-md" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-right z-10">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                            <span className="bg-[#D4A017] text-white text-xs font-black px-3 py-1 rounded-full shadow-sm">شخصية عمانية</span>
                        </div>
                        <p className="text-[#5D4037] text-xl font-black leading-relaxed font-serif">
                            "السُّلطانُ قابوسُ بنُ سعيدٍ -طَيَّبَ اللهُ ثراهُ- هو أَوَّلُ مواطنٍ تُسَجَّلُ بياناتُهُ في أَوَّلِ تَعدادٍ شاملٍ بِسَلْطَنَةِ عُمَانَ عام 1993م."
                        </p>
                    </div>
                </div>

                {/* Timeline Interaction */}
                <div className="relative max-w-4xl mx-auto bg-slate-200 h-3 rounded-full my-10">
                    <div className={`absolute top-0 h-full bg-blue-600 rounded-full transition-all duration-500 ${activeEra === 'paper' ? 'left-0 w-1/2' : 'left-0 w-full'}`}></div>
                    
                    <button 
                        onClick={() => setActiveEra('paper')}
                        className={`absolute top-1/2 -translate-y-1/2 left-0 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all ${activeEra === 'paper' ? 'bg-blue-600 border-blue-200 text-white scale-110' : 'bg-white border-slate-300 text-slate-400'}`}
                    >
                        <FileText size={28} />
                    </button>
                    <div className="absolute top-10 left-0 -translate-x-1/2 text-sm font-bold text-slate-700 w-32 text-center bg-white/80 p-1 rounded">1993 - 2010<br/>(تعداد ميداني)</div>

                    <button 
                        onClick={() => setActiveEra('digital')}
                        className={`absolute top-1/2 -translate-y-1/2 right-0 transform translate-x-1/2 w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all ${activeEra === 'digital' ? 'bg-blue-600 border-blue-200 text-white scale-110' : 'bg-white border-slate-300 text-slate-400'}`}
                    >
                        <Database size={28} />
                    </button>
                    <div className="absolute top-10 right-0 translate-x-1/2 text-sm font-bold text-slate-700 w-32 text-center bg-white/80 p-1 rounded">2020<br/>(تعداد إلكتروني)</div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-16">
                    <div className={`p-8 rounded-3xl border-4 transition-all duration-500 ${activeEra === 'paper' ? 'bg-white border-blue-500 shadow-2xl scale-105 opacity-100' : 'bg-slate-50 border-slate-200 opacity-50 blur-[1px]'}`}>
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-black text-slate-800">التعداد الميداني (التقليدي)</h3>
                            <p className="text-base text-slate-500 font-bold mt-2">زيارة المنازل وتعبئة الاستمارات الورقية</p>
                        </div>
                        <ul className="space-y-4 text-lg font-medium text-slate-700">
                            <li className="flex items-center gap-3 bg-red-50 p-3 rounded-lg"><Clock className="text-red-500" size={24}/> سرعة بطيئة في المعالجة</li>
                            <li className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg"><User className="text-orange-500" size={24}/> يحتاج لجهد بشري كبير</li>
                        </ul>
                    </div>

                    <div className={`p-8 rounded-3xl border-4 transition-all duration-500 ${activeEra === 'digital' ? 'bg-blue-50 border-blue-600 shadow-2xl scale-105 opacity-100' : 'bg-slate-50 border-slate-200 opacity-50 blur-[1px]'}`}>
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-black text-blue-900">التعداد الإلكتروني (الحديث)</h3>
                            <p className="text-base text-blue-600 font-bold mt-2">ربط السجلات الحكومية رقمياً</p>
                        </div>
                        <ul className="space-y-4 text-lg font-medium text-slate-700">
                            <li className="flex items-center gap-3 bg-green-50 p-3 rounded-lg"><Wifi className="text-green-500" size={24}/> سرعة فورية في النتائج</li>
                            <li className="flex items-center gap-3 bg-green-50 p-3 rounded-lg"><Database className="text-green-500" size={24}/> دقة عالية وتكلفة أقل</li>
                        </ul>
                    </div>
                </div>
            </div>
        )}

        {/* TAB 2: SIMULATION (Page 19 - Form) */}
        {activeTab === 'simulation' && (
            <div className="animate-slide-up space-y-10">
                <div className="text-center">
                    <h2 className="text-3xl font-black text-slate-800 mb-3">جرب الفرق بنفسك!</h2>
                    <p className="text-xl text-slate-500">لاحظ الفرق في الجهد والوقت بين التعبئة اليدوية القديمة والتطبيق الحديث</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    
                    {/* 1. Paper Form Simulation */}
                    <div className="bg-amber-50 p-8 rounded-3xl border-4 border-amber-200 shadow-xl relative h-full flex flex-col">
                        <div className="absolute -top-4 right-6 bg-amber-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                            الطريقة القديمة (1993 - 2010)
                        </div>
                        
                        <div className="bg-white p-6 rounded-2xl border border-slate-300 shadow-inner mb-6 font-mono text-sm mt-6 flex-1">
                            <table className="w-full border-collapse border border-slate-400">
                                <thead>
                                    <tr className="bg-slate-100">
                                        <th className="border border-slate-400 p-2 text-right">الاسم الثلاثي</th>
                                        <th className="border border-slate-400 p-2 text-center">العلاقة</th>
                                        <th className="border border-slate-400 p-2 text-center">النوع</th>
                                        <th className="border border-slate-400 p-2 text-center">العمر</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paperFormData.map((row, index) => {
                                        const isVisible = paperProgress >= (index + 1) * 25;
                                        return (
                                            <tr key={index}>
                                                <td className="border border-slate-400 p-2 h-10 bg-slate-50">
                                                    {isVisible && <span className="text-blue-800 font-bold font-handwriting text-base">{row.name}</span>}
                                                </td>
                                                <td className="border border-slate-400 p-2 h-10 bg-slate-50 text-center">
                                                    {isVisible && <span className="text-blue-800 font-bold font-handwriting text-base">{row.relation}</span>}
                                                </td>
                                                <td className="border border-slate-400 p-2 h-10 bg-slate-50 text-center">
                                                    {isVisible && <span className="text-blue-800 font-bold font-handwriting text-base">{row.gender}</span>}
                                                </td>
                                                <td className="border border-slate-400 p-2 h-10 bg-slate-50 text-center">
                                                    {isVisible && <span className="text-blue-800 font-bold font-handwriting text-base">{row.age}</span>}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <button 
                            onClick={fillPaperForm}
                            disabled={paperProgress >= 100}
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 disabled:opacity-50 transition-all active:scale-95 shadow-lg"
                        >
                            <PenTool size={24} />
                            {paperProgress >= 100 ? "تم التعبئة (استغرق وقتاً وجهداً!)" : "تعبئة البيانات يدوياً (اضغط هنا)"}
                        </button>
                        <div className="w-full bg-slate-200 rounded-full h-3 mt-4 overflow-hidden border border-slate-300">
                            <div className="bg-amber-600 h-full rounded-full transition-all duration-300" style={{ width: `${paperProgress}%` }}></div>
                        </div>
                    </div>

                    {/* 2. Digital Census Simulation (Smartphone Mockup) */}
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-100 px-6 py-2 rounded-full text-blue-900 text-sm font-bold mb-6 shadow-sm border border-blue-200">
                            الطريقة الحديثة (2020): ربط البيانات
                        </div>
                        
                        {/* Phone Frame */}
                        <div className="relative w-80 h-[600px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-900 shadow-2xl overflow-hidden ring-4 ring-slate-200">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20"></div>
                            
                            {/* Screen Content */}
                            <div className="h-full bg-slate-50 flex flex-col font-tajawal">
                                
                                {/* App Header */}
                                <div className="bg-gradient-to-r from-emerald-600 to-teal-700 h-36 rounded-b-[2.5rem] shadow-lg flex flex-col justify-center items-center text-white relative pt-6">
                                    <div className="text-xs font-mono opacity-80 absolute top-3 right-8">10:30</div>
                                    <h3 className="font-black text-2xl drop-shadow-md">تعداد عُمان</h3>
                                    <h3 className="font-bold text-lg opacity-90">بوابة البيانات الوطنية</h3>
                                </div>

                                {/* App Body */}
                                <div className="flex-1 p-5 space-y-4 overflow-y-auto">
                                    
                                    {digitalStep !== 'done' ? (
                                        <>
                                            {/* Card 1: Personal Info */}
                                            <div className="bg-white p-4 rounded-2xl flex items-center justify-between border border-slate-200 shadow-sm">
                                                <div className="text-right flex-1">
                                                    <h4 className="font-bold text-slate-800 text-base mb-2">المعلومات الشخصية</h4>
                                                    <div className="h-3 w-32 bg-slate-200 rounded animate-pulse"></div>
                                                    <div className="h-2 w-20 bg-slate-200 rounded mt-2 animate-pulse"></div>
                                                </div>
                                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                                    <User size={24} />
                                                </div>
                                            </div>

                                            {/* Card 2: Family Details */}
                                            <div className="bg-white p-4 rounded-2xl flex items-center justify-between border border-slate-200 shadow-sm">
                                                <div className="text-right flex-1">
                                                    <h4 className="font-bold text-slate-800 text-base mb-2">تفاصيل الأسرة</h4>
                                                    <div className="h-3 w-32 bg-slate-200 rounded animate-pulse"></div>
                                                    <div className="h-2 w-20 bg-slate-200 rounded mt-2 animate-pulse"></div>
                                                </div>
                                                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                                                    <Home size={24} />
                                                </div>
                                            </div>

                                            {/* Card 3: Residence */}
                                            <div className="bg-white p-4 rounded-2xl flex items-center justify-between border border-slate-200 shadow-sm">
                                                <div className="text-right flex-1">
                                                    <h4 className="font-bold text-slate-800 text-base mb-2">بيانات الإقامة</h4>
                                                    <div className="h-3 w-32 bg-slate-200 rounded animate-pulse"></div>
                                                    <div className="h-2 w-20 bg-slate-200 rounded mt-2 animate-pulse"></div>
                                                </div>
                                                <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                                                    <MapPin size={24} />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        /* Success State: Data Retrieved */
                                        <div className="bg-white p-5 rounded-3xl shadow-lg border border-slate-100 h-full flex flex-col items-center justify-center animate-fade-in text-center">
                                            <div className="bg-green-100 p-5 rounded-full mb-6 animate-bounce">
                                                <CheckCircle size={56} className="text-green-600" />
                                            </div>
                                            <h3 className="font-black text-2xl text-slate-800 mb-6">تم تحديث البيانات!</h3>
                                            
                                            <div className="w-full text-right space-y-4 text-base bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                                <div className="flex justify-between border-b border-slate-200 pb-2">
                                                    <span className="text-slate-500 font-medium">الاسم:</span>
                                                    <span className="font-bold text-slate-800">{digitalData?.name}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-slate-200 pb-2">
                                                    <span className="text-slate-500 font-medium">الرقم المدني:</span>
                                                    <span className="font-bold text-slate-800 font-mono">{digitalData?.id}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-slate-200 pb-2">
                                                    <span className="text-slate-500 font-medium">العنوان:</span>
                                                    <span className="font-bold text-slate-800">{digitalData?.address}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-500 font-medium">عدد الأفراد:</span>
                                                    <span className="font-bold text-slate-800">{digitalData?.familySize}</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-green-700 mt-6 font-bold bg-green-50 px-4 py-2 rounded-lg">تم جلب البيانات تلقائياً من السجل المدني ✅</p>
                                        </div>
                                    )}

                                </div>

                                {/* Footer Action */}
                                <div className="p-6 bg-slate-100 border-t border-slate-200">
                                    {digitalStep !== 'done' && (
                                        <button 
                                            onClick={handleDigitalSend}
                                            disabled={digitalStep === 'loading'}
                                            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black text-lg py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
                                        >
                                            {digitalStep === 'loading' ? 'جاري الاتصال بقواعد البيانات...' : 'تحديث البيانات'}
                                        </button>
                                    )}
                                    
                                    {/* Loading Bar */}
                                    {digitalStep === 'loading' && (
                                        <div className="w-full bg-slate-300 h-3 rounded-full mt-4 overflow-hidden border border-slate-400">
                                            <div className="h-full bg-emerald-500 rounded-full animate-[progress_2s_ease-in-out_forwards]" style={{width: '0%'}}></div>
                                        </div>
                                    )}
                                    <style>{`
                                        @keyframes progress { to { width: 100%; } }
                                    `}</style>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* TAB 3: COMPARISON (Page 20 Table) */}
        {activeTab === 'comparison' && (
            <div className="animate-slide-up">
                <div className="bg-indigo-50 p-8 rounded-3xl border-2 border-indigo-200 max-w-5xl mx-auto shadow-lg">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-black text-indigo-900 flex items-center justify-center gap-3">
                            <ArrowRightLeft size={32}/> استنتج: الفرق بين التعدادين (صفحة 20)
                        </h3>
                        <p className="text-indigo-700 text-lg mt-2 font-medium">اضغط على المربعات للكشف عن أوجه المقارنة</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center text-base md:text-lg">
                        {/* Header */}
                        <div className="bg-slate-800 text-white p-4 rounded-xl font-bold shadow-md flex items-center justify-center">وجه المقارنة</div>
                        <div className="bg-amber-600 text-white p-4 rounded-xl font-bold shadow-md flex items-center justify-center">التعداد الميداني</div>
                        <div className="bg-blue-600 text-white p-4 rounded-xl font-bold shadow-md flex items-center justify-center">التعداد الإلكتروني</div>

                        {/* Row 1: Speed */}
                        <div className="bg-white border-2 border-slate-200 p-4 font-bold text-slate-700 rounded-xl flex items-center justify-center shadow-sm">سرعة جمع البيانات</div>
                        <button onClick={() => toggleCell('c1')} className={`p-4 rounded-xl border-2 transition-all font-bold shadow-sm ${revealedCells.includes('c1') ? 'bg-red-50 border-red-200 text-red-800' : 'bg-slate-200 border-slate-300 text-slate-400 hover:bg-slate-300'}`}>
                            {revealedCells.includes('c1') ? "بطيئة (تحتاج وقتاً طويلاً)" : "اضغط للكشف"}
                        </button>
                        <button onClick={() => toggleCell('c2')} className={`p-4 rounded-xl border-2 transition-all font-bold shadow-sm ${revealedCells.includes('c2') ? 'bg-green-50 border-green-200 text-green-800' : 'bg-slate-200 border-slate-300 text-slate-400 hover:bg-slate-300'}`}>
                            {revealedCells.includes('c2') ? "فورية / سريعة جداً" : "اضغط للكشف"}
                        </button>

                        {/* Row 2: Effort */}
                        <div className="bg-white border-2 border-slate-200 p-4 font-bold text-slate-700 rounded-xl flex items-center justify-center shadow-sm">الجهد</div>
                        <button onClick={() => toggleCell('c3')} className={`p-4 rounded-xl border-2 transition-all font-bold shadow-sm ${revealedCells.includes('c3') ? 'bg-red-50 border-red-200 text-red-800' : 'bg-slate-200 border-slate-300 text-slate-400 hover:bg-slate-300'}`}>
                            {revealedCells.includes('c3') ? "جهد كبير (زيارة المنازل)" : "اضغط للكشف"}
                        </button>
                        <button onClick={() => toggleCell('c4')} className={`p-4 rounded-xl border-2 transition-all font-bold shadow-sm ${revealedCells.includes('c4') ? 'bg-green-50 border-green-200 text-green-800' : 'bg-slate-200 border-slate-300 text-slate-400 hover:bg-slate-300'}`}>
                            {revealedCells.includes('c4') ? "جهد قليل (ربط قواعد بيانات)" : "اضغط للكشف"}
                        </button>

                        {/* Row 3: Cost */}
                        <div className="bg-white border-2 border-slate-200 p-4 font-bold text-slate-700 rounded-xl flex items-center justify-center shadow-sm">التكلفة</div>
                        <button onClick={() => toggleCell('c5')} className={`p-4 rounded-xl border-2 transition-all font-bold shadow-sm ${revealedCells.includes('c5') ? 'bg-red-50 border-red-200 text-red-800' : 'bg-slate-200 border-slate-300 text-slate-400 hover:bg-slate-300'}`}>
                            {revealedCells.includes('c5') ? "عالية (طباعة، تدريب، نقل)" : "اضغط للكشف"}
                        </button>
                        <button onClick={() => toggleCell('c6')} className={`p-4 rounded-xl border-2 transition-all font-bold shadow-sm ${revealedCells.includes('c6') ? 'bg-green-50 border-green-200 text-green-800' : 'bg-slate-200 border-slate-300 text-slate-400 hover:bg-slate-300'}`}>
                            {revealedCells.includes('c6') ? "منخفضة (توفير الموارد)" : "اضغط للكشف"}
                        </button>
                    </div>
                </div>
            </div>
        )}

    </div>
  );
};

export default CensusJourney;