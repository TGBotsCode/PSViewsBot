/*CMD
  command: 🌐 Statistics
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

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)

  var stats =
    "*📊 Total members : " +
    status +
    " Users\n\n👁️‍🗨️ Total successful orders : " +
    userPayment.value().toFixed(0) +
    " Views *"

  Bot.sendMessage(stats)
}
