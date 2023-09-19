/*CMD
  command: 📜 Help
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_chat")
var bt5 = [
  [{ text: "Maharam", url: "tg://user?id=" + admin }],
  [{ text: "🔙 Back", callback_data: "/account" }]
]
Api.editMessageText({
  chat_id: request.message.chat.id,
  message_id: request.message.message_id,
  text:
    "❔ <b>Frequently Asked questions</b>\n\n• <b>Are the views real?</b>\nNo, the views are completely fake and no real observations are made.\n\n• <b>What is the minimum and maximum views order for a single post?</b>\nThe minimum and maximum views order for a post is 100 and 30000 views, respectively.\n\n• <b>Is it possible to register a channel and view automatically?</b>\nYes, first set the bot as your channel admin and then register your channel in the bot and specify the amount of views. As soon as a post is published on your channel, the view starts automatically.\n\n• <b>What is the average speed of views?</b>\nEstimating views speed is difficult because the speed can vary depending on the network status and the amount of orders, but on average 40 to 80 views per minute is possible for one post.\n\n• <b>How to increase your credit?</b>\n1- Invite your friends to Bot, for each invitation, 400 free views will be added to your account.\n2- Buy one of the views packages. We accept PayPal, Paytm, Payeer, Bitcoin, Tether and other Cryptocurrencies.\n\n• <b>Is it possible to transfer balance to other users?</b>\nYes, if your balance is more than 10k and you want to transfer all of them, you can send a request to support.\n\n<b>🆘 In case you have any problem, contact 👇 </b>",
  parse_mode: "HTML", 
  disable_web_page_preview: true, 
  reply_markup: { inline_keyboard: bt5 }
})

