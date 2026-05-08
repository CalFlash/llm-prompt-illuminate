import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import OpenAI from "openai";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const readmeText = fs.readFileSync("./Readme.md", "utf8");
const notesText = fs.readFileSync("./Dataset.notes", "utf8");
const jsonText = fs.readFileSync("./Losangeles_finance.json", "utf8");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body style="font-family: Arial; max-width: 800px; margin: 40px auto;">
        <h1>LA Finance Chat</h1>
        <textarea id="message" style="width:100%;height:140px;"></textarea>
        <br/><br/>
        <button onclick="sendMessage()">Ask</button>
        <pre id="reply" style="white-space:pre-wrap;border:1px solid #ccc;padding:16px;margin-top:20px;"></pre>

        <script>
          async function sendMessage() {
            const message = document.getElementById('message').value;
            document.getElementById('reply').textContent = 'Thinking...';

            const res = await fetch('/chat', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ message })
            });

            const data = await res.json();
            document.getElementById('reply').textContent = data.reply;
          }
        </script>
      </body>
    </html>
  `);
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message || "";

    const response = await client.responses.create({
      model: "gpt-5.5",
      input: [
        {
          role: "system",
          content: `
You are a finance assistant.

Use the project files below as your source of truth.

README:
${readmeText}

NOTES:
${notesText}

JSON DATA:
${jsonText}

Rules:
- Answer using the JSON data when possible.
- If the answer is not in the data, say you do not see it in the provided files.
- Be clear and simple.
`
        },
        {
          role: "user",
          content: userMessage
        }
      ]
    });

    res.json({ reply: response.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply: "Server error. Check your API key and file names."
    });
  }
});

app.listen(port, () => {
  console.log("Running on http://localhost:" + port);
});

