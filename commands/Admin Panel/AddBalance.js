/*CMD
  command: AddBalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *📌Send Telegram User Id of that User To Add Balance*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_chat")
if (user.telegramid != admin) {
  return
}
let msg = message
User.setProperty("editid", msg, "integer")
let tgid = User.getProperty("editid")
// telegramid - it is telegram id for another user
let bal = Libs.ResourcesLib.anotherUserRes("balance", tgid)
Bot.sendMessage(
  "*🆔 User Id :-* " + tgid + " \n\n💰 Balance   :- " + bal.value()
)
Bot.sendMessage("🥰 *Send me Amount to add to User's Balance *")

Bot.runCommand("/add_bal2")

