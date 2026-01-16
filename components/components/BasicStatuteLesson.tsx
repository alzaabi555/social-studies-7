
import React, { useState } from 'react';
import { BASIC_STATUTE_SECTIONS, BASIC_STATUTE_QUIZ_QUESTIONS } from '../constants';
import { Section } from '../types';
import { Menu, ArrowRight } from 'lucide-react';
import SectionQuiz from './SectionQuiz';
import StatuteIntro from './basic_statute/StatuteIntro';
import StatuteStructure from './basic_statute/StatuteStructure';
import StatutePillars from './basic_statute/StatutePillars';
import StatutePrinciples from './basic_statute/StatutePrinciples';
import StatuteRumors from './basic_statute/StatuteRumors';

interface BasicStatuteLessonProps {
    onBack: () => void;
}

const BasicStatuteLesson: React.FC<BasicStatuteLessonProps> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.STATUTE_INTRO);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case Section.STATUTE_INTRO: return <StatuteIntro />;
      case Section.STATUTE_STRUCTURE: return <StatuteStructure />;
      case Section.STATUTE_PILLARS: return <StatutePillars />;
      case Section.STATUTE_PRINCIPLES: return <StatutePrinciples />;
      case Section.STATUTE_RUMORS: return <StatuteRumors />;
      case Section.QUIZ: return <SectionQuiz questions={BASIC_STATUTE_QUIZ_QUESTIONS} />;
      default: return <StatuteIntro />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-teal-50 text-right font-tajawal">
      
      {/* Sidebar Navigation */}
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-teal-100 flex flex-col`}>
        <div className="p-4 border-b border-teal-100 pt-[max(1rem,env(safe-area-inset-top))]">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-teal-600 hover:bg-teal-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold"
          >
             <ArrowRight size={16} />
             العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-teal-800 px-2 leading-tight">النظام الأساسي للدولة 📜</h1>
        </div>
        
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {BASIC_STATUTE_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold ${
                activeSection === section.id 
                  ? 'bg-teal-100 text-teal-800' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-10 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10 pt-[max(1rem,env(safe-area-inset-top))]">
           <div className="flex items-center gap-3">
              <button onClick={onBack} className="p-2 bg-slate-100 rounded-full text-slate-600">
                  <ArrowRight size={20} />
              </button>
              <span className="font-bold text-lg text-teal-800">النظام الأساسي</span>
           </div>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700">
             <Menu />
           </button>
        </header>

        <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default BasicStatuteLesson;
