
import { GoogleGenAI } from "@google/genai";
import { DEVELOPER_NAME, DEVELOPER_TITLE, BIO, PROJECTS, SKILLS } from "../constants";

const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for ${DEVELOPER_NAME}, a ${DEVELOPER_TITLE}.
Your goal is to answer questions about ${DEVELOPER_NAME}'s professional life, skills, and projects based on the provided information.

Background:
${BIO}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}. Tech: ${p.tags.join(', ')}`).join('\n')}

Guidelines:
- Be professional, friendly, and concise.
- If you don't know the answer based on the context, politely suggest the user to contact ${DEVELOPER_NAME} via the contact form.
- Keep responses under 3 sentences.
`;

export const askAssistant = async (prompt: string): Promise<string> => {
  // CRITICAL: Initialize right before making the call as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

  if (!process.env.API_KEY) {
    return "The AI assistant is currently offline because the API key is missing.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 250,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops, something went wrong while talking to the AI. Please try again later.";
  }
};
