import React, { useState } from 'react';
import { UMAYYAD_SECTIONS, UMAYYAD_QUIZ_QUESTIONS } from '../constants';
import { Section } from '../types';
import { Menu, ArrowRight, History, Swords, Building2, Skull, Search, Target, Map, BookOpen, Scale, Hammer, Coins, Globe, Users, User, Briefcase, Play, RefreshCw, Waves, Crown, Star, UserCheck, Sparkles, Mail } from 'lucide-react';
import SectionQuiz from './SectionQuiz';

interface Props {
    onBack: () => void;
}

const UmayyadStateLesson: React.FC<Props> = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.UMAYYAD_RISE);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- RISE SECTION ---
  const RiseSection = () => {
      const [showDiff, setShowDiff] = useState(false);
      const [activeCaliph, setActiveCaliph] = useState<number | null>(null);

      const caliphs = [
          { id: 1, name: 'معاوية بن أبي سفيان', title: 'المؤسس', desc: 'أسس الدولة، أنشأ الدواوين، واهتم بالأسطول البحري.', icon: <Crown size={28}/>, color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
          { id: 2, name: 'عبدالملك بن مروان', title: 'المؤسس الثاني', desc: 'عرب الدواوين، وسك أول عملة إسلامية، وبنى قبة الصخرة.', icon: <Coins size={28}/>, color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
          { id: 3, name: 'الوليد بن عبدالملك', title: 'العصر الذهبي', desc: 'وصلت الفتوحات لأقصى اتساع، وبنى الجامع الأموي.', icon: <Building2 size={28}/>, color: 'bg-blue-100 text-blue-800 border-blue-300' },
          { id: 4, name: 'عمر بن عبدالعزيز', title: 'خامس الراشدين', desc: 'تميز بالعدل والزهد، وأوقف الفتوحات لنشر الإسلام بالدعوة.', icon: <Scale size={28}/>, color: 'bg-purple-100 text-purple-800 border-purple-300' },
      ];
      
      return (
          <div className="p-6 animate-fade-in space-y-8">
              {/* Objectives */}
              <div className="bg-emerald-50 border-r-4 border-emerald-600 p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                      <Target size={24}/> أهداف الدرس:
                  </h3>
                  <ul className="grid gap-3 text-emerald-900 font-medium text-lg leading-relaxed">
                      <li className="flex items-center gap-2"><span className="text-emerald-600">•</span> توضيح قيام الدولة الأموية وتغير نظام الحكم.</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600">•</span> ذكر أبرز خلفاء بني أمية وإنجازاتهم.</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600">•</span> تتبع حركة الفتوحات الإسلامية.</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-600">•</span> تفسير أسباب نهاية الدولة الأموية.</li>
                  </ul>
              </div>

              {/* Establishment */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 text-center">
                  <h2 className="text-3xl font-black text-slate-800 mb-6">قيام الدولة الأموية (41هـ)</h2>
                  
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-8 bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div className="flex-1">
                          <h4 className="text-lg font-bold text-slate-600 mb-2">الخليفة الراشدي الرابع</h4>
                          <div className="text-xl font-black text-emerald-700 bg-white p-3 rounded-lg shadow-sm border border-emerald-100">علي بن أبي طالب (كرم الله وجهه)</div>
                      </div>
                      <div className="text-3xl text-slate-400 animate-pulse">⬅️</div>
                      <div className="flex-1">
                          <h4 className="text-lg font-bold text-slate-600 mb-2">مؤسس الدولة الأموية</h4>
                          <div className="text-xl font-black text-emerald-700 bg-white p-3 rounded-lg shadow-sm border border-emerald-100">معاوية بن أبي سفيان</div>
                      </div>
                  </div>

                  <button 
                    onClick={() => setShowDiff(!showDiff)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-3 px-6 rounded-full shadow-md transition-all transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                  >
                      <Scale size={20} /> 
                      {showDiff ? "إخفاء المقارنة" : "كيف تغير نظام الحكم؟ (اضغط للكشف)"}
                  </button>

                  {showDiff && (
                      <div className="mt-6 grid md:grid-cols-2 gap-4 animate-slide-up">
                          <div className="bg-slate-100 p-4 rounded-xl border border-slate-300">
                              <span className="block font-bold text-slate-500 text-base mb-1">العصر الراشدي</span>
                              <span className="text-2xl font-black text-slate-800">نظام الشورى</span>
                          </div>
                          <div className="bg-emerald-100 p-4 rounded-xl border border-emerald-300">
                              <span className="block font-bold text-emerald-700 text-base mb-1">العصر الأموي</span>
                              <span className="text-2xl font-black text-emerald-900">نظام الوراثة</span>
                              <p className="text-sm font-medium mt-1 text-emerald-700">(بدأ بولاية العهد ليزيد بن معاوية)</p>
                          </div>
                      </div>
                  )}
              </div>

              {/* Caliphs Gallery */}
              <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-800 text-center flex items-center justify-center gap-2">
                      <Star className="text-yellow-500 fill-yellow-500" size={24}/> أبرز خلفاء الدولة الأموية
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {caliphs.map((caliph) => (
                          <div 
                            key={caliph.id}
                            onClick={() => setActiveCaliph(activeCaliph === caliph.id ? null : caliph.id)}
                            className={`cursor-pointer rounded-2xl p-5 border-2 transition-all duration-300 ${activeCaliph === caliph.id ? `shadow-xl scale-[1.02] ${caliph.color}` : 'bg-white border-slate-200 hover:border-slate-300'}`}
                          >
                              <div className="flex items-center gap-3">
                                  <div className={`p-3 rounded-full ${activeCaliph === caliph.id ? 'bg-white/30' : 'bg-slate-100 text-slate-600'}`}>
                                      {caliph.icon}
                                  </div>
                                  <div>
                                      <h3 className="text-xl font-black">{caliph.name}</h3>
                                      <p className={`text-base font-bold ${activeCaliph === caliph.id ? 'opacity-90' : 'text-slate-500'}`}>{caliph.title}</p>
                                  </div>
                              </div>
                              {activeCaliph === caliph.id && (
                                  <div className="mt-3 pt-3 border-t border-black/10 animate-fade-in">
                                      <p className="text-lg font-medium leading-relaxed">{caliph.desc}</p>
                                  </div>
                              )}
                          </div>
                      ))}
                  </div>
              </div>

              {/* Research Activity */}
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 shadow-sm">
                  <h4 className="font-bold text-xl text-blue-900 mb-3 flex items-center gap-2"><Search size={24}/> نشاط بحثي (صفحة 58)</h4>
                  <p className="text-blue-800 text-lg font-medium mb-3">ابحث عن سبب الخلافات التي حدثت بين علي بن أبي طالب ومعاوية بن أبي سفيان.</p>
                  <textarea className="w-full p-3 rounded-xl border border-blue-300 text-lg h-24 focus:outline-none focus:border-blue-500" placeholder="اكتب إجابتك هنا..."></textarea>
              </div>
          </div>
      );
  };

  // --- CONQUESTS SECTION ---
  const ConquestsSection = () => {
      const [activeMapPoint, setActiveMapPoint] = useState<string | null>(null);

      return (
          <div className="p-6 animate-fade-in space-y-8">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">الفتوحات الإسلامية (دولـة الفتوحات)</h2>
                  <p className="text-lg text-slate-600">امتدت الدولة الأموية من الصين شرقاً إلى الأندلس غرباً</p>
              </div>

              {/* Qutaybah bin Muslim Profile */}
              <div className="bg-indigo-50 rounded-2xl p-6 shadow-sm border-r-4 border-indigo-600 flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-indigo-200 p-4 rounded-full text-indigo-700 flex-shrink-0">
                      <UserCheck size={40} />
                  </div>
                  <div>
                      <h3 className="text-xl font-black text-indigo-900 mb-2">شخصية من الدرس (صفحة 59)</h3>
                      <h4 className="text-2xl font-black text-indigo-700 mb-2">قتيبة بن مسلم الباهلي</h4>
                      <p className="text-lg text-indigo-800 font-medium leading-relaxed">
                          قائد عسكري فذ من قبيلة باهلة، قاد الفتوحات الإسلامية في المشرق، ونجح في فتح <strong>"بلاد ما وراء النهر"</strong> (آسيا الوسطى حالياً: بخارى، سمرقند) ونشر الإسلام فيها.
                      </p>
                  </div>
              </div>

              {/* Simulated Interactive Map */}
              <div className="relative w-full h-80 bg-blue-100 rounded-2xl overflow-hidden border-4 border-blue-300 shadow-xl group">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                  
                  {/* Map Points */}
                  <button 
                      onClick={() => setActiveMapPoint('east')}
                      className="absolute top-1/3 right-1/4 w-12 h-12 bg-emerald-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform z-10 animate-pulse"
                  >
                      شرقاً
                  </button>
                  <button 
                      onClick={() => setActiveMapPoint('west')}
                      className="absolute top-1/3 left-1/4 w-12 h-12 bg-orange-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform z-10 animate-pulse"
                  >
                      غرباً
                  </button>

                  <div className={`absolute bottom-0 w-full bg-white/95 backdrop-blur-md p-6 border-t-4 border-blue-300 transition-all duration-500 ${activeMapPoint ? 'translate-y-0' : 'translate-y-full'}`}>
                      {activeMapPoint === 'east' ? (
                          <div className="animate-slide-up text-center">
                              <h4 className="font-black text-emerald-900 text-2xl mb-1">الفتوحات في الشرق</h4>
                              <p className="text-emerald-800 text-lg mb-2 font-medium">وصلت الجيوش إلى بلاد السند (باكستان) وبلاد ما وراء النهر (وسط آسيا).</p>
                              <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full border border-emerald-200">
                                  <User size={20} className="text-emerald-700"/>
                                  <span className="text-base font-bold text-emerald-900">القائد: قتيبة بن مسلم الباهلي / محمد بن القاسم</span>
                              </div>
                          </div>
                      ) : activeMapPoint === 'west' ? (
                          <div className="animate-slide-up text-center">
                              <h4 className="font-black text-orange-900 text-2xl mb-1">الفتوحات في الغرب</h4>
                              <p className="text-orange-800 text-lg mb-2 font-medium">وصلت إلى المغرب العربي وعبرت إلى الأندلس (أوروبا).</p>
                              <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full border border-orange-200">
                                  <User size={20} className="text-orange-700"/>
                                  <span className="text-base font-bold text-orange-900">القادة: موسى بن نصير / طارق بن زياد</span>
                              </div>
                          </div>
                      ) : null}
                      <button onClick={() => setActiveMapPoint(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold">✕ إغلاق</button>
                  </div>
              </div>

              {/* Story: Samarkand */}
              <div className="bg-slate-50 p-6 rounded-2xl border-l-8 border-indigo-600 shadow-md">
                  <h3 className="text-xl font-black text-indigo-900 mb-3 flex items-center gap-2">
                      <BookOpen size={24} /> قصة وعبرة: عدالة الإسلام في سمرقند
                  </h3>
                  <p className="text-slate-700 text-lg leading-loose mb-4 font-medium">
                      دخل المسلمون سمرقند دون دعوة أهلها للإسلام أولاً. اشتكى الكهنة للخليفة <strong>عمر بن عبدالعزيز</strong>، فأمر القاضي بإخراج الجيش فوراً.
                      أذهلت هذه العدالة أهل سمرقند، فدخلوا في الإسلام طواعية.
                  </p>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                      <h4 className="font-bold text-indigo-800 text-base mb-2">استنتج (صفحة 60):</h4>
                      <ul className="list-disc list-inside text-slate-700 font-medium text-base space-y-1">
                          <li>سبب الشكوى: عدم التزام الجيش بمبادئ الفتح (الدعوة قبل القتال).</li>
                          <li>سبب إسلامهم: عدالة الخليفة والقاضي وتطبيق مبادئ الإسلام الحقيقية.</li>
                      </ul>
                  </div>
              </div>
          </div>
      );
  };

  // --- ACHIEVEMENTS SECTION (Interactive Animations) ---
  const AchievementsSection = () => {
      const [activeItem, setActiveItem] = useState<string | null>(null);

      const triggerAnimation = (id: string) => {
          setActiveItem(null); // Reset to allow re-animation
          setTimeout(() => setActiveItem(id), 50);
      };

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2">منجزات الدولة الأموية (تفاعلي)</h2>
                  <p className="text-lg text-slate-600">اضغط على البطاقات لتشغيل المحاكاة ورؤية المنجزات تتحرك</p>
              </div>

              <div className="space-y-6">
                  
                  {/* Administrative (Green Theme) - Mail Delivery */}
                  <div 
                    onClick={() => triggerAnimation('admin')}
                    className="cursor-pointer group flex flex-col md:flex-row gap-4 items-center bg-emerald-50 p-4 rounded-3xl border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all"
                  >
                      <div className="w-full md:w-48 h-40 bg-white border-2 border-emerald-200 rounded-2xl flex items-center justify-center p-2 relative shadow-sm overflow-hidden flex-shrink-0">
                          {/* Animation: Envelope sliding */}
                          <svg viewBox="0 0 200 150" className="w-full h-full">
                              <rect x="20" y="40" width="40" height="80" fill="#10B981" rx="5" /> {/* Sender */}
                              <rect x="140" y="40" width="40" height="80" fill="#059669" rx="5" /> {/* Receiver */}
                              <path d="M20,120 L180,120" stroke="#D1FAE5" strokeWidth="4" /> {/* Road */}
                              
                              {/* Moving Letter */}
                              <g 
                                className={activeItem === 'admin' ? "animate-[deliver_2s_ease-in-out_forwards]" : ""}
                                style={{ transform: activeItem === 'admin' ? 'translateX(0)' : 'translateX(0)' }}
                              >
                                  <rect x="60" y="60" width="30" height="20" fill="white" stroke="#047857" strokeWidth="2" />
                                  <path d="M60,60 L75,70 L90,60" fill="none" stroke="#047857" strokeWidth="1" />
                              </g>
                          </svg>
                          <div className="absolute top-2 right-2 text-emerald-500 animate-pulse"><Mail size={20}/></div>
                      </div>
                      <div className="flex-1 text-center md:text-right">
                          <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">الإداري</span>
                          <h4 className="text-xl font-bold text-emerald-900 mb-2">استحداث ديوان البريد</h4>
                          <ul className="text-lg text-emerald-800 font-medium">
                              <li>• تنظيم نقل الرسائل بين العاصمة والولايات.</li>
                              <li>• تعريب الدواوين (جعلها باللغة العربية).</li>
                          </ul>
                          <p className="text-xs text-emerald-600 mt-2 font-bold animate-bounce opacity-0 group-hover:opacity-100">اضغط للمشاهدة 👆</p>
                      </div>
                  </div>

                  {/* Military (Red/Pink Theme) - Catapult Firing */}
                  <div 
                    onClick={() => triggerAnimation('military')}
                    className="cursor-pointer group flex flex-col md:flex-row gap-4 items-center bg-rose-50 p-4 rounded-3xl border-2 border-rose-200 hover:border-rose-400 hover:shadow-lg transition-all"
                  >
                      <div className="w-full md:w-48 h-40 bg-white border-2 border-rose-200 rounded-2xl flex items-center justify-center p-2 relative shadow-sm overflow-hidden flex-shrink-0">
                          <svg viewBox="0 0 200 150" className="w-full h-full">
                              <line x1="20" y1="130" x2="100" y2="130" stroke="#BE123C" strokeWidth="4" />
                              <path d="M40,130 L60,80 L80,130" stroke="#BE123C" strokeWidth="4" fill="none" />
                              
                              {/* Swinging Arm */}
                              <g 
                                style={{ transformOrigin: '60px 80px' }} 
                                className={activeItem === 'military' ? "animate-[catapult_1s_ease-out_forwards]" : ""}
                              >
                                  <line x1="60" y1="80" x2="10" y2="100" stroke="#9F1239" strokeWidth="6" />
                                  <circle cx="10" cy="100" r="8" fill="#4C0519" /> {/* Rock attached */}
                              </g>

                              {/* Flying Projectile */}
                              {activeItem === 'military' && (
                                  <circle cx="10" cy="100" r="6" fill="#4C0519" className="animate-[projectile_1s_linear_0.3s_forwards]" />
                              )}
                          </svg>
                      </div>
                      <div className="flex-1 text-center md:text-right">
                          <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">العسكري</span>
                          <h4 className="text-xl font-bold text-rose-900 mb-2">تطور الآلات الحربية</h4>
                          <ul className="text-lg text-rose-800 font-medium">
                              <li>• استخدام <strong>المنجنيق</strong> في الحصار.</li>
                              <li>• إنشاء الأسطول البحري الإسلامي.</li>
                          </ul>
                          <p className="text-xs text-rose-600 mt-2 font-bold animate-bounce opacity-0 group-hover:opacity-100">اضغط للإطلاق 💥</p>
                      </div>
                  </div>

                  {/* Economic (Blue Theme) - Minting Coin */}
                  <div 
                    onClick={() => triggerAnimation('economic')}
                    className="cursor-pointer group flex flex-col md:flex-row gap-4 items-center bg-sky-50 p-4 rounded-3xl border-2 border-sky-200 hover:border-sky-400 hover:shadow-lg transition-all"
                  >
                      <div className="w-full md:w-48 h-40 bg-white border-2 border-sky-200 rounded-2xl flex items-center justify-center p-2 relative shadow-sm overflow-hidden flex-shrink-0">
                          <svg viewBox="0 0 200 150" className="w-full h-full">
                              <g className={activeItem === 'economic' ? "animate-[spin3D_2s_linear_infinite]" : ""}>
                                  <circle cx="100" cy="75" r="40" fill="#FCD34D" stroke="#B45309" strokeWidth="4" />
                                  <text x="80" y="80" fontSize="16" fill="#92400E" fontWeight="bold">لا إله</text>
                                  <text x="85" y="95" fontSize="16" fill="#92400E" fontWeight="bold">إلا الله</text>
                              </g>
                              {activeItem === 'economic' && <circle cx="100" cy="75" r="50" stroke="#FDE047" strokeWidth="2" fill="none" className="animate-ping" />}
                          </svg>
                      </div>
                      <div className="flex-1 text-center md:text-right">
                          <span className="bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">الاقتصادي</span>
                          <h4 className="text-xl font-bold text-sky-900 mb-2">سك العملة الإسلامية</h4>
                          <ul className="text-lg text-sky-800 font-medium">
                              <li>• أول دينار عربي في عهد عبدالملك بن مروان.</li>
                              <li>• تحقيق الاستقلال الاقتصادي للدولة.</li>
                          </ul>
                          <p className="text-xs text-sky-600 mt-2 font-bold animate-bounce opacity-0 group-hover:opacity-100">اضغط للتدوير 🪙</p>
                      </div>
                  </div>

                  {/* Cultural (Orange Theme) - Book Opening */}
                  <div 
                    onClick={() => triggerAnimation('cultural')}
                    className="cursor-pointer group flex flex-col md:flex-row gap-4 items-center bg-orange-50 p-4 rounded-3xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all"
                  >
                      <div className="w-full md:w-48 h-40 bg-white border-2 border-orange-200 rounded-2xl flex items-center justify-center p-2 relative shadow-sm overflow-hidden flex-shrink-0">
                          <svg viewBox="0 0 200 150" className="w-full h-full">
                              <rect x="50" y="50" width="100" height="60" fill="#C2410C" rx="2" className={activeItem === 'cultural' ? "opacity-0" : "opacity-100"} />
                              <text x="70" y="85" fontSize="14" fill="white" className={activeItem === 'cultural' ? "opacity-0" : "opacity-100"}>علوم</text>
                              
                              {activeItem === 'cultural' && (
                                  <g className="animate-[bookOpen_1s_ease-out_forwards]">
                                      <path d="M40,50 Q100,60 160,50 L160,110 Q100,120 40,110 Z" fill="#FFF7ED" stroke="#C2410C" strokeWidth="2" />
                                      <line x1="100" y1="55" x2="100" y2="115" stroke="#C2410C" strokeWidth="1" />
                                      <path d="M50,70 H90 M50,80 H90 M50,90 H80" stroke="#FB923C" strokeWidth="2" />
                                      <path d="M110,70 H150 M110,80 H150 M110,90 H140" stroke="#FB923C" strokeWidth="2" />
                                  </g>
                              )}
                          </svg>
                      </div>
                      <div className="flex-1 text-center md:text-right">
                          <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">الثقافي</span>
                          <h4 className="text-xl font-bold text-orange-900 mb-2">حركة الترجمة والتأليف</h4>
                          <ul className="text-lg text-orange-800 font-medium">
                              <li>• ترجمة الكتب العلمية من اللغات الأخرى.</li>
                              <li>• تشجيع العلماء وإنشاء المكتبات.</li>
                          </ul>
                          <p className="text-xs text-orange-600 mt-2 font-bold animate-bounce opacity-0 group-hover:opacity-100">اضغط للقراءة 📖</p>
                      </div>
                  </div>

                  {/* Urban (Purple Theme) - Mosque Glowing */}
                  <div 
                    onClick={() => triggerAnimation('urban')}
                    className="cursor-pointer group flex flex-col md:flex-row gap-4 items-center bg-purple-50 p-4 rounded-3xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all"
                  >
                      <div className="w-full md:w-48 h-40 bg-white border-2 border-purple-200 rounded-2xl flex items-center justify-center p-2 relative shadow-sm overflow-hidden flex-shrink-0">
                          <svg viewBox="0 0 200 150" className="w-full h-full">
                              <path d="M40,120 L160,120 L160,80 L40,80 Z" fill="#E9D5FF" stroke="#7E22CE" strokeWidth="1" />
                              <path d="M60,80 Q100,20 140,80" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" className={activeItem === 'urban' ? "animate-pulse drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" : ""} />
                              <rect x="90" y="90" width="20" height="30" fill="#6B21A8" rx="10" />
                              {activeItem === 'urban' && <circle cx="100" cy="50" r="30" fill="white" className="animate-ping opacity-20" />}
                          </svg>
                          <div className="absolute top-2 right-2 text-purple-500"><Sparkles size={20} className={activeItem === 'urban' ? "animate-spin" : ""}/></div>
                      </div>
                      <div className="flex-1 text-center md:text-right">
                          <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">العمراني</span>
                          <h4 className="text-xl font-bold text-purple-900 mb-2">روائع العمارة الإسلامية</h4>
                          <ul className="text-lg text-purple-800 font-medium">
                              <li>• بناء <strong>مسجد قبة الصخرة</strong> (القدس).</li>
                              <li>• بناء <strong>الجامع الأموي</strong> (دمشق).</li>
                          </ul>
                          <p className="text-xs text-purple-600 mt-2 font-bold animate-bounce opacity-0 group-hover:opacity-100">اضغط للإضاءة ✨</p>
                      </div>
                  </div>

              </div>
              
              <style>{`
                @keyframes deliver { 0% { transform: translateX(0); opacity: 1; } 50% { transform: translateX(80px); opacity: 1; } 100% { transform: translateX(80px); opacity: 0; } }
                @keyframes catapult { 0% { transform: rotate(0deg); } 20% { transform: rotate(-45deg); } 100% { transform: rotate(45deg); } }
                @keyframes projectile { 0% { cx: 10; cy: 100; opacity: 1; } 100% { cx: 180; cy: 50; opacity: 0; } }
                @keyframes spin3D { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
                @keyframes bookOpen { from { transform: scaleX(0); } to { transform: scaleX(1); } }
              `}</style>
          </div>
      );
  };

  // --- FALL SECTION (Battle of Zab Simulation) ---
  const FallSection = () => {
      const [battleStep, setBattleStep] = useState(0);

      const nextStep = () => {
          if (battleStep < 3) setBattleStep(prev => prev + 1);
          else setBattleStep(0);
      };

      return (
          <div className="p-6 animate-fade-in space-y-10">
              <div className="text-center">
                  <h2 className="text-2xl font-black text-slate-800 mb-3">نهاية الدولة الأموية (132هـ)</h2>
                  <p className="text-lg text-slate-600">كيف سقطت الدولة القوية؟ وما هي المعركة الفاصلة؟</p>
              </div>

              {/* Causes of Fall */}
              <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-2xl text-center border border-red-200">
                      <div className="text-4xl mb-2">⚔️</div>
                      <h4 className="font-bold text-lg text-red-900 mb-1">ظهور المعارضة</h4>
                      <p className="text-sm font-medium text-red-800">كثرة الثورات والفرق المعارضة للحكم.</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-2xl text-center border border-red-200">
                      <div className="text-4xl mb-2">👑</div>
                      <h4 className="font-bold text-lg text-red-900 mb-1">النزاع الداخلي</h4>
                      <p className="text-sm font-medium text-red-800">الصراع بين أبناء البيت الأموي على الحكم.</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-2xl text-center border border-red-200">
                      <div className="text-4xl mb-2">🌍</div>
                      <h4 className="font-bold text-lg text-red-900 mb-1">اتساع الدولة</h4>
                      <p className="text-sm font-medium text-red-800">صعوبة الاتصال والسيطرة على الأطراف المترامية.</p>
                  </div>
              </div>

              {/* Battle of Zab Simulation */}
              <div className="bg-slate-900 rounded-3xl p-6 border-4 border-slate-700 shadow-2xl overflow-hidden relative">
                  <div className="text-center mb-6 relative z-10">
                      <h3 className="text-2xl font-black text-yellow-500 mb-2 flex items-center justify-center gap-3">
                          <Swords size={28}/> معركة الزاب (132هـ)
                      </h3>
                      <p className="text-slate-300 text-sm">المعركة الفاصلة بين الأمويين والعباسيين</p>
                  </div>

                  <div className="relative h-64 bg-[#e5d5c5] rounded-xl overflow-hidden border-2 border-[#a18e78] mb-6">
                      {/* The River Zab */}
                      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-blue-500 flex flex-col items-center justify-center z-10 opacity-80">
                          <Waves className="text-blue-200 animate-pulse mb-4" size={20} />
                          <Waves className="text-blue-200 animate-pulse" size={20} />
                          <span className="text-white font-bold rotate-90 mt-4 whitespace-nowrap text-xs bg-blue-800/50 px-2 rounded">نهر الزاب</span>
                      </div>

                      {/* Abbasid Army (Black Flags) - Right Side */}
                      <div className={`absolute top-1/4 right-6 transition-all duration-1000 ${battleStep >= 1 ? 'translate-x-[-100px]' : ''}`}>
                          <div className="flex flex-col items-center">
                              <div className="bg-black text-white px-2 py-1 text-[10px] font-bold mb-1">العباسيون</div>
                              <div className="grid grid-cols-3 gap-1">
                                  {Array.from({length: 9}).map((_, i) => (
                                      <div key={i} className="w-3 h-3 bg-black rounded-full shadow-sm"></div>
                                  ))}
                              </div>
                          </div>
                      </div>

                      {/* Umayyad Army (White Flags) - Left Side */}
                      <div className={`absolute top-1/4 left-6 transition-all duration-1000 ${battleStep >= 2 ? 'opacity-0 scale-50' : ''}`}>
                          <div className="flex flex-col items-center">
                              <div className="bg-white text-slate-900 border px-2 py-1 text-[10px] font-bold mb-1">الأمويون</div>
                              <div className="grid grid-cols-3 gap-1">
                                  {Array.from({length: 9}).map((_, i) => (
                                      <div key={i} className="w-3 h-3 bg-white border border-slate-400 rounded-full shadow-sm"></div>
                                  ))}
                              </div>
                              <div className="mt-1 text-[9px] font-bold text-red-700 bg-white/80 px-1 rounded">مروان بن محمد</div>
                          </div>
                      </div>

                      {/* Action Arrows */}
                      {battleStep === 1 && (
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                              <div className="text-3xl animate-ping">💥</div>
                          </div>
                      )}
                      
                      {/* Victory Message */}
                      {battleStep === 3 && (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-30 animate-fade-in">
                              <div className="text-center text-white p-4 border-4 border-yellow-500 rounded-xl bg-slate-800">
                                  <h4 className="text-xl font-black text-yellow-400 mb-1">انتصار العباسيين</h4>
                                  <p className="text-sm">سقوط الدولة الأموية وقيام الدولة العباسية</p>
                              </div>
                          </div>
                      )}
                  </div>

                  {/* Controls */}
                  <div className="flex justify-center">
                      <button 
                        onClick={nextStep}
                        className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-6 py-2 rounded-full font-bold text-base shadow-lg flex items-center gap-2 transition-transform active:scale-95"
                      >
                          {battleStep === 0 ? <><Play fill="black" size={16} /> بدء المعركة</> : 
                           battleStep === 3 ? <><RefreshCw size={16} /> إعادة</> : "الخطوة التالية"}
                      </button>
                  </div>
                  
                  <div className="mt-3 text-center text-slate-400 text-xs font-medium">
                      {battleStep === 0 && "الجيشان يستعدان على ضفاف نهر الزاب..."}
                      {battleStep === 1 && "اشتباك الجيشين... العباسيون يضغطون بقوة!"}
                      {battleStep === 2 && "هزيمة الجيش الأموي وهروب مروان بن محمد."}
                      {battleStep === 3 && "نهاية المعركة."}
                  </div>
              </div>
          </div>
      );
  };

  const renderSection = () => {
    switch (activeSection) {
      case Section.UMAYYAD_RISE: return <RiseSection />;
      case Section.UMAYYAD_CONQUESTS: return <ConquestsSection />;
      case Section.UMAYYAD_ACHIEVEMENTS: return <AchievementsSection />;
      case Section.UMAYYAD_FALL: return <FallSection />;
      case Section.QUIZ: return <SectionQuiz questions={UMAYYAD_QUIZ_QUESTIONS} />;
      default: return <RiseSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-emerald-50 text-right font-tajawal">
      <aside className={`fixed md:relative z-20 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} right-0 md:right-auto border-l border-emerald-100 flex flex-col`}>
        <div className="p-4 border-b border-emerald-100">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 bg-slate-50 hover:bg-emerald-50 px-3 py-2 rounded-lg w-full transition-colors mb-4 text-sm font-bold">
             <ArrowRight size={16} /> العودة للمكتبة
          </button>
          <h1 className="text-xl font-black text-emerald-700 px-2">الدولة الأموية 🕌</h1>
        </div>
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {UMAYYAD_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => { setActiveSection(section.id); setMobileMenuOpen(false); }}
              className={`w-full text-right p-4 rounded-xl flex items-center gap-3 transition-colors font-bold text-base ${activeSection === section.id ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-xl">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 min-h-screen overflow-y-auto">
        <header className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
           <span className="font-bold text-lg text-emerald-800">الدولة الأموية</span>
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700"><Menu /></button>
        </header>
        <div className="max-w-5xl mx-auto py-8 px-4 md:px-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default UmayyadStateLesson;