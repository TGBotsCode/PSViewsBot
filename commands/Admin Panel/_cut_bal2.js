/*CMD
  command: /cut_bal2
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
  Bot.runCommand("/cut_bal2")
  return
}
let amount = parseFloat(message)
let tgid = User.getProperty("editid")
let bal = Libs.ResourcesLib.anotherUserRes("balance", tgid)
if (bal.value() < amount) {
  bal.set(0)
} else {
  bal.remove(amount)
}
Bot.sendMessage(
  "💰Amount Removed Successfully.\n\nDetails Below\n\n*🆔 User Id :-* " +
    tgid +
    "\n💰 Remaining Balance   :- " +
    bal.value()
)
Bot.sendMessageToChatWithId(
  tgid,
  "*Admin Just Removed " +
    message +
    " Points From Your Account\nIf You Have any Queries Just Forward this Message to Admin\nAdmin Id :- @m_khan309*"
)
//@m_khan309 replace this username with Your Username

