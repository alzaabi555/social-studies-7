
import React from 'react';
import { BookOpen, GraduationCap, School, Phone, User, ArrowLeft, Star, Library, Layers } from 'lucide-react';

interface WelcomeScreenProps {
  onSelectGrade: (grade: 6 | 7) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectGrade }) => {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden font-tajawal text-right flex flex-col justify-between" dir="rtl">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-emerald-600 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8 flex-1 flex flex-col items-center justify-center">
        
        {/* Header / Logo Area */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl mb-6 ring-4 ring-white/10">
            <Library size={64} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            الحقيبة التفاعلية
            <span className="block text-2xl md:text-3xl font-medium text-indigo-300 mt-2">للدراسات الاجتماعية</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            منصة تعليمية رقمية شاملة، صممت لتواكب التطور في المناهج الدراسية، 
            وتوفر تجربة تعلم نشطة وممتعة تعزز الفهم العميق للمفاهيم الجغرافية والتاريخية والوطنية.
          </p>
        </div>

        {/* Grade Selection Cards */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mb-16 animate-slide-up">
          
          {/* Grade 6 Card */}
          <button 
            onClick={() => onSelectGrade(6)}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all duration-300 text-right flex flex-col items-center hover:-translate-y-2"
          >
            <div className="absolute top-4 left-4 bg-white/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowLeft className="text-white" size={20} />
            </div>
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star size={40} />
            </div>
            <h2 className="text-3xl font-black text-white mb-2">الصف السادس</h2>
            <p className="text-slate-400 text-sm text-center">
              السكان، الحضارة الإسلامية (الأمويون)، والمجتمع المدني.
            </p>
          </button>

          {/* Grade 7 Card */}
          <button 
            onClick={() => onSelectGrade(7)}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 text-right flex flex-col items-center hover:-translate-y-2"
          >
            <div className="absolute top-4 left-4 bg-white/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowLeft className="text-white" size={20} />
            </div>
            <div className="w-20 h-20 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={40} />
            </div>
            <h2 className="text-3xl font-black text-white mb-2">الصف السابع</h2>
            <p className="text-slate-400 text-sm text-center">
              الطقس والمناخ، الدولة العباسية، ومؤسسات الدولة الحديثة.
            </p>
          </button>

        </div>
      </div>

      {/* Footer / Contact Info */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/5 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-300 text-sm">
            
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <User size={16} className="text-indigo-400" />
                    <span className="font-bold">إعداد: أ. محمد درويش الزعابي</span>
                </div>
                <div className="hidden md:block w-1 h-1 bg-slate-600 rounded-full"></div>
                <div className="flex items-center gap-2">
                    <School size={16} className="text-emerald-400" />
                    <span>مدرسة الإبداع للتعليم الأساسي</span>
                </div>
            </div>

            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Phone size={16} className="text-yellow-400" />
                <span className="font-mono dir-ltr">98344555</span> {/* Placeholder for phone number */}
            </div>

        </div>
      </footer>

    </div>
  );
};

export default WelcomeScreen;
