
import React, { useState } from 'react';
import { FIFTH_SPHERES_RELATION_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Star, RotateCcw, AlertTriangle, Leaf, CheckCircle, Menu, RefreshCw, Sprout, Building2 } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const ImportanceSection = () => (
    <div className="p-6 text-center space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-indigo-800">أهمية الأغلفة للأرض</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-lg mb-2">استمرار الحياة</h3>
                <p className="text-slate-600">توفر الأغلفة الموارد الأساسية (هواء، ماء، غذاء) للكائنات الحية.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-lg mb-2">الموارد الطبيعية</h3>
                <p className="text-slate-600">مصدر للمعادن، الطاقة، ومواد البناء.</p>
            </div>
        </div>
    </div>
);

const InteractionSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-indigo-800 text-center">العلاقة التفاعلية بين الأغلفة</h2>
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 flex flex-col md:flex-row items-center gap-6">
            <RefreshCw size={48} className="text-blue-600 animate-spin-slow"/>
            <div className="flex-1">
                <h3 className="font-bold text-lg text-blue-900 mb-2">مثال: تفاعل الغلاف الجوي والمائي</h3>
                <p className="text-blue-800">الرياح (جوي) تحرك الأمواج (مائي) وتساعد في تبخر المياه.</p>
            </div>
        </div>
        <div className="bg-green-50 p-6 rounded-2xl border border-green-200 flex flex-col md:flex-row items-center gap-6">
            <Sprout size={48} className="text-green-600"/>
            <div className="flex-1">
                <h3 className="font-bold text-lg text-green-900 mb-2">مثال: تفاعل الغلاف الصخري والحيوي</h3>
                <p className="text-green-800">النباتات (حيوي) تثبت التربة (صخري) بجذورها وتمنع انجرافها.</p>
            </div>
        </div>
    </div>
);

const ImpactSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-red-800 text-center">تأثير الإنسان (سلبي وإيجابي)</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
                <div className="flex items-center gap-2 mb-2 text-red-700"><AlertTriangle/> <h3 className="font-bold">تأثير سلبي</h3></div>
                <ul className="list-disc list-inside text-slate-700">
                    <li>التلوث (هواء، ماء).</li>
                    <li>الرعي الجائر وقطع الأشجار.</li>
                    <li>الصيد الجائر.</li>
                </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2 text-green-700"><CheckCircle/> <h3 className="font-bold">تأثير إيجابي</h3></div>
                <ul className="list-disc list-inside text-slate-700">
                    <li>إقامة المحميات الطبيعية.</li>
                    <li>التشجير وزيادة المساحات الخضراء.</li>
                    <li>سن قوانين حماية البيئة.</li>
                </ul>
            </div>
        </div>
    </div>
);

const OmanSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-emerald-800 text-center">جهود سلطنة عمان</h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-100 flex flex-col items-center text-center">
            <Building2 size={64} className="text-emerald-600 mb-4"/>
            <h3 className="font-bold text-xl text-slate-800 mb-2">هيئة البيئة</h3>
            <p className="text-slate-600 max-w-lg">
                أنشأت السلطنة هيئة البيئة لضمان حماية الحياة الفطرية ومكافحة التلوث، كما انضمت للاتفاقيات الدولية للحفاظ على المناخ.
            </p>
            <div className="mt-6 flex gap-4">
                <span className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full font-bold text-sm">محمية المها</span>
                <span className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full font-bold text-sm">محمية السلاحف</span>
            </div>
        </div>
    </div>
);

const EarthSpheresLesson2: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<'importance' | 'interaction' | 'impact' | 'oman' | 'quiz'>('importance');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">علاقة الأغلفة (الدرس 2)</h1>
        </div>
        <nav className="p-4 space-y-3 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveSection('importance'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'importance' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> أهمية الأغلفة
          </button>
          <button onClick={() => {setActiveSection('interaction'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'interaction' ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <RotateCcw size={20}/> العلاقة التفاعلية
          </button>
          <button onClick={() => {setActiveSection('impact'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'impact' ? 'bg-red-100 text-red-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <AlertTriangle size={20}/> تأثير الإنسان
          </button>
          <button onClick={() => {setActiveSection('oman'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'oman' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Leaf size={20}/> جهود عمان
          </button>
          <button onClick={() => {setActiveSection('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'quiz' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-indigo-800">الأهمية والعلاقة</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
          {activeSection === 'importance' && <ImportanceSection />}
          {activeSection === 'interaction' && <InteractionSection />}
          {activeSection === 'impact' && <ImpactSection />}
          {activeSection === 'oman' && <OmanSection />}
          {activeSection === 'quiz' && <SectionQuiz questions={FIFTH_SPHERES_RELATION_QUIZ} />}
        </div>
      </main>
    </div>
  );
};

export default EarthSpheresLesson2;
