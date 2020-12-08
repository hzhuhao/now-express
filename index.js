process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const token = '1439332010:AAFBRC15eipigQmRUsRcDwGUKQCYep_Nrkc';

const bot = new TelegramBot(token);
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'telegram bot');
});