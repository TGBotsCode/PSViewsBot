/*CMD
  command: 👤 My Account
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /account
CMD*/

var bt5 = [
  [
    { text: "💳 Pricing", callback_data: "💳 Pricing" },
    { text: "📜 Help", callback_data: "📜 Help" }
  ]
];

var balance = Libs.ResourcesLib.userRes("balance");
var lib = Libs.ReferralLib;
var refList = lib.currentUser.refList.get();
const info =
  "*👤 My Account* \n\n*👤 Name*: `" +
  user.first_name +
  "`\n*🎟User ID*: `" +
  user.telegramid +
  "`\n*👁️‍🗨️ Balance  " +
  balance.value().toFixed(2) +
  " Points*";

if (request.message && request.message.chat) {
  Api.editMessageText({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id,
    text: info,
    parse_mode: "Markdown",
    disable_web_page_preview: true, // Added this line to prevent the error
    reply_markup: { inline_keyboard: bt5 }
  });
} else {
  Api.sendMessage({
    chat_id: user.telegramid,
    text: info,
    parse_mode: "Markdown",
    disable_web_page_preview: true, // Added this line to prevent the error
    reply_markup: { inline_keyboard: bt5 }
  });
}

