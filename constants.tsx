
// ... existing imports
import { Unit, Section, QuizQuestion, WeatherElement, EarthLayer, OmanRegion } from './types';
import { 
  CloudSun, Thermometer, Wind, Umbrella, CloudRain, Mountain, Globe2, 
  BookOpen, Flag, Scale, Landmark, Users, Briefcase, 
  Map, Activity, Database, FileText, Smartphone, Vote, HeartHandshake,
  Leaf, Sun, Droplet, Cloud, Coins, Shield, Castle, Star, ArrowDown,
  Swords, List, Target, ArrowLeftRight, AlertTriangle, Calculator,
  Building2, Layers, Book, Crown, Pickaxe, Moon, Mail, User, Heart, Scale3d
} from 'lucide-react';

// --- WEATHER ELEMENTS ---
export const WEATHER_ELEMENTS_DATA: WeatherElement[] = [
    {
        id: 'temp',
        name: 'درجة الحرارة',
        instrument: 'الثرمومتر',
        unit: 'درجة مئوية (C°)',
        definition: 'مقدار السخونة أو البرودة في الهواء.',
        mechanism: 'يعتمد التسخين على أشعة الشمس. تختلف الحرارة باختلاف زاوية سقوط الأشعة وطبيعة السطح.',
        importance: 'تؤثر في نشاط الإنسان ونمو النباتات وبقية عناصر الطقس.',
        realWorldExample: 'ارتفاع الحرارة صيفاً يدفعنا لاستخدام التكييف، وانخفاضها شتاءً يتطلب التدفئة.',
        icon: <Thermometer />
    },
    {
        id: 'pressure',
        name: 'الضغط الجوي',
        instrument: 'البارومتر',
        unit: 'مليبار (mb)',
        definition: 'وزن عمود الهواء الواقع على وحدة المساحة (1 سم²) من سطح الأرض حتى نهاية الغلاف الجوي.',
        mechanism: 'ينشأ من وزن الهواء. يقل الضغط كلما ارتفعنا عن سطح البحر.',
        importance: 'المحرك الرئيسي للرياح؛ حيث تنتقل الرياح من مناطق الضغط المرتفع إلى المنخفض.',
        realWorldExample: 'انسداد الأذن عند صعود الجبل أو ركوب الطائرة بسبب تغير الضغط.',
        icon: <Activity />
    },
    {
        id: 'wind',
        name: 'الرياح',
        instrument: 'الأنيمومتر (سرعة) / دوارة الرياح (اتجاه)',
        unit: 'عقدة (للسرعة)',
        definition: 'حركة الهواء الأفقية على سطح الأرض.',
        mechanism: 'تتحرك نتيجة اختلاف الضغط الجوي بين منطقتين.',
        importance: 'تلطيف الجو، نقل حبوب اللقاح، تحريك السفن الشراعية، وتوليد الكهرباء.',
        realWorldExample: 'حركة الأشجار، نسيم البحر نهاراً، والعواصف الرملية.',
        icon: <Wind />
    },
    {
        id: 'humidity',
        name: 'الرطوبة',
        instrument: 'الهيجرومتر',
        unit: 'نسبة مئوية (%)',
        definition: 'كمية بخار الماء العالق في الهواء.',
        mechanism: 'تنتج عن تبخر المياه من البحار والمحيطات والنباتات.',
        importance: 'أساسية لتكون السحب ونزول الأمطار.',
        realWorldExample: 'الشعور باللزوجة والحرارة الزائدة في المناطق الساحلية (مثل مسقط وصحار).',
        icon: <Droplet />
    },
    {
        id: 'precipitation',
        name: 'التساقط (الأمطار)',
        instrument: 'مقياس المطر',
        unit: 'ملم (mm)',
        definition: 'تكثف بخار الماء في طبقات الجو العليا وسقوطه.',
        mechanism: 'عندما يبرد الهواء المشبع بالبخار، يتكاثف ويتحول لقطرات ماء.',
        importance: 'المصدر الرئيسي للمياه العذبة والزراعة.',
        realWorldExample: 'جريان الأودية (مثل وادي ضيقة) بعد هطول الأمطار.',
        icon: <CloudRain />
    }
];

// --- QUIZ QUESTIONS ---

export const ABBASID_QUIZ_QUESTIONS: QuizQuestion[] = [
    {
        id: 1,
        question: 'بدأ العصر العباسي الثاني بتولي الخليفة:',
        options: ['المتوكل', 'هارون الرشيد', 'المعتصم', 'المأمون'],
        correctIndex: 0
    },
    {
        id: 2,
        question: 'أي من الدول التالية استقلت عن الدولة العباسية في مصر؟',
        options: ['الدولة الفاطمية', 'دولة القرامطة', 'الدولة الأموية', 'الدولة السلجوقية'],
        correctIndex: 0
    },
    {
        id: 3,
        question: 'القائد المسلم الذي انتصر على الصليبيين في معركة حطين هو:',
        options: ['صلاح الدين الأيوبي', 'قطز', 'بيبرس', 'نور الدين زنكي'],
        correctIndex: 0
    },
    {
        id: 4,
        question: 'المعركة التي أوقفت الزحف المغولي على العالم الإسلامي هي:',
        options: ['عين جالوت', 'حطين', 'الزاب', 'ملاذ كرد'],
        correctIndex: 0
    },
    {
        id: 5,
        question: 'استفاد الأوروبيون من المسلمين في الحروب الصليبية بنقل:',
        options: ['الحمام الزاجل والمنجنيق', 'البارود', 'الدبابات', 'الطائرات'],
        correctIndex: 0
    }
];

export const UMAYYAD_QUIZ_QUESTIONS: QuizQuestion[] = [
    {
        id: 1,
        question: 'مؤسس الدولة الأموية هو:',
        options: ['معاوية بن أبي سفيان', 'عبدالملك بن مروان', 'يزيد بن معاوية', 'مروان بن الحكم'],
        correctIndex: 0
    },
    {
        id: 2,
        question: 'يعد المؤسس الثاني للدولة الأموية:',
        options: ['عبدالملك بن مروان', 'الوليد بن عبدالملك', 'عمر بن عبدالعزيز', 'سليمان بن عبدالملك'],
        correctIndex: 0
    },
    {
        id: 3,
        question: 'وصلت الدولة الأموية لأقصى اتساع لها في عهد:',
        options: ['الوليد بن عبدالملك', 'معاوية بن أبي سفيان', 'عمر بن عبدالعزيز', 'هشام بن عبدالملك'],
        correctIndex: 0
    },
    {
        id: 4,
        question: 'سقطت الدولة الأموية بعد معركة:',
        options: ['الزاب', 'القادسية', 'اليرموك', 'صفين'],
        correctIndex: 0
    }
];

// ... (Keep existing quiz questions for other lessons) ...
export const QUIZ_QUESTIONS: QuizQuestion[] = [];
export const OMAN_QUIZ_QUESTIONS: QuizQuestion[] = [];
export const EARTH_QUIZ_QUESTIONS: QuizQuestion[] = [];
export const EXTERNAL_QUIZ_QUESTIONS: QuizQuestion[] = [];
export const OMAN_ABBASID_QUIZ_QUESTIONS: QuizQuestion[] = [];
export const OMAN_CIVILIZATION_QUIZ_QUESTIONS: QuizQuestion[] = [];
export const BASIC_STATUTE_QUIZ_QUESTIONS: QuizQuestion[] = [];
export const STATE_INSTITUTIONS_QUIZ_QUESTIONS: QuizQuestion[] = [];
export const UNIT_1_ASSESSMENT_QUESTIONS: QuizQuestion[] = [];
export const UNIT_2_ASSESSMENT_QUESTIONS: QuizQuestion[] = [];
export const UNIT_3_ASSESSMENT_QUESTIONS: QuizQuestion[] = [];
export const SIXTH_POPULATION_QUIZ: QuizQuestion[] = [];
export const SIXTH_STRUCTURE_QUIZ: QuizQuestion[] = [];
export const SIXTH_GROWTH_QUIZ: QuizQuestion[] = [];
export const SIXTH_DENSITY_QUIZ: QuizQuestion[] = [];
export const OMAN_UMAYYAD_QUIZ_QUESTIONS: QuizQuestion[] = [];
export const OMAN_UMAYYAD_ACHIEVEMENTS_QUIZ: QuizQuestion[] = [];
export const CIVIL_SOCIETY_QUIZ: QuizQuestion[] = [];
export const COMMUNITY_PARTICIPATION_QUIZ: QuizQuestion[] = [];
export const MAPS_QUIZ: QuizQuestion[] = [];

// --- LESSON SECTIONS ---

export const ABBASID_SECTIONS = [
    { id: Section.INTRO, label: 'المقدمة والسمات', icon: <BookOpen /> },
    { id: Section.POLITICAL_MAP, label: 'الدول المستقلة', icon: <Map /> },
    { id: Section.PROSPERITY, label: 'مظاهر الازدهار', icon: <Coins /> },
    { id: Section.CRUSADES, label: 'الأخطار (الصليبيون)', icon: <Swords /> },
    { id: Section.MONGOLS, label: 'الأخطار (المغول)', icon: <Flag /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const UMAYYAD_SECTIONS = [
    { id: Section.UMAYYAD_RISE, label: 'قيام الدولة', icon: <Flag /> },
    { id: Section.UMAYYAD_CONQUESTS, label: 'الفتوحات', icon: <Map /> },
    { id: Section.UMAYYAD_ACHIEVEMENTS, label: 'المنجزات', icon: <Star /> },
    { id: Section.UMAYYAD_FALL, label: 'النهاية', icon: <ArrowDown /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const SECTIONS = [
  { id: Section.INTRO, label: 'مقدمة', icon: <BookOpen /> },
  { id: Section.DEFINITION, label: 'الطقس والمناخ', icon: <CloudSun /> },
  { id: Section.FACTORS, label: 'العوامل المؤثرة', icon: <Activity /> },
  { id: Section.ELEMENTS, label: 'عناصر الطقس', icon: <Thermometer /> },
  { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const OMAN_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.FACTORS, label: 'العوامل المؤثرة', icon: <Activity /> },
    { id: Section.REGIONS, label: 'الأقاليم المناخية', icon: <Map /> },
    { id: Section.SEASONS, label: 'فصول السنة', icon: <Sun /> },
    { id: Section.DATA_ANALYSIS, label: 'تحليل البيانات', icon: <Activity /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const EARTH_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.LAYERS, label: 'طبقات الأرض', icon: <Layers /> },
    { id: Section.TECTONICS, label: 'الصفائح التكتونية', icon: <Activity /> },
    { id: Section.PROCESSES, label: 'العمليات الداخلية', icon: <Activity /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const EXTERNAL_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.WEATHERING, label: 'التجوية', icon: <Activity /> },
    { id: Section.EROSION, label: 'التعرية', icon: <Wind /> },
    { id: Section.DEPOSITION, label: 'الترسب', icon: <Mountain /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const OMAN_ABBASID_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.IMAMATE_STABILITY, label: 'استقرار الإمامة', icon: <Shield /> },
    { id: Section.SOCOTRA_CAMPAIGN, label: 'حملة سقطرى', icon: <Flag /> },
    { id: Section.ABBASID_INVASION, label: 'الغزو العباسي', icon: <Flag /> },
    { id: Section.NABHANID_ERA, label: 'دولة النباهنة', icon: <Castle /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const OMAN_CIVILIZATION_SECTIONS = [
    { id: Section.OMAN_CIV_INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.OMAN_CIV_CULTURE, label: 'الحياة الثقافية', icon: <Book /> },
    { id: Section.OMAN_CIV_ECONOMY, label: 'الحياة الاقتصادية', icon: <Coins /> },
    { id: Section.OMAN_CIV_ARCH, label: 'العمارة', icon: <Castle /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const BASIC_STATUTE_SECTIONS = [
    { id: Section.STATUTE_INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.STATUTE_STRUCTURE, label: 'هيكل النظام', icon: <Briefcase /> },
    { id: Section.STATUTE_PILLARS, label: 'المرتكزات', icon: <Landmark /> },
    { id: Section.STATUTE_PRINCIPLES, label: 'المبادئ', icon: <Scale /> },
    { id: Section.STATUTE_RUMORS, label: 'توعية قانونية', icon: <Shield /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const STATE_INSTITUTIONS_SECTIONS = [
    { id: Section.STATE_INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.STATE_STRUCTURE, label: 'سلطات الدولة', icon: <Landmark /> },
    { id: Section.HEAD_OF_STATE, label: 'رئيس الدولة', icon: <Crown /> },
    { id: Section.GOV_INSTITUTIONS, label: 'المؤسسات', icon: <Building2 /> },
    { id: Section.GOV_SERVICES, label: 'الخدمات', icon: <HeartHandshake /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

// ... Grade 6 Sections ...
export const SIXTH_POPULATION_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.POP_SOURCES, label: 'مصادر البيانات', icon: <Database /> },
    { id: Section.CENSUS_EVOLUTION, label: 'تطور التعداد', icon: <Activity /> },
    { id: Section.POP_IMPORTANCE, label: 'أهمية البيانات', icon: <Target /> },
    { id: Section.SUMMARY, label: 'الخلاصة', icon: <FileText /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const SIXTH_STRUCTURE_SECTIONS = [
    { id: Section.INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.FACTORS, label: 'البنية النوعية', icon: <Users /> },
    { id: Section.REGIONS, label: 'البنية العمرية', icon: <Users /> },
    { id: Section.DATA_ANALYSIS, label: 'الهرم السكاني', icon: <Activity /> },
    { id: Section.PROCESSES, label: 'البنية الاقتصادية', icon: <Briefcase /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const SIXTH_GROWTH_SECTIONS = [
    { id: Section.GROWTH_INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.OMAN_GROWTH_CHART, label: 'نمو السكان في عمان', icon: <Activity /> },
    { id: Section.NATURAL_INCREASE, label: 'الزيادة الطبيعية', icon: <Users /> },
    { id: Section.MIGRATION_IMPACT, label: 'الهجرة', icon: <ArrowLeftRight /> },
    { id: Section.GROWTH_EFFECTS, label: 'الآثار', icon: <AlertTriangle /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const SIXTH_DENSITY_SECTIONS = [
    { id: Section.DENSITY_INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.DENSITY_FACTORS, label: 'عوامل التوزيع', icon: <Map /> },
    { id: Section.CITY_VILLAGE, label: 'المدينة والريف', icon: <Building2 /> },
    { id: Section.DENSITY_CALC, label: 'مفهوم الكثافة', icon: <Calculator /> },
    { id: Section.DENSITY_MAP_ANALYSIS, label: 'تحليل الخرائط', icon: <Map /> },
    { id: Section.OMAN_DENSITY, label: 'كثافة عمان', icon: <Map /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const OMAN_UMAYYAD_SECTIONS = [
    { id: Section.OMAN_UMAYYAD_INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.OMAN_UMAYYAD_STANCE, label: 'الموقف العماني', icon: <Shield /> },
    { id: Section.OMAN_UMAYYAD_INDEPENDENCE, label: 'الاستقلال', icon: <Flag /> },
    { id: Section.OMAN_UMAYYAD_CONTROL, label: 'السيطرة الأموية', icon: <Swords /> },
    { id: Section.OMAN_UMAYYAD_GOVERNORS, label: 'العمال', icon: <Users /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const OMAN_UMAYYAD_ACHIEVEMENTS_SECTIONS = [
    { id: Section.OMAN_ACHIEVEMENTS_INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.OMAN_ACHIEVEMENTS_CULTURE, label: 'ثقافياً', icon: <Book /> },
    { id: Section.OMAN_ACHIEVEMENTS_MILITARY, label: 'عسكرياً', icon: <Shield /> },
    { id: Section.OMAN_ACHIEVEMENTS_ECONOMY, label: 'اقتصادياً', icon: <Coins /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const CIVIL_SOCIETY_SECTIONS = [
    { id: Section.CIVIL_SOCIETY_INTRO, label: 'المفهوم', icon: <BookOpen /> },
    { id: Section.CIVIL_SOCIETY_TYPES, label: 'الأنواع', icon: <List /> },
    { id: Section.CIVIL_SOCIETY_IMPORTANCE, label: 'الأهمية', icon: <Star /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const COMMUNITY_PARTICIPATION_SECTIONS = [
    { id: Section.COMMUNITY_INTRO, label: 'المفهوم', icon: <BookOpen /> },
    { id: Section.COMMUNITY_FORMS, label: 'الصور', icon: <List /> },
    { id: Section.COMMUNITY_IMPORTANCE, label: 'الأهمية', icon: <Star /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const MAPS_SECTIONS = [
    { id: Section.MAPS_INTRO, label: 'مقدمة', icon: <BookOpen /> },
    { id: Section.MAPS_ELEMENTS, label: 'عناصر الخريطة', icon: <Map /> },
    { id: Section.MAPS_TYPES, label: 'أنواع الخرائط', icon: <Layers /> },
    { id: Section.MAPS_IMPORTANCE, label: 'الأهمية', icon: <Star /> },
    { id: Section.QUIZ, label: 'اختبار', icon: <Activity /> }
];

export const EARTH_LAYERS_DATA: EarthLayer[] = [
    { id: 'crust', name: 'القشرة الأرضية', depth: '8 - 60 كم', temp: 'معتدلة', description: 'الطبقة الخارجية الصلبة التي نعيش عليها.', state: 'صلبة', color: '#8B4513' },
    { id: 'mantle', name: 'الوشاح (الستار)', depth: '2900 كم', temp: 'عالية جداً', description: 'طبقة سميكة من الصخور المنصهرة (الماجما).', state: 'شبه سائلة', color: '#D2691E' },
    { id: 'outer_core', name: 'اللب الخارجي', depth: '2250 كم', temp: '4000°C', description: 'طبقة سائلة من الحديد والنيكل.', state: 'سائلة', color: '#FF8C00' },
    { id: 'inner_core', name: 'اللب الداخلي', depth: '1250 كم', temp: '5000°C', description: 'مركز الأرض، صلب جداً بسبب الضغط الهائل.', state: 'صلبة', color: '#FF4500' }
];

export const OMAN_REGIONS_DATA: OmanRegion[] = [
    { id: 'semi_desert', name: 'المناخ شبه الصحراوي', description: 'حار صيفاً ودافئ شتاءً مع أمطار قليلة.', characteristics: 'يسود في معظم شمال السلطنة.', location: 'السهول الساحلية (الباطنة)', color: 'bg-yellow-100 border-yellow-300' },
    { id: 'mediterranean', name: 'مناخ البحر المتوسط', description: 'معتدل صيفاً وبارد شتاءً.', characteristics: 'أمطار شتوية وأحياناً صيفية.', location: 'الجبل الأخضر وجبل شمس', color: 'bg-green-100 border-green-300' },
    { id: 'dry_desert', name: 'المناخ الصحراوي الجاف', description: 'شديد الحرارة والجفاف طوال العام.', characteristics: 'ندرة الأمطار والغطاء النباتي.', location: 'الربع الخالي والوسطى', color: 'bg-orange-100 border-orange-300' },
    { id: 'monsoon', name: 'المناخ الموسمي', description: 'معتدل طوال العام مع أمطار موسمية صيفية (الخريف).', characteristics: 'ضباب وأمطار رذاذية في الصيف.', location: 'محافظة ظفار', color: 'bg-teal-100 border-teal-300' }
];

export const UNITS: Unit[] = [
    // ... Grade 7 Units ...
    {
        id: 'UNIT_1',
        title: 'الوحدة الأولى: الغلاف الحيوي والنظم البيئية',
        description: 'دراسة التفاعلات بين الكائنات الحية وبيئتها',
        lessons: [
            {
                id: 'WEATHER',
                title: 'الدرس الأول: الطقس والمناخ',
                subtitle: 'مفاهيم أساسية',
                description: 'الفرق بين الطقس والمناخ وعناصرهما.',
                icon: '🌦️',
                color: 'bg-sky-50 hover:bg-sky-100 border-sky-200',
                textColor: 'text-sky-700',
                available: true
            },
            {
                id: 'OMAN_CLIMATE',
                title: 'الدرس الثاني: مناخ سلطنة عمان',
                subtitle: 'دراسة حالة',
                description: 'العوامل المؤثرة في مناخ السلطنة وتنوعه.',
                icon: '🇴🇲',
                color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
                textColor: 'text-emerald-700',
                available: true
            },
            {
                id: 'EARTH_LAYERS',
                title: 'الدرس الثالث: تشكيل سطح الأرض (1)',
                subtitle: 'عوامل باطنية',
                description: 'طبقات الأرض والبراكين والزلازل.',
                icon: '🌋',
                color: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
                textColor: 'text-orange-700',
                available: true
            },
            {
                id: 'EXTERNAL_PROCESSES',
                title: 'الدرس الرابع: تشكيل سطح الأرض (2)',
                subtitle: 'عوامل خارجية',
                description: 'التجوية والتعرية وتأثير الرياح والمياه.',
                icon: '🏜️',
                color: 'bg-amber-50 hover:bg-amber-100 border-amber-200',
                textColor: 'text-amber-700',
                available: true
            },
            {
                id: 'UNIT_1_ASSESSMENT',
                title: 'تقويم الوحدة الأولى',
                subtitle: 'اختبار شامل',
                description: 'أسئلة مراجعة وتطبيق لما سبق.',
                icon: '📝',
                color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
                textColor: 'text-indigo-700',
                available: true
            }
        ]
    },
    {
        id: 'UNIT_2',
        title: 'الوحدة الثانية: التاريخ الإسلامي (العصر العباسي)',
        description: 'تاريخ الحضارة الإسلامية في العصر العباسي الثاني',
        lessons: [
            {
                id: 'ABBASID_STATE',
                title: 'الدرس الأول: العصر العباسي الثاني',
                subtitle: 'تاريخ وسياسة',
                description: 'الأوضاع السياسية، الدول المستقلة، والازدهار الحضاري.',
                icon: '🕌',
                color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
                textColor: 'text-purple-700',
                available: true
            },
            {
                id: 'OMAN_ABBASID',
                title: 'الدرس الثاني: عمان في العصر العباسي',
                subtitle: 'علاقات وتحديات',
                description: 'استقلال عمان وعلاقتها بالخلافة العباسية.',
                icon: '⚔️',
                color: 'bg-rose-50 hover:bg-rose-100 border-rose-200',
                textColor: 'text-rose-700',
                available: true
            },
            {
                id: 'OMAN_CIVILIZATION',
                title: 'الدرس الثالث: المنجزات الحضارية العمانية',
                subtitle: 'تراث وأصالة',
                description: 'العمارة، الزراعة، والتجارة في عمان قديماً.',
                icon: '🏺',
                color: 'bg-amber-50 hover:bg-amber-100 border-amber-200',
                textColor: 'text-amber-700',
                available: true
            },
            {
                id: 'UNIT_2_ASSESSMENT',
                title: 'تقويم الوحدة الثانية',
                subtitle: 'اختبار شامل',
                description: 'مراجعة شاملة للوحدة الثانية.',
                icon: '📜',
                color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
                textColor: 'text-purple-700',
                available: true
            }
        ]
    },
    {
        id: 'UNIT_3',
        title: 'الوحدة الثالثة: التربية الوطنية',
        description: 'مؤسسات الدولة والنظام الأساسي',
        lessons: [
            {
                id: 'BASIC_STATUTE',
                title: 'الدرس الأول: النظام الأساسي للدولة',
                subtitle: 'الدستور والقانون',
                description: 'أهمية النظام الأساسي ومبادئه.',
                icon: '⚖️',
                color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
                textColor: 'text-teal-700',
                available: true
            },
            {
                id: 'STATE_INSTITUTIONS',
                title: 'الدرس الثاني: مؤسسات الدولة',
                subtitle: 'سلطات وخدمات',
                description: 'السلطات الثلاث والخدمات الحكومية.',
                icon: '🏛️',
                color: 'bg-cyan-50 hover:bg-cyan-100 border-cyan-200',
                textColor: 'text-cyan-700',
                available: true
            },
            {
                id: 'UNIT_3_ASSESSMENT',
                title: 'تقويم الوحدة الثالثة',
                subtitle: 'اختبار شامل',
                description: 'مراجعة لمفاهيم المواطنة والمؤسسات.',
                icon: '🇴🇲',
                color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
                textColor: 'text-blue-700',
                available: true
            }
        ]
    }
];

export const UNITS_SIXTH: Unit[] = [
    // ... Grade 6 Units ...
    {
        id: 'UNIT_1_G6',
        title: 'الوحدة الأولى: السكان في العالم',
        description: 'دراسة البيانات السكانية والنمو',
        lessons: [
            {
                id: 'SIXTH_POPULATION',
                title: 'الدرس الأول: البيانات السكانية',
                subtitle: 'مصادر وأنواع',
                description: 'مصادر البيانات السكانية وأهميتها.',
                icon: '📊',
                color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
                textColor: 'text-blue-700',
                available: true
            },
            {
                id: 'SIXTH_STRUCTURE',
                title: 'الدرس الثاني: البنية السكانية',
                subtitle: 'نوع وعمر',
                description: 'التركيب النوعي والعمري للسكان.',
                icon: '👥',
                color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
                textColor: 'text-emerald-700',
                available: true
            },
            {
                id: 'SIXTH_GROWTH',
                title: 'الدرس الثالث: النمو السكاني',
                subtitle: 'زيادة وتغير',
                description: 'معدلات النمو وعوامل التغير السكاني.',
                icon: '📈',
                color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
                textColor: 'text-indigo-700',
                available: true
            },
            {
                id: 'SIXTH_DENSITY',
                title: 'الدرس الرابع: الكثافة السكانية',
                subtitle: 'توزيع السكان',
                description: 'حساب الكثافة وتوزيع السكان في العالم.',
                icon: '🗺️',
                color: 'bg-rose-50 hover:bg-rose-100 border-rose-200',
                textColor: 'text-rose-700',
                available: true
            },
            {
                id: 'UNIT_1_G6_ASSESSMENT',
                title: 'تقويم الوحدة الأولى',
                subtitle: 'مراجعة',
                description: 'اختبار في مفاهيم السكان.',
                icon: '📝',
                color: 'bg-slate-50 hover:bg-slate-100 border-slate-200',
                textColor: 'text-slate-700',
                available: true
            }
        ]
    },
    {
        id: 'UNIT_2_G6',
        title: 'الوحدة الثانية: الحضارة العربية الإسلامية',
        description: 'الدولة الأموية وتاريخ عمان',
        lessons: [
            {
                id: 'SIXTH_UMAYYAD_STATE',
                title: 'الدرس الأول: قيام الدولة الأموية',
                subtitle: 'خلفاء وفتوحات',
                description: 'تأسيس الدولة، أبرز خلفائها، والفتوحات الإسلامية.',
                icon: '🏳️',
                color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
                textColor: 'text-emerald-700',
                available: true
            },
            {
                id: 'OMAN_UMAYYAD',
                title: 'الدرس الثاني: عمان والأمويون',
                subtitle: 'علاقات سياسية',
                description: 'موقف عمان من الدولة الأموية واستقلالها.',
                icon: '⚔️',
                color: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
                textColor: 'text-orange-700',
                available: true
            },
            {
                id: 'OMAN_UMAYYAD_ACHIEVEMENTS',
                title: 'الدرس الثالث: المنجزات الحضارية',
                subtitle: 'ثقافة وعمارة',
                description: 'الإنجازات العمانية في العصر الأموي.',
                icon: '🏺',
                color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
                textColor: 'text-teal-700',
                available: true
            },
            {
                id: 'UNIT_2_G6_ASSESSMENT',
                title: 'تقويم الوحدة الثانية',
                subtitle: 'مراجعة',
                description: 'اختبار في التاريخ الأموي والعماني.',
                icon: '📜',
                color: 'bg-amber-50 hover:bg-amber-100 border-amber-200',
                textColor: 'text-amber-700',
                available: true
            }
        ]
    },
    {
        id: 'UNIT_3_G6',
        title: 'الوحدة الثالثة: المجتمع المدني',
        description: 'المشاركة والعمل التطوعي',
        lessons: [
            {
                id: 'SIXTH_CIVIL_SOCIETY',
                title: 'الدرس الأول: مؤسسات المجتمع المدني',
                subtitle: 'جمعيات وتطوع',
                description: 'دور الجمعيات الأهلية في خدمة المجتمع.',
                icon: '🤝',
                color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
                textColor: 'text-teal-700',
                available: true
            },
            {
                id: 'SIXTH_COMMUNITY_PARTICIPATION',
                title: 'الدرس الثاني: المشاركة المجتمعية',
                subtitle: 'واجب وطني',
                description: 'أهمية المشاركة في خدمة الوطن.',
                icon: '🙌',
                color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
                textColor: 'text-blue-700',
                available: true
            },
            {
                id: 'UNIT_3_G6_ASSESSMENT',
                title: 'تقويم الوحدة الثالثة',
                subtitle: 'مراجعة',
                description: 'اختبار في مفاهيم المجتمع المدني.',
                icon: '🌟',
                color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
                textColor: 'text-purple-700',
                available: true
            }
        ]
    }
];

export const UNITS_FIFTH: Unit[] = [
    // ... Grade 5 Units ...
    {
        id: 'UNIT_1_G5',
        title: 'الوحدة الأولى: كوكب الأرض',
        description: 'دراسة الأغلفة الطبيعية للأرض والموارد',
        lessons: [
            {
                id: 'FIFTH_SPHERES_CONCEPT',
                title: 'الدرس الأول: أغلفة كوكب الأرض (1)',
                subtitle: 'المفهوم والمكونات',
                description: 'المجموعة الشمسية والتعريف بأغلفة الأرض الأربعة.',
                icon: '🌌',
                color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
                textColor: 'text-indigo-700',
                available: true
            },
            {
                id: 'FIFTH_SPHERES_RELATION',
                title: 'الدرس الثاني: أغلفة كوكب الأرض (2)',
                subtitle: 'الأهمية والعلاقة',
                description: 'أهمية الأغلفة للحياة، العلاقات التفاعلية بينها، وتأثير الإنسان.',
                icon: '🌍',
                color: 'bg-green-50 hover:bg-green-100 border-green-200',
                textColor: 'text-green-700',
                available: true
            },
            {
                id: 'FIFTH_RESOURCES',
                title: 'الدرس الثالث: الموارد الطبيعية',
                subtitle: 'الأنواع والأهمية',
                description: 'الموارد المتجددة وغير المتجددة، التوزيع في عمان، وجهود الاستدامة.',
                icon: '💎',
                color: 'bg-amber-50 hover:bg-amber-100 border-amber-200',
                textColor: 'text-amber-700',
                available: true
            },
            {
                id: 'UNIT_1_G5_ASSESSMENT',
                title: 'أقيّم تعلمي (الوحدة الأولى)',
                subtitle: 'مراجعة شاملة',
                description: 'أنشطة تفاعلية لحل أسئلة نهاية الوحدة (ص 44-45).',
                icon: '📝',
                color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
                textColor: 'text-purple-700',
                available: true
            }
        ]
    },
    {
        id: 'UNIT_2_G5',
        title: 'الوحدة الثانية: الدولة الإسلامية وعُمان',
        description: 'الدولة في عهد الرسول ﷺ وعلاقة أهل عمان بالإسلام',
        lessons: [
            {
                id: 'FIFTH_ISLAMIC_STATE',
                title: 'الدرس الأول: الدولة الإسلامية',
                subtitle: 'عهد الرسول ﷺ',
                description: 'هجرة الرسول للمدينة، بناء المسجد، الوثيقة، وحماية الدولة.',
                icon: '🕌',
                color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
                textColor: 'text-emerald-700',
                available: true
            },
            {
                id: 'FIFTH_OMAN_PROPHET',
                title: 'الدرس الثاني: عُمان في عهد الرسول',
                subtitle: 'إسلام أهل عمان',
                description: 'قصة إسلام مازن بن غضوبة، ورسالة الرسول لملكي عمان.',
                icon: '📜',
                color: 'bg-amber-50 hover:bg-amber-100 border-amber-200',
                textColor: 'text-amber-700',
                available: true
            },
            {
                id: 'FIFTH_OMAN_PERSONALITIES',
                title: 'الدرس الثالث: شخصيات عمانية',
                subtitle: 'صحابة من عمان',
                description: 'مازن بن غضوبة، كعب بن برشة، ودورهم في نشر الإسلام.',
                icon: '👥',
                color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
                textColor: 'text-blue-700',
                available: true
            },
            {
                id: 'UNIT_2_G5_ASSESSMENT',
                title: 'أقيّم تعلمي (الوحدة الثانية)',
                subtitle: 'مراجعة وتقييم',
                description: 'اختبار تفاعلي شامل لمواضيع الوحدة.',
                icon: '✨',
                color: 'bg-yellow-50 hover:bg-yellow-100 border-yellow-200',
                textColor: 'text-yellow-700',
                available: true
            }
        ]
    },
    {
        id: 'UNIT_3_G5',
        title: 'الوحدة الثالثة: وطني عُمان.. الحقوق والواجبات',
        description: 'حقوق المواطن وواجباته والمؤسسات الوطنية',
        lessons: [
            {
                id: 'FIFTH_RIGHTS_DUTIES',
                title: 'الدرس الأول: حقوق المواطن وواجباته',
                subtitle: 'المواطنة الصالحة',
                description: 'التمييز بين الحقوق والواجبات، وأمثلة عليها من واقع الحياة.',
                icon: '⚖️',
                color: 'bg-teal-50 hover:bg-teal-100 border-teal-200',
                textColor: 'text-teal-700',
                available: true
            },
            {
                id: 'FIFTH_INSTITUTIONS_CONVENTIONS',
                title: 'الدرس الثاني: الحقوق والمؤسسات',
                subtitle: 'حماية ورعاية',
                description: 'دور المؤسسات الوطنية والاتفاقيات الدولية في حماية حقوق الإنسان والطفل.',
                icon: '🏛️',
                color: 'bg-cyan-50 hover:bg-cyan-100 border-cyan-200',
                textColor: 'text-cyan-700',
                available: true
            },
            {
                id: 'UNIT_3_G5_ASSESSMENT',
                title: 'أقيّم تعلمي (الوحدة الثالثة)',
                subtitle: 'تقييم شامل',
                description: 'اختبار وتطبيقات على الحقوق والواجبات والمؤسسات.',
                icon: '✅',
                color: 'bg-rose-50 hover:bg-rose-100 border-rose-200',
                textColor: 'text-rose-700',
                available: true
            }
        ]
    }
];
