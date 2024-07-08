const express = require("express");
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
const { replaceWordsWithIcons } = require("./router/icons");
const textContent =require('./router/textContent')
// Middleware setup for parsing JSON and URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config(); // Load API key from a .env file

// const port = 3000;
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post('/generate-content',textContent)
app.post('/generate-hashtags',textContent)



// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
