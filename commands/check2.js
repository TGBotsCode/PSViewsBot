/*CMD
  command: check2
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

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "🥰 Thanks For Joining us",
  show_alert: true
})
Bot.runCommand("/mainf")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*❌ Must join all channel*")
}
