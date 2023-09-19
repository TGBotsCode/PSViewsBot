/*CMD
  command: /loginme
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

var admin = 1280356202
if (user.telegramid == admin) {
  Bot.setProperty("admin_chat", user.telegramid, "string")

  Api.sendMessage({
    chat_id: user.telegramid,
    text:
      "<b> <a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.first_name +
      "</a> You are now an admin.</>",
    parse_mode: "html"
  })
} else {
  Bot.sendMessage("*Oops, it seems we already have admins*")
}

