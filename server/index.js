
import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || "gemini-3.8-flash";

if (!API_KEY) {
  console.error("GEMINI_API_KEY is missing in server/.env");
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: API_KEY,
});

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "100kb" }));

const SYSTEM_INSTRUCTION = `
You are CareFlow AI, a friendly healthcare information assistant.

Your responsibilities:
- Answer general healthcare and wellness questions.
- Explain common medical terms in simple language.
- Provide general information about symptoms without diagnosing.
- Explain when someone should seek professional medical attention.
- Help users understand general clinic and appointment procedures.

Important safety rules:
- Never diagnose a disease or medical condition.
- Never prescribe medicines or recommend dosages.
- Never tell users to start or stop medication.
- Do not claim to be a doctor.
- Do not invent clinic names, services, timings, or contact details.
- If clinic-specific information is unavailable, say that it needs to be confirmed with the clinic.
- For potentially life-threatening symptoms, advise the user to seek emergency medical care immediately.
- Do not request personal medical information.

Communication style:
- Be polite, friendly, and supportive.
- Use simple English.
- Keep answers clear and easy to understand.
- Use bullet points when helpful.

You provide general information only, not medical diagnosis or treatment.
`;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CareFlow AI backend is running.",
  });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    // Validate message
    if (
      typeof message !== "string" ||
      !message.trim() ||
      message.length > 4000
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter a message between 1 and 4000 characters.",
      });
    }

    // Validate conversation history
    if (!Array.isArray(history) || history.length > 20) {
      return res.status(400).json({
        success: false,
        message: "Invalid conversation history.",
      });
    }

    const validHistory = history.map((item) => {
      if (
        !item ||
        !["user", "assistant"].includes(item.role) ||
        typeof item.text !== "string" ||
        !item.text.trim() ||
        item.text.length > 4000
      ) {
        throw new Error("Invalid conversation history item.");
      }

      return {
        role: item.role === "assistant" ? "model" : "user",
        parts: [{ text: item.text }],
      };
    });

    const contents = [
      ...validHistory,
      {
        role: "user",
        parts: [{ text: message.trim() }],
      },
    ];

    const response = await ai.models.generateContent({
      model: MODEL,
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    });

    const reply = response.text;

    if (!reply) {
      return res.status(502).json({
        success: false,
        message: "The AI could not generate a response. Please try again.",
      });
    }

    return res.status(200).json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("Gemini API error:", error.message);

    return res.status(500).json({
      success: false,
      message:
        "Unable to connect to the AI assistant. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`CareFlow AI backend running at http://localhost:${PORT}`);
});
