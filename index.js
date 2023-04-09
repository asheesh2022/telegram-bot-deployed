const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const TOKEN = '5914528810:AAFIpLqitVZ0s4KgWxJVRvtIEQv_bo_8qkU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, {polling: true});

// Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// Listen for any kind of message. There are different kinds of
// messages.

bot.getMe().then((botInfo) => {
    // Check that the bot username is defined
    if (botInfo.username) {
      // Construct the sharing URL
      const sharingUrl = `https://telegram.me/${botInfo.username}`;
  
      // Print the sharing URL
      console.log(sharingUrl);
    } else {
      console.log('Unable to retrieve bot username');
    }
  }).catch((error) => {
    console.log('Error retrieving bot information:', error);
  });


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
//   msg.deleteMessage()
  bot.sendMessage(chatId, 'chal na laude gao se aya hai kya');
//   msg.deleteMessage()

});