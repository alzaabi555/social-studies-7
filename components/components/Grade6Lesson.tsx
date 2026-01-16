import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Grade6LessonProps {
    onBack: () => void;
}

// This component is deprecated and no longer used in the application structure.
// It previously handled "Location" lessons which have been removed.
const Grade6Lesson: React.FC<Grade6LessonProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 font-tajawal">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-100 max-w-md mx-auto">
        <h1 className="text-2xl font-black text-slate-800 mb-4">المحتوى غير متوفر</h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
            عذراً، تم تحديث المنهج وإزالة درس "تحديد الموقع" من النسخة الحالية للتطبيق.
        </p>
        <button
          onClick={onBack}
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors w-full"
        >
           <ArrowRight size={20} />
           العودة للقائمة الرئيسية
        </button>
      </div>
    </div>
  );
};

export default Grade6Lesson;