import React, { useEffect, useRef, useState } from 'react';
import { RefreshCw, Play } from 'lucide-react';

const AbbasidMongols: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isSimulating, setIsSimulating] = useState(false);
    const [mapLoaded, setMapLoaded] = useState(false);
    const requestRef = useRef<number>();
    const mapImageRef = useRef<HTMLImageElement | null>(null);

    // =========================================================
    // إعدادات المحاكاة (تم ضبط الإحداثيات بناءً على خريطتك)
    // =========================================================
    const gameState = useRef({
        state: 'WAITING', // WAITING, MOVING, FIGHTING, ENDED
        timer: 0,
        // إحداثيات البداية (ذيل السهم الأصفر في الخريطة)
        mongols: { 
            x: 620, 
            y: 140, 
            color: '#b91c1c', 
            label: 'جيش هولاكو', 
            speed: 2, 
            size: 25, 
            emoji: '🐎', 
            health: 100 
        },
        // إحداثيات الهدف (نقطة بغداد السوداء في الخريطة)
        baghdad: { 
            x: 370, 
            y: 230, 
            color: '#166534', 
            label: 'بغداد', 
            speed: 0, 
            size: 30, 
            emoji: '🏰', 
            health: 100 
        }
    });

    useEffect(() => {
        const img = new Image();
        
        // ✅ التعديل هنا: استخدام الاسم الصحيح من قائمة ملفاتك
        // بما أن الملف داخل مجلد public مباشرة، نكتب اسمه مسبوقاً بـ /
        img.src = '/map_mongol.png'; 
        
        img.onload = () => {
            mapImageRef.current = img;
            setMapLoaded(true);
            draw(); // رسم الإطار الأول
        };

        // في حال حدوث خطأ في تحميل الصورة
        img.onerror = () => {
            console.error("فشل تحميل الصورة: تأكد من وجود map_mongol.png في مجلد public");
        };

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const animate = () => {
        update();
        draw();
        if (gameState.current.state !== 'ENDED_STOP') {
            requestRef.current = requestAnimationFrame(animate);
        }
    };

    const update = () => {
        const state = gameState.current;
        const { mongols, baghdad } = state;

        if (state.state === 'MOVING') {
            const dx = baghdad.x - mongols.x;
            const dy = baghdad.y - mongols.y;
            const distance = Math.sqrt(dx*dx + dy*dy);

            // التحرك نحو الهدف
            if (distance > mongols.size/2 + baghdad.size/2) {
                const angle = Math.atan2(dy, dx);
                mongols.x += Math.cos(angle) * mongols.speed;
                mongols.y += Math.sin(angle) * mongols.speed;
            } else {
                state.state = 'FIGHTING';
            }
        } else if (state.state === 'FIGHTING') {
            state.timer++;
            // تأثير الاهتزاز أثناء المعركة
            if (state.timer % 4 === 0) {
                mongols.x = baghdad.x + (Math.random() - 0.5) * 12;
                mongols.y = baghdad.y + (Math.random() - 0.5) * 12;
            }
            // مدة المعركة (حوالي 3 ثواني)
            if (state.timer > 180) {
                state.state = 'ENDED';
                baghdad.health = 0;
            }
        }
    };

    const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const state = gameState.current;

        // تنظيف الكانفاس
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. رسم الخريطة كخلفية
        if (mapImageRef.current) {
            // رسم الصورة لتملأ الكانفاس مع الحفاظ على النسبة
            ctx.drawImage(mapImageRef.current, 0, 0, canvas.width, canvas.height);
        } else {
            // خلفية مؤقتة
            ctx.fillStyle = '#eee';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#666';
            ctx.textAlign = "center";
            ctx.fillText("جاري تحميل الخريطة...", canvas.width/2, canvas.height/2);
        }

        // دالة مساعدة لرسم العناصر
        const drawEntity = (entity: any) => {
            // الظل
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowBlur = 8;
            
            // الدائرة
            ctx.fillStyle = entity.color;
            ctx.beginPath();
            ctx.arc(entity.x, entity.y, entity.size, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.shadowBlur = 0; // إلغاء الظل للنص

            // الأيقونة
            ctx.font = `${entity.size}px Arial`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(entity.emoji, entity.x, entity.y);

            // الاسم (مع خلفية بيضاء لضمان القراءة فوق الخريطة)
            ctx.font = "bold 12px Tajawal";
            const textWidth = ctx.measureText(entity.label).width;
            ctx.fillStyle = "rgba(255,255,255,0.85)";
            ctx.fillRect(entity.x - textWidth/2 - 6, entity.y - entity.size - 24, textWidth + 12, 20);
            
            ctx.fillStyle = "#000";
            ctx.fillText(entity.label, entity.x, entity.y - entity.size - 10);
        };

        // 2. رسم الجيوش
        if (state.baghdad.health > 0) drawEntity(state.baghdad);
        drawEntity(state.mongols);

        // 3. تأثيرات المعركة
        if (state.state === 'FIGHTING') {
             ctx.font = "40px Arial";
             ctx.textAlign = "center";
             ctx.fillText(Math.random() > 0.5 ? "💥" : "🔥", state.baghdad.x, state.baghdad.y - 10);
        }

        // 4. شاشة النهاية
        if (state.state === 'ENDED') {
            // طبقة تعتيم
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // النصوص
            ctx.shadowColor = "black";
            ctx.shadowBlur = 10;
            ctx.fillStyle = "#fbbf24"; // لون ذهبي
            ctx.font = "bold 36px Tajawal";
            ctx.textAlign = "center";
            ctx.fillText("سقوط بغداد (656هـ)", canvas.width/2, canvas.height/2 - 10);
            
            ctx.fillStyle = "#fff";
            ctx.font = "24px Tajawal";
            ctx.fillText("وانتهت الخلافة العباسية", canvas.width/2, canvas.height/2 + 40);
            
            // إيقاف الأنيميشن
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            setIsSimulating(false);
            state.state = 'ENDED_STOP'; // حالة خاصة لمنع إعادة التشغيل الخطأ
        }
    };

    const handleStart = () => {
        if (!mapLoaded) return;
        
        // إعادة تهيئة الحالة للبداية
        gameState.current.state = 'MOVING';
        gameState.current.baghdad.health = 100;
        // إعادة جيش المغول لموقعه الأصلي (بداية السهم)
        gameState.current.mongols.x = 620;
        gameState.current.mongols.y = 140;
        gameState.current.timer = 0;
        
        setIsSimulating(true);
        animate();
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* بطاقة العنوان */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 text-2xl">⚔️</div>
                    <div>
                        <h2 className="text-2xl font-black text-slate-800">محاكاة الغزو المغولي</h2>
                        <p className="text-slate-500 text-sm font-bold">تتبع مسار هولاكو نحو بغداد (الشكل ٤)</p>
                    </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    توضح الخريطة أدناه خط سير جيش المغول (باللون الأصفر) واجتياحهم للأراضي الإسلامية حتى وصولهم إلى عاصمة الخلافة.
                </p>
            </div>

            {/* منطقة المحاكاة (الخريطة) */}
            <div className="bg-slate-900 rounded-[2rem] p-2 shadow-xl overflow-hidden relative border-4 border-slate-800">
                <canvas 
                    ref={canvasRef} 
                    width={800} 
                    height={450} 
                    className="w-full h-auto rounded-xl bg-slate-100"
                />
                
                {/* أزرار التحكم */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-10">
                    {!isSimulating && (
                        <button 
                            onClick={handleStart}
                            disabled={!mapLoaded}
                            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-black shadow-lg flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white/20"
                        >
                            <Play className="fill-white" size={20} />
                            ابدأ الحملة
                        </button>
                    )}
                    {isSimulating && (
                         <button 
                            onClick={handleStart}
                            className="bg-black/50 backdrop-blur-md hover:bg-black/70 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 transition-all border border-white/10"
                        >
                            <RefreshCw size={18} />
                            إعادة
                        </button>
                    )}
                </div>
            </div>

            {/* المعلومات التاريخية */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100">
                     <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">⚠️ الوضع العسكري</h4>
                     <p className="text-xs text-amber-800 leading-relaxed">
                         تحرك الجيش المغولي بكثافة عددية هائلة، مستخدماً أدوات حصار متطورة، في حين كانت تحصينات بغداد مهملة والجيش العباسي صغيراً نسبياً بسبب ضعف التمويل والانقسامات.
                     </p>
                 </div>
                 <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                     <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">📍 معلومة إثرائية</h4>
                     <p className="text-xs text-slate-600 leading-relaxed">
                         استمر حصار بغداد حوالي 12 يوماً فقط قبل أن تستسلم المدينة، مما يدل على الفارق الهائل في موازين القوى والتخطيط العسكري آنذاك.
                     </p>
                 </div>
            </div>
        </div>
    );
};

export default AbbasidMongols;
