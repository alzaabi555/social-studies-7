
import React, { useState } from 'react';
import { FIFTH_OMAN_PROPHET_QUIZ } from '../../constants';
import SectionQuiz from '../SectionQuiz';
import { ArrowRight, Star, Mail, Users, MapPin, CheckCircle, Menu, User, MessageCircle } from 'lucide-react';

interface Props {
    onBack: () => void;
}

const MazinSection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-amber-800 text-center">أول من أسلم من أهل عمان</h2>
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-amber-100 text-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={40} className="text-amber-600"/>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">مازن بن غضوبة</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
                سافر من سمائل إلى المدينة المنورة ليلتقي بالرسول ﷺ ويعلن إسلامه. 
                دعا له الرسول ﷺ ولأهل عمان بالخير والبركة.
            </p>
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                <p className="font-bold text-amber-900 text-sm">"اللهم اهدهم، واثبتهم..."</p>
            </div>
        </div>
    </div>
);

const LetterSection = () => (
    <div className="p-6 space-y-6 animate-fade-in text-center">
        <h2 className="text-2xl font-black text-blue-800">رسالة النبي ﷺ إلى أهل عمان</h2>
        <div className="bg-blue-50 p-8 rounded-3xl border-2 border-blue-200 shadow-sm relative">
            <Mail size={48} className="mx-auto text-blue-500 mb-4"/>
            <p className="text-lg text-slate-700 font-medium mb-4">
                أرسل النبي ﷺ الصحابي <strong>عمرو بن العاص</strong> برسالة إلى ملكي عمان (عبد وجيفر ابني الجلندى) يدعوهما للإسلام.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-inner text-slate-600 italic">
                "بسم الله الرحمن الرحيم، من محمد رسول الله إلى جيفر وعبد ابني الجلندى..."
            </div>
            <p className="mt-4 text-green-700 font-bold">النتيجة: استجابا للدعوة وأسلما وأسلم أهل عمان طواعية.</p>
        </div>
    </div>
);

const SocietySection = () => (
    <div className="p-6 space-y-6 animate-fade-in">
        <h2 className="text-2xl font-black text-teal-800 text-center">ملامح المجتمع العماني</h2>
        <div className="grid gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-teal-500 flex items-center gap-4">
                <div className="bg-teal-50 p-3 rounded-full"><Users className="text-teal-600"/></div>
                <div>
                    <h3 className="font-bold text-slate-800">الشورى</h3>
                    <p className="text-sm text-slate-600">تشاور عبد وجيفر مع زعماء القبائل قبل اتخاذ قرار الإسلام.</p>
                </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border-r-4 border-teal-500 flex items-center gap-4">
                <div className="bg-teal-50 p-3 rounded-full"><MessageCircle className="text-teal-600"/></div>
                <div>
                    <h3 className="font-bold text-slate-800">حب الخير</h3>
                    <p className="text-sm text-slate-600">المسارعة في الدخول في الإسلام طواعية دون حرب.</p>
                </div>
            </div>
        </div>
    </div>
);

const CitiesSection = () => (
    <div className="p-6 space-y-6 animate-fade-in text-center">
        <h2 className="text-2xl font-black text-indigo-800">مدن وشخصيات تاريخية</h2>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-indigo-100">
                <MapPin className="mx-auto text-indigo-500 mb-2"/>
                <h3 className="font-bold text-lg text-slate-800">صحار</h3>
                <p className="text-sm text-slate-500">عاصمة عمان في ذلك الوقت، ومقر الحكم.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-indigo-100">
                <MapPin className="mx-auto text-indigo-500 mb-2"/>
                <h3 className="font-bold text-lg text-slate-800">سمائل</h3>
                <p className="text-sm text-slate-500">موطن مازن بن غضوبة، وفيها بُني أول مسجد في عمان (مسجد المضمار).</p>
            </div>
        </div>
    </div>
);

const OmanProphetEraLesson: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'mazin' | 'letter' | 'society' | 'cities' | 'quiz'>('mazin');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeTab) {
      case 'mazin': return <MazinSection />;
      case 'letter': return <LetterSection />;
      case 'society': return <SocietySection />;
      case 'cities': return <CitiesSection />;
      case 'quiz': return <SectionQuiz questions={FIFTH_OMAN_PROPHET_QUIZ} />;
      default: return <MazinSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-amber-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-amber-100 flex flex-col`}>
        <div className="p-4 border-b border-amber-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-amber-600 bg-slate-50 hover:bg-amber-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-amber-700 px-2">عُمان والرسالة 📜</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <button onClick={() => {setActiveTab('mazin'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'mazin' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Star size={20}/> قصة مازن
          </button>
          <button onClick={() => {setActiveTab('letter'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'letter' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Mail size={20}/> رسالة النبي
          </button>
          <button onClick={() => {setActiveTab('society'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'society' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <Users size={20}/> جوانب الحضارة
          </button>
          <button onClick={() => {setActiveTab('cities'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'cities' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <MapPin size={20}/> المدن والشخصيات
          </button>
          <button onClick={() => {setActiveTab('quiz'); setMobileMenuOpen(false);}} className={`w-full text-right p-4 rounded-xl flex items-center gap-3 font-bold text-base transition-all ${activeTab === 'quiz' ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-50'}`}>
              <CheckCircle size={20}/> الاختبار
          </button>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-amber-800">عمان في عهد الرسول</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default OmanProphetEraLesson;
