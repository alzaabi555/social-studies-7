
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey && apiKey.length > 0 && !apiKey.includes("your_api_key")) {
  try {
    ai = new GoogleGenAI({ apiKey: apiKey });
  } catch (e) {
    console.error("Failed to initialize GoogleGenAI:", e);
  }
}

export const askAITutor = async (question: string): Promise<string> => {
  // Offline Check
  if (!navigator.onLine) {
    return "أنا أعمل حالياً في وضع 'عدم الاتصال'. للأسف، ميزة المعلم الذكي تحتاج إلى إنترنت، لكن بقية الدروس والأنشطة تعمل بكفاءة تامة!";
  }

  if (!ai) {
    return "خدمة المعلم الذكي غير مفعلة (مفتاح الربط مفقود). يرجى الاستمتاع بالدروس التفاعلية.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `
      أنت معلم ذكي لمادة الدراسات الاجتماعية (المنهج العماني).
      تحدث بأسلوب مشجع وتفاعلي.
      اربط الإجابات بالبيئة العمانية.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: question,
      config: { systemInstruction: systemInstruction }
    });

    return response.text || "لم أتمكن من الإجابة حالياً.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ في الاتصال بالمعلم الذكي.";
  }
};