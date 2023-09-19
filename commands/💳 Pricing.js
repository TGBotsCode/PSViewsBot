/*CMD
  command: 💳 Pricing
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
  [{ text: "Deposit", url: "tg://user?id=" + admin }],
  [{ text: "🔙 Back", callback_data: "/account" }]
]
Api.editMessageText({
  chat_id: request.message.chat.id,
  message_id: request.message.message_id,
  text:
    "<b>💎 Pricing 💎</b>\n\n👉 Choose one of the views packages and pay its cost via provided payment methods.\n\n📜 Packages:\n➊ 📦 300K Points for 0.5$ (0.007$ per K)\n➋ 📦 600K Points for 1.0$ (0.007$ per K)\n➌ 📦 1200K Points for 2.0$ (0.007$ per K) \n➍ 📦 1800K Points for 3.0$ (0.007$ per K) \n➎ 📦 3000K Points for 5.0$ (0.007$ per K) \n➏ 📦 7000K Points for 10.0$ (0.006$ per K) \n\n<b>💰 Pay with Bitcoin, USDT, TRON, BUSD,  ... 👉🏻 <a href='tg://user?id=1280356202'>Maharam</a> </b>\n\n<b>💳️ Pay with binance, Paytm, Phonepe, Google Pay... 👉🏻  <a href='tg://user?id=1280356202'>Maharam</a> </b>\n\n🎁 Bonus:\nCryptocurrency: 10%\nPayeer and Perfect Money: 5%\nOther methods: 0%",
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: bt5 }
})

