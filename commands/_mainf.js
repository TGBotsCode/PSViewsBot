/*CMD
  command: /mainf
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ✖️ cancel
CMD*/

var userstat = User.getProperty("status")
var referbonus = User.getProperty("referbonus")
if (
  (userstat == "member") |
  (userstat == "administrator") |
  (userstat == "creator")
) {
  if (referbonus == undefined) {
    let refUser = Libs.ReferralLib.currentUser.attractedByUser()
    if (refUser) {
      var balanceref = Libs.ResourcesLib.anotherUserRes(
        "balance",
        refUser.telegramid
      )
      balanceref.add(400)
      Bot.sendMessageToChatWithId(
        refUser.chatId,
        "_You have received 400 Points from " + user.first_name + "_"
      )
      User.setProperty("referbonus", user.telegramid, "integer")
    }
  }

  var balance = Libs.ResourcesLib.userRes("balance")
  var withdrawn = Libs.ResourcesLib.userRes("withdrawn")
  var ref = Libs.ResourcesLib.userRes("referral")
  var msgid = User.getProperty("msgid")
  Api.deleteMessage({
    message_id: msgid
  })
  Bot.sendKeyboard(
    "👁‍🗨 Order View,👍 Order Reactions,\n👤 My Account,🎉 Bonus,📞 Support\n🌐 Statistics, 👨‍👩‍👧‍👦 Refer",
    "*  Welcome to " +
      bot.name +
      "!🔥*\n\nHere You can Buy Telegram Post Views And Reactions.\n\n🌐 Powered By [Telegram Bot Codes](https://t.me/TGBotsCode)",
    { disable_web_page_preview: true }
  )
}
if (userstat == "left") {
  Bot.runCommand("/start")
}

