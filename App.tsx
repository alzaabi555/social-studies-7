
import React, { useState } from 'react';
import CourseIndex from './components/CourseIndex';
import WeatherLesson from './components/WeatherLesson';
import OmanClimateLesson from './components/OmanClimateLesson';
import EarthLesson from './components/EarthLesson';
import ExternalLesson from './components/ExternalLesson';
import AbbasidLesson from './components/AbbasidLesson';
import OmanAbbasidLesson from './components/OmanAbbasidLesson';
import OmanCivilizationLesson from './components/OmanCivilizationLesson';
import BasicStatuteLesson from './components/BasicStatuteLesson';
import StateInstitutionsLesson from './components/StateInstitutionsLesson';
import Unit1Assessment from './components/Unit1Assessment';
import Unit2Assessment from './components/Unit2Assessment';
import Unit3Assessment from './components/Unit3Assessment';
import FinalExam from './components/FinalExam';
import LiveVoiceTutor from './components/LiveVoiceTutor';
import { LessonId } from './types';
import { Bot } from 'lucide-react';

const App: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<LessonId>(null);
  const [showLiveTutor, setShowLiveTutor] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-50">
      {activeLesson === 'WEATHER' ? (
        <WeatherLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'OMAN_CLIMATE' ? (
        <OmanClimateLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'EARTH_LAYERS' ? (
        <EarthLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'EXTERNAL_PROCESSES' ? (
        <ExternalLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_1_ASSESSMENT' ? (
        <Unit1Assessment onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'ABBASID_ERA' ? (
        <AbbasidLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'OMAN_ABBASID' ? (
        <OmanAbbasidLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'OMAN_CIVILIZATION' ? (
        <OmanCivilizationLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_2_ASSESSMENT' ? (
        <Unit2Assessment onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'BASIC_STATUTE' ? (
        <BasicStatuteLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'STATE_INSTITUTIONS' ? (
        <StateInstitutionsLesson onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'UNIT_3_ASSESSMENT' ? (
        <Unit3Assessment onBack={() => setActiveLesson(null)} />
      ) : activeLesson === 'FINAL_EXAM' ? (
        <FinalExam onBack={() => setActiveLesson(null)} />
      ) : (
        <CourseIndex 
          onSelectLesson={(id) => setActiveLesson(id)} 
          onOpenLiveTutor={() => setShowLiveTutor(true)}
        />
      )}

      {/* زر المعلم الذكي العائم - يظهر في كل الصفحات */}
      <button
        onClick={() => setShowLiveTutor(true)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 border-4 border-white/20 group animate-slide-up"
        title="تحدث مع المعلم الذكي"
      >
        <div className="relative">
            <Bot size={32} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
        </div>
        <span className="font-bold hidden md:inline max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap pl-2">المعلم الذكي</span>
      </button>

      {/* نافذة المعلم الذكي */}
      {showLiveTutor && <LiveVoiceTutor onClose={() => setShowLiveTutor(false)} />}
    </div>
  );
};

export default App;
