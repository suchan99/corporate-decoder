const OPENAI_URL = "https://api.openai.com/v1/responses";

function setCors(req, res) {
  const allowed = (process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map(v => v.trim())
    .filter(Boolean);
  const origin = req.headers.origin || "";

  if (allowed.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function outputText(response) {
  const parts = [];
  for (const item of response.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && typeof content.text === "string") {
        parts.push(content.text);
      }
    }
  }
  return parts.join("").trim();
}

export default async function handler(req, res) {
  setCors(req, res);

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed." });

  const allowed = (process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map(v => v.trim())
    .filter(Boolean);
  const origin = req.headers.origin || "";
  if (allowed.length && !allowed.includes(origin)) {
    return res.status(403).json({ error: "Origin not allowed." });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Server is missing OPENAI_API_KEY." });

  const text = typeof req.body?.text === "string" ? req.body.text.trim() : "";
  if (!text) return res.status(400).json({ error: "Enter a workplace phrase to decode." });
  if (text.length > 500) return res.status(400).json({ error: "Please keep the phrase under 500 characters." });

  const schema = {
    type: "object",
    additionalProperties: false,
    properties: {
      translation: { type: "string" },
      intent: { type: "string" },
      action: { type: "string" },
      risk: { type: "string" },
      survival: { type: "string" }
    },
    required: ["translation", "intent", "action", "risk", "survival"]
  };

  const body = {
    model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
    instructions: [
      "You are Corporate Decoder, a concise workplace-language interpreter.",
      "Interpret ordinary workplace, meeting, email, chat, governance, project, and technology language.",
      "Do not claim to know a person's hidden thoughts or actual intent. Phrase intent as a likely communication purpose based only on the text.",
      "Keep each field concise and useful.",
      "The risk field must begin with one emoji and a short label, such as 🟢 Informational, 🟡 Ambiguity, 🔴 Scope Creep, or 🟣 Context Needed.",
      "The survival note may be lightly humorous but must remain workplace-safe and non-insulting."
    ].join(" "),
    input: `Decode this workplace phrase: ${JSON.stringify(text)}`,
    text: {
      format: {
        type: "json_schema",
        name: "corporate_decode",
        strict: true,
        schema
      }
    },
    max_output_tokens: 350
  };

  try {
    const aiResponse = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const json = await aiResponse.json();
    if (!aiResponse.ok) {
      console.error("OpenAI error", json);
      return res.status(502).json({ error: "AI decoder is temporarily unavailable." });
    }

    const textOutput = outputText(json);
    if (!textOutput) return res.status(502).json({ error: "AI decoder returned an empty response." });

    const decoded = JSON.parse(textOutput);
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json(decoded);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Unable to decode that phrase right now." });
  }
}
