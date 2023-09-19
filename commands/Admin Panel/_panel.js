/*CMD
  command: /panel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_chat")
if (user.telegramid == admin) {
  var button = [
    [{ title: "🎙️Broadcast", command: "Broadcast" }],
    [
      { title: "🔒 Ban User", command: "/BanUser" },
      { title: "🔓Unban User", command: "/UnbanUser" }
    ],
    [{ title: "💼 Check User Balance", command: "CheckUserBalance" }],
    [
      { title: "➖ Remove Balance", command: "LessBalance" },
      { title: "➕ Add Balance", command: "AddBalance" }
    ],
    [{ title: "🔄 Log Out", command: "/close" }]
  ]
  Bot.sendInlineKeyboard(
    button,
    "Welcome [" +
      user.first_name +
      "](tg://user?id=" +
      user.telegramid +
      ") To Your Panel\n\n🌐Coded By*©* [Maharam](https://t.me/m_khan309)",
    { disable_web_page_preview: true }
  )
} else {
  Bot.sendMessageToChatWithId(
    user.telegramid,
    "*⚠️ Warning: You are entering an admin panel without authorization. Your actions may be monitored.*"
  )
  Bot.sendMessageToChatWithId(
    admin,
    "*#AutoBan\nA User is entering your creator panel without permission*.\n*Use* /BanUser *to Ban The User*\n*🍰User id: * `" +
      user.telegramid +
      "`"
  )
}

