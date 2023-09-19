/*CMD
  command: 📞 Support
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
*📞 You are now in direct contact with our Administrator*
You can send here any message you want to submit, the administrator will receive it and send an answer directly here in chat!
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /support
CMD*/

var admin = Bot.getProperty("admin_chat")
Bot.sendMessage("✅ Message Sent to Admin")

Api.sendMessage({
  chat_id: admin,
  text:
    "*New Support Message\n\n🤴Name:*  [" +
    user.first_name +
    "](https://t.me/" +
    user.username +
    ")\n*💡Id:* `" +
    user.telegramid +
    "`\n⛱️Profile [Link](tg://user?id=" +
    user.telegramid +
    ")\n\n*📥Message: * " +
    message +
    "",
  parse_mode: "Markdown", // Add this line to format the text as HTML
  disable_web_page_preview: true
})

