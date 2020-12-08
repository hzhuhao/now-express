process.env.NTBA_FIX_319 = 1;
const express = require("express");
const TelegramBot = require('node-telegram-bot-api');
const token = '1439332010:AAFBRC15eipigQmRUsRcDwGUKQCYep_Nrkc';
const app = express();

const port = 5000;

const bot = new TelegramBot(token, {
  polling: true
});
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'telegram bot');
});

// Body parser
app.use(express.urlencoded({ extended: false }));

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to a basic express App");
});

// Mock API
app.get("/users", (req, res) => {
  res.json([
    { name: "William", location: "Abu Dhabi" },
    { name: "Chris", location: "Vegas" }
  ]);
});

app.post("/user", (req, res) => {
  const { name, location } = req.body;

  res.send({ status: "User created", name, location });
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
