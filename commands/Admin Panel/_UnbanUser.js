/*CMD
  command: /UnbanUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *📌Send Telegram User Id To Unban User*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_chat")
if (user.telegramid == admin) {
  Bot.sendMessageToChatWithId(message, "You Have Been UnBanned By Owner")
  var ba = Libs.ResourcesLib.anotherUserRes("balance", "" + message + "")
  var bbal = Bot.getProperty("Balance" + message)
  ba.add(+bbal)
  Bot.sendMessage("User " + message + " Has Been UnBanned")
  Bot.setProperty("Ban" + message, "UnBan", "string")
} else {
  Bot.sendMessage("You Are Not Admin")
}

