
import React, { useState } from 'react';
import { FIFTH_INSTITUTIONS_CONVENTIONS_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Target, Building2, Users, Baby, Heart, CheckCircle, Menu, Eye, ShieldCheck, Globe, Calendar } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const IntroSection = () => (
    <div className="p-6 text-center space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-cyan-800">الحقوق والمؤسسات</h2>
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-cyan-100">
            <Target size={48} className="mx-auto text-cyan-500 mb-4"/>
            <p className="text-lg text-slate-700 leading-relaxed">
                لم تكتفِ السلطنة بوضع القوانين، بل أنشأت <strong>مؤسسات</strong> وهيئات متخصصة لضمان حصول كل مواطن (رجل، امرأة، طفل) على حقوقه، وانضمت لاتفاقيات دولية.
            </p>
        </div>
    </div>
);

const InstitutionsSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-cyan-800 text-center">المؤسسات الوطنية</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cyan-50 p-6 rounded-2xl border-2 border-cyan-200">
                <div className="flex items-center gap-3 mb-3 text-cyan-900">
                    <Eye size={28}/> <h3 className="font-bold text-lg">اللجنة العمانية لحقوق الإنسان</h3>
                </div>
                <p className="text-sm text-slate-700">
                    جهة وطنية مستقلة تراقب وتحمي حقوق الإنسان في السلطنة، وتتلقى الشكاوى.
                </p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-2xl border-2 border-cyan-200">
                <div className="flex items-center gap-3 mb-3 text-cyan-900">
                    <Building2 size={28}/> <h3 className="font-bold text-lg">وزارة التنمية الاجتماعية</h3>
                </div>
                <p className="text-sm text-slate-700">
                    تقدم الرعاية للفئات الخاصة (الأيتام، ذوي الإعاقة، الأسر المحتاجة).
                </p>
            </div>
        </div>
    </div>
);

const HumanRightsSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-indigo-800 text-center">حقوق الإنسان العالمية</h2>
        <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-200 text-center">
            <Globe size={48} className="mx-auto text-indigo-600 mb-4"/>
            <p className="text-slate-700 mb-4 text-lg font-medium">
                انضمت السلطنة للعديد من الاتفاقيات الدولية التي تحمي كرامة الإنسان وتمنع التمييز.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white px-4 py-1 rounded-full text-indigo-800 shadow">حق الحياة</span>
                <span className="bg-white px-4 py-1 rounded-full text-indigo-800 shadow">حق الحرية</span>
                <span className="bg-white px-4 py-1 rounded-full text-indigo-800 shadow">حق الكرامة</span>
            </div>
        </div>
    </div>
);

const ChildRightsSection = () => (
    <div className="p-6 space-y-6 animate-fade-in text-center">
        <h2 className="text-2xl font-black text-blue-800">حقوق الطفل</h2>
        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200 shadow-sm relative overflow-hidden">
            <Baby size={64} className="mx-auto text-blue-400 mb-4"/>
            <h3 className="text-xl font-bold text-blue-900 mb-2">اتفاقية حقوق الطفل</h3>
            <p className="text-slate-600 mb-4">
                انضمت السلطنة للاتفاقية عام <strong>1996م</strong>، وأصدرت قانون الطفل العماني لضمان:
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm font-bold text-blue-800">
                <div className="bg-white p-2 rounded-lg">التعليم والصحة</div>
                <div className="bg-white p-2 rounded-lg">الحماية من العنف</div>
                <div className="bg-white p-2 rounded-lg">اللعب والترفيه</div>
                <div className="bg-white p-2 rounded-lg">الهوية والجنسية</div>
            </div>
        </div>
    </div>
);

const WomenRightsSection = () => (
    <div className="p-6 space-y-6 animate-fade-in text-center">
        <h2 className="text-2xl font-black text-pink-800">حقوق المرأة</h2>
        <div className="bg-pink-50 p-8 rounded-3xl border border-pink-200 shadow-sm">
            <Heart size={64} className="mx-auto text-pink-500 mb-4"/>
            <h3 className="text-xl font-bold text-pink-900 mb-2">اتفاقية (سيداو)</h3>
            <p className="text-slate-600 mb-6">
                تعني القضاء على جميع أشكال التمييز ضد المرأة. كفلت السلطنة للمرأة حقوقها في التعليم والعمل والمشاركة السياسية.
            </p>
            <div className="bg-white p-4 rounded-xl inline-flex items-center gap-3 shadow-sm border border-pink-100">
                <Calendar className="text-pink-600"/>
                <div className="text-right">
                    <span className="block font-bold text-pink-900">يوم المرأة العمانية</span>
                    <span className="text-sm text-pink-700">17 أكتوبر من كل عام</span>
                </div>
            </div>
        </div>
    </div>
);

const OmanInstitutionsLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<'intro' | 'institutions' | 'human_rights' | 'child_rights' | 'women_rights' | 'quiz'>('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'intro': return <IntroSection />;
      case 'institutions': return <InstitutionsSection />;
      case 'human_rights': return <HumanRightsSection />;
      case 'child_rights': return <ChildRightsSection />;
      case 'women_rights': return <WomenRightsSection />;
      case 'quiz': return <SectionQuiz questions={FIFTH_INSTITUTIONS_CONVENTIONS_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-cyan-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-cyan-100 flex flex-col`}>
        <div className="p-4 border-b border-cyan-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 bg-slate-50 hover:bg-cyan-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-cyan-700 px-2">الحقوق والمؤسسات 🏛️</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveSection('intro'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'intro' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Target size={20}/> المقدمة والأهداف
          </button>
          <button onClick={() => {setActiveSection('institutions'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'institutions' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Building2 size={20}/> المؤسسات الوطنية
          </button>
          <button onClick={() => {setActiveSection('human_rights'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'human_rights' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Users size={20}/> حقوق الإنسان
          </button>
          <button onClick={() => {setActiveSection('child_rights'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'child_rights' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Baby size={20}/> حقوق الطفل
          </button>
          <button onClick={() => {setActiveSection('women_rights'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'women_rights' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Heart size={20}/> حقوق المرأة
          </button>
          <button onClick={() => {setActiveSection('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'quiz' ? 'bg-cyan-100 text-cyan-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-cyan-800">المؤسسات والاتفاقيات</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default OmanInstitutionsLesson;
