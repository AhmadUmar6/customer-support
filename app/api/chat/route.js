import Groq from "groq-sdk";
import { NextResponse } from 'next/server';

const API_KEY = process.env.GROQ_API_KEY;
const groq = new Groq({ apiKey: API_KEY });

const systemPrompts = {
  English: "You are a helpful support assistant. Provide clear and concise answers strictly in English. Do not use any other language.",
  Spanish: "Eres un asistente de soporte útil. Proporciona respuestas claras y concisas estrictamente en español. No uses ningún otro idioma.",
  French: "Vous êtes un assistant de support utile. Fournissez des réponses claires et concises strictement en français. N'utilisez aucune autre langue.",
};


export async function POST(request) {
  try {
    const data = await request.json();
    const { messages, language } = data;

    const systemPrompt = systemPrompts[language] || systemPrompts.English;

    const response = await groq.chat.completions.create({
      model: 'mixtral-8x7b-32768',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      max_tokens: 800,
      stream: false,
    });

    const assistantMessage = response.choices[0].message.content;

    return new NextResponse(assistantMessage);
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: 'Error generating response' }), { status: 500 });
  }
}