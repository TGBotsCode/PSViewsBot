/*CMD
  command: /add_bal2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_chat")
if (user.telegramid != admin) {
  return
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*")
  Bot.runCommand("/add_bal2")
  return
}
let amount = parseFloat(message)
let tgid = User.getProperty("editid")
let bal = Libs.ResourcesLib.anotherUserRes("balance", tgid)
bal.add(amount)
Bot.sendMessage(
  "*💰Amount Added Successfully.\nDetails Below*\n\n*🆔 User Id :-* " +
    tgid +
    "\n\n*💰Amount Added :- *" +
    amount +
    " *Points*\n\n*💰 Balance   :- " +
    bal.value() +
    "*"
)
Bot.sendMessageToChatWithId(
  tgid,
  "*You have just received " + message + " Points from admin*"
)

