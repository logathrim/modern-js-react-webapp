const express = require("express");
const bodyParser = require("body-parser");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const openai = new OpenAI();

const port = process.env.PORT || 3000;

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .post("/ai", async (req, res) => {
    try {
      const { message } = req.body;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "โปรดตอบกลับเป็นภาษาไทยเสมอ" },
          {
            role: "user",
            content: message,
          },
        ],
      });

      res.json({ message: completion.choices[0].message });
    } catch (error) {
      console.error("Error with OpenAI API request:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })
  .listen(port, () => console.log("> App on port:", port));
