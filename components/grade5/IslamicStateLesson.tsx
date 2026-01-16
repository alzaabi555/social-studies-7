
import React, { useState } from 'react';
import { FIFTH_ISLAMIC_STATE_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Map, Building2, Handshake, Scroll, Shield, Target, Menu, Users, Scale } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const FoundationSection = () => (
    <div className="p-6 text-center space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-emerald-800">الهجرة وتأسيس العاصمة</h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-emerald-100 relative overflow-hidden">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
                هاجر الرسول ﷺ من مكة المكرمة إلى <strong>يثرب</strong> (المدينة المنورة).
            </p>
            <div className="bg-emerald-50 inline-block p-4 rounded-xl font-bold text-emerald-900 border border-emerald-200">
                أصبحت المدينة المنورة عاصمة الدولة الإسلامية الأولى ومنطلقاً لنشر الدعوة.
            </div>
        </div>
    </div>
);

const MosqueSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-emerald-800 text-center">أهمية المسجد النبوي</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-emerald-500">
                <h3 className="font-bold text-lg mb-2">1. مركز للعبادة</h3>
                <p className="text-slate-600">إقامة الصلوات والشعائر الدينية.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-emerald-500">
                <h3 className="font-bold text-lg mb-2">2. مقر للحكم</h3>
                <p className="text-slate-600">إدارة شؤون الدولة واستقبال الوفود.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-emerald-500">
                <h3 className="font-bold text-lg mb-2">3. مدرسة للعلم</h3>
                <p className="text-slate-600">تعليم المسلمين أمور دينهم.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border-t-4 border-emerald-500">
                <h3 className="font-bold text-lg mb-2">4. مأوى (الصفة)</h3>
                <p className="text-slate-600">مكان لإقامة فقراء المسلمين.</p>
            </div>
        </div>
    </div>
);

const BrotherhoodSection = () => (
    <div className="p-6 space-y-6 animate-fade-in text-center">
        <h2 className="text-2xl font-black text-blue-800">المؤاخاة بين المهاجرين والأنصار</h2>
        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
                <Users size={48} className="mx-auto text-blue-600 mb-2"/>
                <h4 className="font-bold text-lg">المهاجرون</h4>
                <p className="text-xs text-slate-500">أهل مكة</p>
            </div>
            <div className="text-3xl text-blue-400">🤝</div>
            <div className="text-center">
                <Users size={48} className="mx-auto text-green-600 mb-2"/>
                <h4 className="font-bold text-lg">الأنصار</h4>
                <p className="text-xs text-slate-500">أهل المدينة</p>
            </div>
        </div>
        <p className="text-slate-600 max-w-xl mx-auto">
            آخى الرسول بينهم ليقيم مجتمعاً قوياً ومترابطاً، حيث قاسم الأنصار إخوانهم المهاجرين أموالهم وبيوتهم.
        </p>
    </div>
);

const ConstitutionSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-amber-800 text-center">وثيقة المدينة (الصحيفة)</h2>
        <div className="bg-amber-50 p-6 rounded-2xl border-l-8 border-amber-600 shadow-sm">
            <div className="flex items-start gap-4">
                <Scroll className="text-amber-800 mt-1 flex-shrink-0" size={32}/>
                <div>
                    <h3 className="font-bold text-lg text-amber-900 mb-2">دستور الدولة</h3>
                    <p className="text-slate-700 leading-relaxed">
                        كتب الرسول ﷺ وثيقة لتنظيم العلاقة بين جميع سكان المدينة (مسلمين ويهود وقبائل).
                    </p>
                    <ul className="list-disc list-inside mt-4 text-slate-800 font-medium">
                        <li>حرية العقيدة للجميع.</li>
                        <li>الدفاع المشترك عن المدينة.</li>
                        <li>العدل والمساواة في الحقوق والواجبات.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const DefenseSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-red-800 text-center">بناء الجيش وحماية الدولة</h2>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 text-center">
            <Shield size={64} className="mx-auto text-red-600 mb-4"/>
            <p className="text-slate-700 text-lg mb-6">
                أسس الرسول ﷺ جيشاً قوياً لحماية الدولة الناشئة من الأخطار الخارجية.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-red-50 text-red-800 px-4 py-2 rounded-lg font-bold border border-red-100">غزوة بدر</span>
                <span className="bg-red-50 text-red-800 px-4 py-2 rounded-lg font-bold border border-red-100">غزوة أحد</span>
                <span className="bg-red-50 text-red-800 px-4 py-2 rounded-lg font-bold border border-red-100">غزوة الخندق</span>
            </div>
        </div>
    </div>
);

const IslamicStateLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'foundation' | 'mosque' | 'brotherhood' | 'constitution' | 'defense' | 'quiz'>('foundation');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeTab) {
      case 'foundation': return <FoundationSection />;
      case 'mosque': return <MosqueSection />;
      case 'brotherhood': return <BrotherhoodSection />;
      case 'constitution': return <ConstitutionSection />;
      case 'defense': return <DefenseSection />;
      case 'quiz': return <SectionQuiz questions={FIFTH_ISLAMIC_STATE_QUIZ} />;
      default: return <FoundationSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-emerald-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-emerald-100 flex flex-col`}>
        <div className="p-4 border-b border-emerald-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 bg-slate-50 hover:bg-emerald-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-emerald-700 px-2">الدولة الإسلامية 🕌</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('foundation'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'foundation' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Map size={20}/> التأسيس (العاصمة)
          </button>
          <button onClick={() => {setActiveTab('mosque'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'mosque' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Building2 size={20}/> المسجد النبوي
          </button>
          <button onClick={() => {setActiveTab('brotherhood'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'brotherhood' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Handshake size={20}/> المؤاخاة
          </button>
          <button onClick={() => {setActiveTab('constitution'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'constitution' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Scroll size={20}/> الصحيفة
          </button>
          <button onClick={() => {setActiveTab('defense'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'defense' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Shield size={20}/> حماية الدولة
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Target size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-emerald-800">تأسيس الدولة</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default IslamicStateLesson;
