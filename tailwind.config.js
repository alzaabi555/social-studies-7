/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",                // للملفات في الجذر
    "./components/**/*.{js,ts,jsx,tsx}",  // لمجلد المكونات
    "./data/**/*.{js,ts,jsx,tsx}",        // لمجلد البيانات
  ],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
      // أزلنا كل الألوان والأنيميشن المخصصة لنعود للوضع الافتراضي
    },
  },
  plugins: [],
}