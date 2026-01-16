
import React, { useState } from 'react';
import { FIFTH_SPHERES_CONCEPT_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, HelpCircle, Sun, Disc, Droplet, CheckCircle, Menu, Cloud, Mountain, Globe } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const IntroSection = () => (
    <div className="p-6 text-center space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-indigo-800">موقع الأرض في الكون</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
            كوكب الأرض هو جزء من نظام كوني واسع. نحن نعيش في مجرة <strong>درب التبانة</strong>، 
            ضمن المجموعة الشمسية التي تتكون من الشمس و 8 كواكب تدور حولها.
        </p>
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-200">
            <Globe size={64} className="mx-auto text-indigo-500 mb-4 animate-pulse"/>
            <p className="font-bold text-indigo-900">الأرض: الكوكب الوحيد المعروف بوجود الحياة عليه.</p>
        </div>
    </div>
);

const SolarSystemSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-indigo-800 text-center mb-4">المجموعة الشمسية</h2>
        <div className="flex flex-wrap justify-center gap-4">
            {['عطارد', 'الزهرة', 'الأرض', 'المريخ', 'المشتري', 'زحل', 'أورانوس', 'نبتون'].map((planet, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-md border border-slate-200 flex flex-col items-center w-28">
                    <div className={`w-12 h-12 rounded-full mb-2 ${planet === 'الأرض' ? 'bg-blue-500' : 'bg-orange-300'}`}></div>
                    <span className="font-bold text-slate-700">{planet}</span>
                </div>
            ))}
        </div>
        <p className="text-center text-slate-500 mt-4 text-sm">* عطارد هو الأقرب للشمس، ونبتون هو الأبعد.</p>
    </div>
);

const SpheresSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-indigo-800 text-center">أغلفة كوكب الأرض</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sky-50 p-6 rounded-2xl border-l-4 border-sky-500">
                <div className="flex items-center gap-2 mb-2 text-sky-700"><Cloud/> <h3 className="font-bold">1. الغلاف الجوي</h3></div>
                <p className="text-sm text-slate-600">الغازات التي تحيط بالأرض (نيتروجين، أكسجين..).</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2 text-blue-700"><Droplet/> <h3 className="font-bold">2. الغلاف المائي</h3></div>
                <p className="text-sm text-slate-600">المحيطات، البحار، الأنهار، والجليد (71% من الأرض).</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500">
                <div className="flex items-center gap-2 mb-2 text-amber-700"><Mountain/> <h3 className="font-bold">3. الغلاف الصخري</h3></div>
                <p className="text-sm text-slate-600">القشرة الأرضية وما تحويه من صخور وتربة وجبال.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2 text-green-700"><CheckCircle/> <h3 className="font-bold">4. الغلاف الحيوي</h3></div>
                <p className="text-sm text-slate-600">النطاق الذي توجد فيه الحياة (إنسان، حيوان، نبات).</p>
            </div>
        </div>
    </div>
);

const WaterCycleSection = () => (
    <div className="p-6 space-y-6 text-center animate-fade-in">
        <h2 className="text-2xl font-black text-indigo-800">دورة الماء في الطبيعة</h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-indigo-100 relative h-64 flex items-center justify-center overflow-hidden">
            <div className="absolute top-4 right-10"><Sun className="text-yellow-500 w-16 h-16 animate-spin-slow"/></div>
            <div className="absolute bottom-0 w-full h-20 bg-blue-500 flex items-center justify-center text-white font-bold">محيط / بحر</div>
            <div className="absolute top-20 left-20"><Cloud className="text-slate-400 w-16 h-16 animate-bounce"/></div>
            
            {/* Arrows */}
            <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full">
                    <path d="M100,200 Q50,100 150,100" fill="none" stroke="blue" strokeWidth="2" strokeDasharray="5,5"/>
                    <text x="50" y="150" fontSize="12" fill="blue">تبخر</text>
                    <path d="M200,100 Q300,100 300,200" fill="none" stroke="blue" strokeWidth="2" strokeDasharray="5,5"/>
                    <text x="310" y="150" fontSize="12" fill="blue">هطول</text>
                </svg>
            </div>
        </div>
        <p className="text-slate-600 max-w-2xl mx-auto">
            تتبخر المياه بفعل حرارة الشمس، وتتكثف لتشكل السحب، ثم تسقط كأمطار لتعود للمسطحات المائية.
        </p>
    </div>
);

const EarthSpheresLesson1: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'solar' | 'spheres' | 'water_cycle' | 'quiz'>('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeTab) {
      case 'intro': return <IntroSection />;
      case 'solar': return <SolarSystemSection />;
      case 'spheres': return <SpheresSection />;
      case 'water_cycle': return <WaterCycleSection />;
      case 'quiz': return <SectionQuiz questions={FIFTH_SPHERES_CONCEPT_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">أغلفة كوكب الأرض (1) 🌍</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'intro' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <HelpCircle size={20}/> المقدمة
          </button>
          <button onClick={() => {setActiveTab('solar'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'solar' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Sun size={20}/> المجموعة الشمسية
          </button>
          <button onClick={() => {setActiveTab('spheres'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'spheres' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Disc size={20}/> أغلفة الأرض
          </button>
          <button onClick={() => {setActiveTab('water_cycle'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'water_cycle' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Droplet size={20}/> دورة الماء
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-indigo-800">أغلفة الأرض</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default EarthSpheresLesson1;
