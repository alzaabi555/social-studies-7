
import React, { useState } from 'react';
import { FIFTH_OMAN_PERSONALITIES_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Key, Users, MessageCircle, Star, Check, Menu, Book, Crown, Feather } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const PuzzleSection = () => (
    <div className="p-6 text-center space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-indigo-800">لغز الشخصية</h2>
        <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-200">
            <Key size={48} className="mx-auto text-indigo-500 mb-4 animate-pulse"/>
            <p className="text-lg text-slate-700 font-bold mb-4">"عالم لغوي عماني، ولد في ودام، أسس علم العروض، وله كتاب العين. من هو؟"</p>
            <div className="bg-white px-6 py-2 rounded-full inline-block shadow-sm text-indigo-800 font-black text-xl">
                الخليل بن أحمد الفراهيدي
            </div>
        </div>
    </div>
);

const ProfilesSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-indigo-800 text-center">شخصيات خالدة</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2"><Crown className="text-purple-600"/> <h3 className="font-bold text-lg">عبد وجيفر</h3></div>
                <p className="text-slate-600 text-sm">ملكا عمان اللذان استقبلا رسالة النبي ﷺ وأسلما، مما جنب عمان الحرب ووحد الكلمة.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2"><Feather className="text-blue-600"/> <h3 className="font-bold text-lg">كعب بن برشة الطاحي</h3></div>
                <p className="text-slate-600 text-sm">صحابي جليل من أهل عمان، وفد إلى النبي ﷺ وكان له دور في نشر الإسلام.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2"><Book className="text-green-600"/> <h3 className="font-bold text-lg">عبدالله بن وهب الراسبي</h3></div>
                <p className="text-slate-600 text-sm">من العلماء والقادة العمانيين الذين برزوا في صدر الإسلام.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
                <div className="flex items-center gap-2 mb-2"><Users className="text-orange-600"/> <h3 className="font-bold text-lg">بيرح بن أسد</h3></div>
                <p className="text-slate-600 text-sm">شخصية عمانية بارزة، كان له دور في الوفود العمانية للمدينة.</p>
            </div>
        </div>
    </div>
);

const SuwaidSection = () => (
    <div className="p-6 space-y-6 animate-fade-in text-center">
        <h2 className="text-2xl font-black text-indigo-800">قصة سويد</h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
            <MessageCircle size={48} className="mx-auto text-indigo-500 mb-4"/>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
                <strong>سويد بن صامت</strong> (أو شخصية مشابهة من السياق العماني في المنهج) كان يتصف بالحكمة والشجاعة.
                <br/>
                <span className="text-sm text-slate-500 block mt-2">(يرجى الرجوع للكتاب المدرسي للتفاصيل الدقيقة للقصة المقررة).</span>
            </p>
            <div className="bg-indigo-50 p-4 rounded-xl text-indigo-900 font-bold">
                القيم المستفادة: الحكمة، الصدق، حب الوطن.
            </div>
        </div>
    </div>
);

const ActivitySection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-indigo-800 text-center">أنشطة وقيم</h2>
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-3xl shadow-lg text-center">
            <Star size={40} className="mx-auto text-yellow-300 mb-4"/>
            <h3 className="text-xl font-bold mb-2">كن مثلهم!</h3>
            <p className="text-indigo-100">
                نقتدي بالشخصيات العمانية في:
            </p>
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
                <span className="bg-white/20 px-4 py-1 rounded-full border border-white/40">العلم</span>
                <span className="bg-white/20 px-4 py-1 rounded-full border border-white/40">التواضع</span>
                <span className="bg-white/20 px-4 py-1 rounded-full border border-white/40">خدمة المجتمع</span>
                <span className="bg-white/20 px-4 py-1 rounded-full border border-white/40">المبادرة</span>
            </div>
        </div>
    </div>
);

const OmanPersonalitiesLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'puzzle' | 'profiles' | 'suwaid' | 'activity' | 'quiz'>('puzzle');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeTab) {
      case 'puzzle': return <PuzzleSection />;
      case 'profiles': return <ProfilesSection />;
      case 'suwaid': return <SuwaidSection />;
      case 'activity': return <ActivitySection />;
      case 'quiz': return <SectionQuiz questions={FIFTH_OMAN_PERSONALITIES_QUIZ} />;
      default: return <PuzzleSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-indigo-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-indigo-100 flex flex-col`}>
        <div className="p-4 border-b border-indigo-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-indigo-700 px-2">شخصيات عمانية 👥</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('puzzle'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'puzzle' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Key size={20}/> لغز الدرس
          </button>
          <button onClick={() => {setActiveTab('profiles'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'profiles' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Users size={20}/> شخصيات خالدة
          </button>
          <button onClick={() => {setActiveTab('suwaid'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'suwaid' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <MessageCircle size={20}/> قصة سويد
          </button>
          <button onClick={() => {setActiveTab('activity'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'activity' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> أنشطة وقيم
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-indigo-100 text-indigo-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Check size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-indigo-800">شخصيات عمانية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default OmanPersonalitiesLesson;
