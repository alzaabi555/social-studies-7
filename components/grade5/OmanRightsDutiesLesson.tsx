
import React, { useState } from 'react';
import { FIFTH_RIGHTS_DUTIES_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, BookOpen, Heart, Shield, Star, Gavel, CheckCircle, Menu, User, Scale, Hand } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const ConceptsSection = () => (
    <div className="p-6 text-center space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-teal-800">المفاهيم الأساسية</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600"><Hand size={32}/></div>
                <h3 className="font-bold text-xl mb-2 text-blue-900">الحقوق</h3>
                <p className="text-slate-700">هي الأشياء التي يستحقها الفرد من الدولة والمجتمع (ما لك).</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><Scale size={32}/></div>
                <h3 className="font-bold text-xl mb-2 text-green-900">الواجبات</h3>
                <p className="text-slate-700">هي الالتزامات التي يجب على الفرد القيام بها تجاه وطنه ومجتمعه (ما عليك).</p>
            </div>
        </div>
        <p className="bg-teal-50 p-4 rounded-xl text-teal-900 font-bold border border-teal-200 inline-block">
            وثيقة "النظام الأساسي للدولة" هي المرجع الذي يحدد هذه الحقوق والواجبات.
        </p>
    </div>
);

const RightsSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-teal-800 text-center">حقوق المواطن العماني</h2>
        <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-blue-500 flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full text-blue-600"><BookOpen/></div>
                <span className="font-bold text-slate-700">حق التعليم المجاني</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-blue-500 flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full text-blue-600"><Heart/></div>
                <span className="font-bold text-slate-700">حق الرعاية الصحية</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-blue-500 flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full text-blue-600"><Shield/></div>
                <span className="font-bold text-slate-700">حق الأمن والأمان</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-blue-500 flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full text-blue-600"><User/></div>
                <span className="font-bold text-slate-700">حق المساواة والعدل</span>
            </div>
        </div>
    </div>
);

const DutiesSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-teal-800 text-center">واجبات المواطن</h2>
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-teal-100 flex flex-col gap-6">
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors cursor-default">
                <div className="bg-green-500 text-white p-2 rounded-full"><CheckCircle size={20}/></div>
                <span className="font-bold text-slate-700">الالتزام بالقوانين والأنظمة.</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors cursor-default">
                <div className="bg-green-500 text-white p-2 rounded-full"><CheckCircle size={20}/></div>
                <span className="font-bold text-slate-700">المحافظة على الممتلكات العامة والبيئة.</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors cursor-default">
                <div className="bg-green-500 text-white p-2 rounded-full"><CheckCircle size={20}/></div>
                <span className="font-bold text-slate-700">الدفاع عن الوطن وحماية مكتسباته.</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors cursor-default">
                <div className="bg-green-500 text-white p-2 rounded-full"><CheckCircle size={20}/></div>
                <span className="font-bold text-slate-700">احترام رموز الدولة (العلم، النشيد).</span>
            </div>
        </div>
    </div>
);

const ImportanceSection = () => (
    <div className="p-6 space-y-6 animate-fade-in text-center">
        <h2 className="text-2xl font-black text-teal-800">أهمية الالتزام</h2>
        <div className="bg-yellow-50 p-8 rounded-3xl border-2 border-yellow-200 shadow-sm relative overflow-hidden">
            <Star size={100} className="absolute -top-6 -left-6 text-yellow-300 opacity-50"/>
            <p className="text-xl font-bold text-yellow-900 leading-relaxed relative z-10">
                "قيام كل فرد بواجباته يضمن حصول الجميع على حقوقهم، ويعم النظام والرخاء في الوطن."
            </p>
        </div>
    </div>
);

const StorySection = () => (
    <div className="p-6 space-y-6 animate-fade-in text-center">
        <h2 className="text-2xl font-black text-teal-800">قصة العدالة</h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
            <Gavel size={48} className="mx-auto text-teal-600 mb-4"/>
            <p className="text-lg text-slate-700 leading-relaxed">
                العدل أساس الملك. في عمان، الجميع سواسية أمام القانون، لا فرق بين كبير وصغير.
                تضمن المحاكم إعطاء كل ذي حق حقه.
            </p>
        </div>
    </div>
);

const OmanRightsDutiesLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<'concepts' | 'rights' | 'duties' | 'importance' | 'story' | 'quiz'>('concepts');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'concepts': return <ConceptsSection />;
      case 'rights': return <RightsSection />;
      case 'duties': return <DutiesSection />;
      case 'importance': return <ImportanceSection />;
      case 'story': return <StorySection />;
      case 'quiz': return <SectionQuiz questions={FIFTH_RIGHTS_DUTIES_QUIZ} />;
      default: return <ConceptsSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-teal-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-teal-100 flex flex-col`}>
        <div className="p-4 border-b border-teal-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-teal-600 bg-slate-50 hover:bg-teal-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-teal-700 px-2">الحقوق والواجبات ⚖️</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveSection('concepts'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'concepts' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <BookOpen size={20}/> المفاهيم والنظام
          </button>
          <button onClick={() => {setActiveSection('rights'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'rights' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Heart size={20}/> الحقوق (أمثلة)
          </button>
          <button onClick={() => {setActiveSection('duties'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'duties' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Shield size={20}/> الواجبات (تفاعلي)
          </button>
          <button onClick={() => {setActiveSection('importance'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'importance' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> الأهمية والمناقشة
          </button>
          <button onClick={() => {setActiveSection('story'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'story' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Gavel size={20}/> قصة العدالة
          </button>
          <button onClick={() => {setActiveSection('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeSection === 'quiz' ? 'bg-teal-100 text-teal-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle size={20}/> الاختبار
          </button>
        </nav>
      </aside>

      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-teal-800">الحقوق والواجبات</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default OmanRightsDutiesLesson;
