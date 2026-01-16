
import React, { useState, useEffect } from 'react';
import { UNITS, UNITS_SIXTH } from '../constants';
import { Lock, ChevronLeft, Briefcase, History, PlayCircle, UserCog, Save, LogOut, Sparkles, BookOpen } from 'lucide-react';
import { LessonId, Lesson } from '../types';

interface CourseIndexProps {
  onSelectLesson: (id: LessonId) => void;
  selectedGrade: 6 | 7;
  onGoBack: () => void;
}

const CourseIndex: React.FC<CourseIndexProps> = ({ onSelectLesson, selectedGrade, onGoBack }) => {
  const [greeting, setGreeting] = useState('');
  
  // --- State for Teacher Data & Progress ---
  const [teacherName, setTeacherName] = useState('أ. محمد درويش');
  const [schoolName, setSchoolName] = useState('مدرسة الإبداع للتعليم الأساسي');
  const [lastLessonId, setLastLessonId] = useState<string | null>(null);

  // States for dropdowns
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Load saved data
  useEffect(() => {
    const savedName = localStorage.getItem('teacherName');
    const savedSchool = localStorage.getItem('schoolName');
    const savedLastLesson = localStorage.getItem('lastLessonId');

    if (savedName) setTeacherName(savedName);
    if (savedSchool) setSchoolName(savedSchool);
    if (savedLastLesson) setLastLessonId(savedLastLesson);
    
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('صباح الخير');
    else if (hour < 18) setGreeting('مساء الخير');
    else setGreeting('مساؤك سعيد');
  }, []);

  // Determine which units to show based on PROPS (not internal state)
  const currentUnits = selectedGrade === 6 ? UNITS_SIXTH : UNITS;

  const getLastLessonDetails = (): Lesson | null => {
      if (!lastLessonId) return null;
      const allUnits = [...UNITS, ...UNITS_SIXTH];
      for (const unit of allUnits) {
          const lesson = unit.lessons.find(l => l.id === lastLessonId);
          if (lesson) return lesson;
      }
      return null;
  };

  const lastLesson = getLastLessonDetails();

  const handleLessonSelect = (id: LessonId) => {
      if (id) {
          localStorage.setItem('lastLessonId', id);
          setLastLessonId(id);
      }
      onSelectLesson(id);
  };

  const handleSaveProfile = () => {
      localStorage.setItem('teacherName', teacherName);
      localStorage.setItem('schoolName', schoolName);
      setShowProfile(false);
  };

  const totalLessons = currentUnits.reduce((acc, unit) => acc + unit.lessons.length, 0);
  const totalUnits = currentUnits.length;

  return (
    <div className="min-h-screen bg-slate-50 text-right font-tajawal pb-20 select-none" dir="rtl">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 md:px-6 shadow-sm pt-[max(1rem,env(safe-area-inset-top))] pb-3 transition-all duration-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
            <div className="flex items-center gap-3">
                <button 
                    onClick={onGoBack}
                    className="w-10 h-10 bg-slate-100 hover:bg-red-50 hover:text-red-600 rounded-xl flex items-center justify-center text-slate-600 transition-colors"
                    title="خروج للقائمة الرئيسية"
                >
                    <LogOut size={20} className="transform rotate-180" />
                </button>
                <div>
                    <h1 className="text-lg md:text-xl font-black text-slate-800 leading-none mb-1">الحقيبة التفاعلية</h1>
                    <div className="flex items-center gap-2">
                        <span className={`text-[10px] md:text-xs font-bold px-2 py-0.5 rounded border ${selectedGrade === 6 ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-purple-50 text-purple-700 border-purple-100'}`}>
                            {selectedGrade === 6 ? 'الصف السادس' : 'الصف السابع'}
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="flex gap-2 md:gap-4 items-center">
                {/* Resume Bell */}
                <div className="relative">
                    <button 
                        onClick={() => { setShowResumeMenu(!showResumeMenu); setShowProfile(false); }}
                        className={`p-2 md:p-2.5 rounded-full transition-all relative ${showResumeMenu ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-slate-100 text-slate-600'}`}
                        title="أين توقفت؟"
                    >
                        <History size={22} />
                        {lastLesson && <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>}
                    </button>

                    {showResumeMenu && (
                        <div className="absolute top-14 left-0 w-72 md:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-fade-in z-50 origin-top-left">
                            <div className="p-4 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
                                <h3 className="font-bold text-slate-800 flex items-center gap-2"><History size={18}/> استكمال الشرح</h3>
                            </div>
                            <div className="p-4">
                                {lastLesson ? (
                                    <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                                        <p className="text-xs text-indigo-600 font-bold mb-2">توقفت آخر مرة عند:</p>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{lastLesson.icon}</span>
                                            <div>
                                                <h4 className="font-black text-slate-800 text-sm">{lastLesson.title}</h4>
                                                <p className="text-xs text-slate-500">{lastLesson.subtitle}</p>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => handleLessonSelect(lastLesson.id as LessonId)}
                                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg"
                                        >
                                            <PlayCircle size={16} /> متابعة الدرس
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-slate-400">
                                        <History size={32} className="mx-auto mb-2 opacity-50"/>
                                        <p className="text-sm">لم تبدأ أي درس بعد</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile */}
                <div className="relative">
                    <button 
                        onClick={() => { setShowProfile(!showProfile); setShowResumeMenu(false); }}
                        className={`flex items-center gap-2 md:gap-3 p-1 pr-3 md:pr-4 pl-1 rounded-full border transition-all ${showProfile ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-slate-200 hover:border-indigo-200'}`}
                    >
                        <div className="text-left hidden md:block">
                            <span className="block text-xs font-bold text-slate-800">{teacherName}</span>
                            <span className="block text-[10px] text-slate-500 truncate max-w-[100px]">{schoolName}</span>
                        </div>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 border-2 border-white shadow-sm">
                            <UserCog size={18} />
                        </div>
                    </button>

                    {showProfile && (
                        <div className="absolute top-14 left-0 w-72 md:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-fade-in z-50 origin-top-left">
                            <div className="p-4 border-b border-slate-50 bg-slate-50/50">
                                <h3 className="font-bold text-slate-800 flex items-center gap-2"><UserCog size={18}/> بيانات المعلم</h3>
                            </div>
                            <div className="p-4 space-y-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 mb-1 block">الاسم</label>
                                    <input 
                                        type="text" 
                                        value={teacherName}
                                        onChange={(e) => setTeacherName(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 mb-1 block">المدرسة</label>
                                    <input 
                                        type="text" 
                                        value={schoolName}
                                        onChange={(e) => setSchoolName(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>
                                <button 
                                    onClick={handleSaveProfile}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                                >
                                    <Save size={16} /> حفظ البيانات
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className={`relative bg-gradient-to-b text-white py-10 px-6 overflow-hidden shadow-2xl ${selectedGrade === 6 ? 'from-emerald-900 via-emerald-800 to-emerald-900' : 'from-indigo-900 via-indigo-800 to-indigo-900'}`}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>

          <div className="max-w-6xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div>
                      <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-xs font-bold text-white mb-4 shadow-sm animate-fade-in flex items-center gap-2">
                          <Sparkles size={14} className="text-yellow-300"/> {greeting} يا أستاذ {teacherName.split(' ')[1] || teacherName}
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                          مادة الدراسات الاجتماعية <br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                              {selectedGrade === 6 ? 'للصف السادس' : 'للصف السابع'}
                          </span>
                      </h2>
                      <div className="flex flex-wrap gap-3 mt-2 text-white/80 text-sm font-medium">
                          <span className="bg-white/10 px-3 py-1 rounded-lg flex items-center gap-2 border border-white/10"><Briefcase size={16}/> الفصل الدراسي الثاني</span>
                      </div>
                  </div>

                  <div className="flex flex-col gap-4 w-full md:w-auto">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex gap-8 shadow-xl hover:bg-white/20 transition-colors cursor-default justify-center">
                          <div className="text-center">
                              <div className="text-3xl font-black text-white">{totalUnits}</div>
                              <div className="text-xs text-white/70 font-bold uppercase tracking-wider mt-1">وحدات</div>
                          </div>
                          <div className="w-px bg-white/20"></div>
                          <div className="text-center">
                              <div className="text-3xl font-black text-white">{totalLessons}</div>
                              <div className="text-xs text-white/70 font-bold uppercase tracking-wider mt-1">دروس</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-10 -mt-8 relative z-20">
          
          {/* Units */}
          <div className="space-y-12">
              {currentUnits.length > 0 ? currentUnits.map((unit) => (
                  <section key={unit.id} className="animate-slide-up">
                      <div className="flex items-center gap-4 mb-6">
                          <div className={`h-10 w-2 rounded-full shadow-sm ${selectedGrade === 6 ? 'bg-emerald-600' : 'bg-indigo-600'}`}></div>
                          <div>
                              <h3 className="text-2xl font-black text-slate-800">{unit.title}</h3>
                              <p className="text-slate-500 text-sm mt-1">{unit.description}</p>
                          </div>
                      </div>

                      {/* Horizontal List Layout */}
                      <div className="grid grid-cols-1 gap-4">
                          {unit.lessons.map((lesson) => (
                              <div 
                                  key={lesson.id}
                                  onClick={() => lesson.available && handleLessonSelect(lesson.id as LessonId)}
                                  className={`group relative bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-center hover:border-indigo-300 ${
                                      lesson.available 
                                          ? 'cursor-pointer hover:shadow-lg hover:-translate-y-1' 
                                          : 'opacity-60 cursor-not-allowed border-slate-100 grayscale-[0.5]'
                                  }`}
                              >
                                  {/* Icon Area */}
                                  <div className={`w-full md:w-32 h-32 md:h-auto self-stretch flex items-center justify-center text-5xl ${lesson.color} group-hover:brightness-95 transition-all`}>
                                      {lesson.icon}
                                      {!lesson.available && (
                                          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex items-center justify-center">
                                              <Lock className="text-slate-600" size={24} />
                                          </div>
                                      )}
                                  </div>

                                  {/* Content */}
                                  <div className="flex-1 p-5 text-center md:text-right">
                                      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-2">
                                          <div>
                                              <span className={`text-[10px] font-extrabold uppercase tracking-wider ${lesson.textColor} bg-opacity-10 bg-current px-2 py-1 rounded-md mb-2 inline-block`}>
                                                  {lesson.subtitle}
                                              </span>
                                              <h4 className="text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                                                  {lesson.title}
                                              </h4>
                                          </div>
                                          
                                          {/* Last Visited Indicator */}
                                          {lastLessonId === lesson.id && (
                                              <span className="hidden md:flex bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full items-center gap-1 animate-pulse">
                                                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> آخر زيارة
                                              </span>
                                          )}
                                      </div>
                                      
                                      <p className="text-slate-500 text-sm leading-relaxed mb-4 md:mb-0 max-w-2xl">
                                          {lesson.description}
                                      </p>
                                  </div>

                                  {/* Action Arrow */}
                                  <div className="p-5 border-t md:border-t-0 md:border-r border-slate-100 flex items-center justify-center w-full md:w-auto bg-slate-50 md:bg-transparent">
                                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                          lesson.available 
                                              ? 'bg-white border border-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white shadow-sm' 
                                              : 'bg-slate-100 text-slate-300'
                                      }`}>
                                          <ChevronLeft size={20} className={lesson.available ? 'group-hover:-translate-x-1 transition-transform' : ''} />
                                      </div>
                                      <span className="md:hidden mr-2 font-bold text-sm text-slate-600">
                                          {lesson.available ? 'فتح الدرس' : 'مغلق'}
                                      </span>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </section>
              )) : (
                  <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                      <BookOpen size={48} className="mx-auto text-slate-300 mb-4"/>
                      <p className="text-slate-400 text-xl font-bold">لا توجد وحدات متاحة لهذا الصف حالياً.</p>
                  </div>
              )}
          </div>
      </main>
    </div>
  );
};

export default CourseIndex;
