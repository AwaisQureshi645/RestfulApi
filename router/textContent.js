// usersRoutes.js

const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
const { replaceWordsWithIcons } = require("./icons");

dotenv.config();
// for text content
router.post("/generate-content", async (req, res) => {
  const { prompt } = req.body; // Assuming req.body has a 'prompt' property
  const promptForPost = `Create a  Facebook post about this content ${prompt} exciting. post content should be 4 to 5 lines `;
  // API Key setup (assuming you have it in environment variable)
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  // console.log(apiKey)
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    // const prompt = "Write a story about a magic backpack."
    const result = await model.generateContent(promptForPost);
    const response = await result.response;
    const text = response.text();
    // console.log(text);
    // add icons in the text content
    const textwithIcon = replaceWordsWithIcons(text);
    console.log(textwithIcon);

    res.send({ textwithIcon });
  } catch (e) {
    console.log("error text genertion ", e);
  }
});

// for hashtags
router.post("/generate-hashtags", async (req, res) => {
  const { prompt } = req.body; // Assuming req.body has a 'prompt' property
  // API Key setup (assuming you have it in environment variable)
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const promptData = `use this content ${prompt} write the relatived to  this content generate a atleast 10 hashtag that is suitable for the content`;
  // console.log(apiKey)
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    // const prompt = "Write a story about a magic backpack."
    const result = await model.generateContent(promptData);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.send({ text });
  } catch (e) {
    console.log("error hashtags genertion ", e);
  }
});

module.exports = router;
