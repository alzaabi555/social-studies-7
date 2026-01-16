
import React, { useState } from 'react';
import { FIFTH_RESOURCES_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Leaf, Clock, MapPin, Factory, CheckCircle, Target, Menu, Sun, Wind, Droplet, Fuel } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const IntroSection = () => (
    <div className="p-6 text-center space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-amber-800">ما هي الموارد الطبيعية؟</h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
            "هي كل ما أودعه الله في الطبيعة من ثروات، <span className="text-amber-600 font-bold">دون تدخل الإنسان</span> في إيجادها، وتكون مفيدة له في حياته."
        </p>
        <div className="flex justify-center gap-4">
            <span className="bg-amber-50 text-amber-800 px-4 py-2 rounded-lg font-bold">الماء 💧</span>
            <span className="bg-amber-50 text-amber-800 px-4 py-2 rounded-lg font-bold">الهواء 💨</span>
            <span className="bg-amber-50 text-amber-800 px-4 py-2 rounded-lg font-bold">التربة 🌱</span>
            <span className="bg-amber-50 text-amber-800 px-4 py-2 rounded-lg font-bold">المعادن ⛏️</span>
        </div>
    </div>
);

const TypesSection = () => (
    <div className="p-6 space-y-8 animate-fade-in">
        <h2 className="text-2xl font-black text-green-800 text-center">أنواع الموارد (حسب الزمن)</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-3xl border border-green-200">
                <h3 className="font-bold text-xl text-green-900 mb-4 flex items-center gap-2"><Leaf/> موارد متجددة</h3>
                <p className="text-slate-700 mb-4">تتجدد باستمرار ولا تنفد إذا أحسن استخدامها.</p>
                <div className="flex gap-2 flex-wrap">
                    <span className="bg-white px-3 py-1 rounded shadow text-green-700">أشعة الشمس</span>
                    <span className="bg-white px-3 py-1 rounded shadow text-green-700">الرياح</span>
                    <span className="bg-white px-3 py-1 rounded shadow text-green-700">النباتات</span>
                </div>
            </div>
            <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200">
                <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2"><Fuel/> موارد غير متجددة</h3>
                <p className="text-slate-700 mb-4">موجودة بكميات محدودة، وتنقص بالاستخدام (ناضبة).</p>
                <div className="flex gap-2 flex-wrap">
                    <span className="bg-white px-3 py-1 rounded shadow text-slate-700">النفط</span>
                    <span className="bg-white px-3 py-1 rounded shadow text-slate-700">الغاز الطبيعي</span>
                    <span className="bg-white px-3 py-1 rounded shadow text-slate-700">المعادن</span>
                </div>
            </div>
        </div>
    </div>
);

const MapSection = () => (
    <div className="p-6 space-y-6 animate-fade-in text-center">
        <h2 className="text-2xl font-black text-blue-800">توزيع الموارد في عمان</h2>
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 inline-block w-full max-w-2xl">
            <p className="text-slate-600 mb-6">سلطنة عمان غنية بالموارد المتنوعة في مختلف المحافظات.</p>
            <div className="grid grid-cols-2 gap-4 text-right">
                <div className="bg-slate-50 p-4 rounded-xl">
                    <h4 className="font-bold text-slate-800">النفط والغاز</h4>
                    <p className="text-xs text-slate-500">الوسطى، الظاهرة، الداخلية</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                    <h4 className="font-bold text-slate-800">النحاس</h4>
                    <p className="text-xs text-slate-500">شمال الباطنة (صحار)</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                    <h4 className="font-bold text-slate-800">الثروة السمكية</h4>
                    <p className="text-xs text-slate-500">الولايات الساحلية (الوسطى، الشرقية)</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                    <h4 className="font-bold text-slate-800">الرخام</h4>
                    <p className="text-xs text-slate-500">عبري، نزوى</p>
                </div>
            </div>
        </div>
    </div>
);

const EconomySection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-orange-800 text-center">الأهمية الاقتصادية</h2>
        <div className="bg-orange-50 p-6 rounded-2xl border-l-8 border-orange-500">
            <h3 className="font-bold text-lg mb-2 text-orange-900">1. مصدر للدخل القومي</h3>
            <p className="text-slate-600">تعتمد الدولة على عوائد النفط والغاز والمعادن في تمويل المشاريع.</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-2xl border-l-8 border-orange-500">
            <h3 className="font-bold text-lg mb-2 text-orange-900">2. توفير فرص العمل</h3>
            <p className="text-slate-600">قطاعات التعدين والصيد والزراعة توظف آلاف المواطنين.</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-2xl border-l-8 border-orange-500">
            <h3 className="font-bold text-lg mb-2 text-orange-900">3. قيام الصناعات</h3>
            <p className="text-slate-600">تعتمد المصانع على المواد الخام (مثل البتروكيماويات، الأسمنت).</p>
        </div>
    </div>
);

const SustainSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-teal-800 text-center">استدامة الموارد (رؤية عمان 2040)</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow border border-teal-100">
                <Sun size={40} className="text-yellow-500 mb-3"/>
                <h4 className="font-bold text-lg">الطاقة النظيفة</h4>
                <p className="text-sm text-slate-600">مشروع "مرآة" للطاقة الشمسية، ومحطة "ظفار" لطاقة الرياح.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border border-teal-100">
                <CheckCircle size={40} className="text-green-500 mb-3"/>
                <h4 className="font-bold text-lg">الاستزراع السمكي</h4>
                <p className="text-sm text-slate-600">إنشاء مزارع لتربية الأسماك للحفاظ على المخزون الطبيعي.</p>
            </div>
        </div>
    </div>
);

const NaturalResourcesLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'types' | 'map' | 'economy' | 'sustain' | 'story' | 'quiz'>('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
      switch(activeTab) {
          case 'intro': return <IntroSection />;
          case 'types': return <TypesSection />;
          case 'map': return <MapSection />;
          case 'economy': return <EconomySection />;
          case 'sustain': return <SustainSection />;
          case 'story': return (
              <div className="p-6 text-center animate-fade-in">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-900">قصة يوسف عليه السلام</h2>
                  <div className="bg-indigo-50 p-6 rounded-2xl">
                      <p className="text-lg text-slate-700 leading-relaxed">
                          تعلمنا من قصة نبي الله يوسف عليه السلام أهمية <strong>حسن إدارة الموارد</strong>. 
                          حين ادخر القمح في سنوات الرخاء ليستخدمه الناس في سنوات الجفاف.
                          <br/><br/>
                          (قال تزرعون سبع سنين دأباً فما حصدتم فذروه في سنبله...)
                      </p>
                  </div>
              </div>
          );
          case 'quiz': return <SectionQuiz questions={FIFTH_RESOURCES_QUIZ} />;
          default: return <IntroSection />;
      }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-slate-100 flex flex-col`}>
        <div className="p-4 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-amber-600 bg-slate-50 hover:bg-amber-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-amber-700 px-2">الموارد الطبيعية 💎</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'intro' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}><Leaf size={20}/> المقدمة</button>
          <button onClick={() => {setActiveTab('types'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'types' ? 'bg-green-100 text-green-800' : 'text-slate-600 hover:bg-slate-50'}`}><Clock size={20}/> الأنواع (الزمن)</button>
          <button onClick={() => {setActiveTab('map'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'map' ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}><MapPin size={20}/> خريطة الثروات</button>
          <button onClick={() => {setActiveTab('economy'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'economy' ? 'bg-orange-100 text-orange-800' : 'text-slate-600 hover:bg-slate-50'}`}><Factory size={20}/> الأهمية الاقتصادية</button>
          <button onClick={() => {setActiveTab('sustain'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'sustain' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}><CheckCircle size={20}/> الاستدامة وجهود عمان</button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}><Target size={20}/> الاختبار</button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-amber-800">الموارد الطبيعية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-5xl mx-auto py-10 px-6 md:px-10">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default NaturalResourcesLesson;
