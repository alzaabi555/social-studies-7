import React, { useState } from 'react';
import { SIXTH_POPULATION_SECTIONS, SIXTH_POPULATION_QUIZ } from '../../constants';
import { Section } from '../../types';
import { Menu, ArrowRight, Target, Users, Database, Image as ImageIcon } from 'lucide-react';
import SectionQuiz from '../SectionQuiz';
import PopSources from './population/PopSources';
import CensusJourney from './population/CensusJourney';

interface Props {
    onBack: () => void;
}

const PopulationDataLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const IntroSection = () => (
      <div className="p-6 animate-fade-in space-y-8">
          <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Target size={24}/> أهداف الدرس:
              </h3>
              <ul className="grid gap-3 text-blue-800 font-medium">
                  <li>1. التعرف على مصادر البيانات السكانية (الأولية والثانوية).</li>
                  <li>2. تتبع تطور التعداد السكاني في سلطنة عمان.</li>
                  <li>3. استنتاج أهمية دراسة السكان للتخطيط والتنمية.</li>
              </ul>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-blue-100">
              <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                  <Users size={48} className="text-blue-600" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-4">ما البيانات التي تريد معرفتها؟ 🤔</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  تخيل أنك تريد معرفة عدد الطلاب في مدرستك، أو عدد السكان في ولايتك.. كيف نحصل على هذه المعلومات؟ 
                  <br/>
                  هذا ما تقوم به الدولة من خلال "البيانات السكانية".
              </p>
          </div>
      </div>
  );

  const ImportanceSection = () => (
      <div className="p-6 animate-fade-in space-y-6">
          <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-slate-800 mb-2">أهمية دراسة السكان (صفحة 23)</h2>
              <p className="text-slate-500">تحرص الدول على توفير قاعدة بيانات سكانية لما لها من أهمية كبيرة:</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-2xl border border-green-200 text-center hover:scale-105 transition-transform">
                  <div className="text-4xl mb-3">🏥</div>
                  <h3 className="font-bold text-green-900 mb-2">1. توفير الخدمات الأساسية</h3>
                  <p className="text-green-800 text-sm">معرفة عدد السكان تساعد الدولة في توفير الخدمات للسكان (كالصحة والتعليم).</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200 text-center hover:scale-105 transition-transform">
                  <div className="text-4xl mb-3">🏗️</div>
                  <h3 className="font-bold text-orange-900 mb-2">2. إنشاء المشاريع</h3>
                  <p className="text-orange-800 text-sm">تساعد البيانات في تحديد أماكن إقامة المشاريع في القطاعات المختلفة.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200 text-center hover:scale-105 transition-transform">
                  <div className="text-4xl mb-3">📅</div>
                  <h3 className="font-bold text-purple-900 mb-2">3. وضع الخطط المستقبلية</h3>
                  <p className="text-purple-800 text-sm">التخطيط للمستقبل وتوفير الاحتياجات للأجيال القادمة.</p>
              </div>
          </div>
          
          <div className="mt-8 bg-slate-800 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                  <h4 className="font-bold text-yellow-400 mb-2">إضاءات سلطانية</h4>
                  <p className="italic text-lg leading-relaxed">
                      "لقد تجلت الجهود الوطنية... في استمرار مسيرة تطوير قطاعات الصحة والتعليم والخدمات... وحرصنا على تنفيذها وتقديمها وفقاً لإستراتيجيات وخطط مدروسة وواقعية تأخذ هذه العوامل في الحسبان..."
                  </p>
                  <p className="text-right text-sm mt-2 font-bold">- من خطاب السلطان هيثم بن طارق (2023م)</p>
              </div>
          </div>
      </div>
  );

  const SummarySection = () => (
      <div className="p-6 animate-fade-in space-y-6">
          <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-slate-800 mb-2">ملخص شامل للدرس</h2>
              <p className="text-slate-500">مصادر البيانات السكانية وأهميتها في نظرة واحدة</p>
          </div>
          
          <div className="bg-white p-4 rounded-3xl shadow-xl border-2 border-slate-100 overflow-hidden relative group">
              <img 
                  src="/lesson_summary.jpg" 
                  alt="إنفوجرافيك ملخص درس البيانات السكانية" 
                  className="w-full h-auto object-contain rounded-xl"
                  onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '<div class="p-20 text-center text-slate-400 flex flex-col items-center"><span class="text-6xl mb-4">📊</span><p class="text-lg">يرجى إضافة صورة <code>lesson_summary.jpg</code> في مجلد public</p></div>';
                  }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none rounded-xl"></div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="/lesson_summary.jpg" download className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800">
                      <ImageIcon size={16} /> تحميل الملخص
                  </a>
              </div>
          </div>
      </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case Section.INTRO: return <IntroSection />;
      case Section.POP_SOURCES: return <PopSources />;
      case Section.CENSUS_EVOLUTION: return <CensusJourney />;
      case Section.POP_IMPORTANCE: return <ImportanceSection />;
      case Section.SUMMARY: return <SummarySection />; 
      case Section.QUIZ: return <SectionQuiz questions={SIXTH_POPULATION_QUIZ} />;
      default: return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-blue-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-blue-100 flex flex-col`}>
        <div className="p-4 border-b border-blue-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-blue-700 px-2">البيانات السكانية 📊</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {SIXTH_POPULATION_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === section.id ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-xl">{section.icon}</span>
              {section.label}
            </button>
          ))}
          
          {/* New Summary Button */}
          <button
              onClick={() => { setActiveSection(Section.SUMMARY); setMobileMenuOpen(false); }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${activeSection === Section.SUMMARY ? 'bg-blue-100 text-blue-800' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-xl"><ImageIcon /></span>
              ملخص الدرس (صور)
          </button>

        </nav>
      </aside>

      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-blue-800">البيانات السكانية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default PopulationDataLesson;