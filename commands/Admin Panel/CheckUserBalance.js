/*CMD
  command: CheckUserBalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *📌Send User Telegram Id To Check User Balance*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

//var admin = Bot.getProperty("admin_chat")
if (message=="🚫 Cancel"){
Bot.runCommand("🧑🏻‍💻Admin");
}else{
var id = message; 
var user_bal = Libs.ResourcesLib.anotherUserRes("balance" , id);
Bot.sendMessage("*💰User Balance = "+user_bal.value().toFixed(8)+"*")
}
