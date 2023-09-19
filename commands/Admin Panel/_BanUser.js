/*CMD
  command: /BanUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *📌Send Telegram User Id To Ban User*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_chat")
if (user.telegramid == admin) {
  Bot.sendMessageToChatWithId(message, "You Have Been Banned By Owner")
  var ba = Libs.ResourcesLib.anotherUserRes("balance", "" + message + "")
  Bot.setProperty("Balance" + message + "", ba.value(), "string")
  ba.add(-ba.value())
  Bot.sendMessage("User " + message + " Has Been Banned")
  Bot.setProperty("Ban" + message + "", "Ban", "string")
} else {
  Bot.sendMessage("You Are Not Admin")
}

