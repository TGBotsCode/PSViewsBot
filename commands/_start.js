/*CMD
  command: /start
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

var us = Bot.getProperty("broadcasting", { list: {} })
if (!us.list[user.telegramid]) {
  us.list[user.telegramid] = { user_id: user.id, user_tg: user.telegramid }
  Bot.setProperty("broadcasting", us, "json")
}
var MBan = Bot.getProperty("Ban"+user.telegramid)
if(MBan == "Ban"){
Bot.sendMessage("*You Are Banned*")
return
}else
var button = [
  [{ title: "Join Logs", url: "https://t.me/ps_smm" }],
  [{ title: "Join Developer's Channel", url: "https://t.me/TGBotsCode" }],
  [{ title: "✅ Joined", command: "/join" }]
]
Bot.sendInlineKeyboard(
  button,
  "*💡You Must Join Our All Channels To Get Payment\n\nAfter Joining All Channels, Click the ✅ Joined Button*"
)

function hello(message) {
  var greetings = ""
  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite Yourself ❌*")
}

function doAttracted(channel) {
  hello("Referral: " + channel)
}

function doAttractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(0.0)
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "*💹 A New Referral joined the bot using\nyour referral link ::   *" +
      "[" +
      user.telegramid +
      "]" +
      "(" +
      "tg://user?id=" +
      user.telegramid +
      ")" +
      "*\n *"
  )
}

function doAlreadyAttracted() {
  // Bot.sendMessage("*You Already Started The Bot ❌*")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAttractedByUser: doAttractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
var welco = User.getProperty("welco")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
  Api.sendMessage({
    chat_id: 1280356202, // Replace with the admin's user ID
    text:
      " <b> ♨️ New User Notification ♨️</b> \n\n👤<b>User Link : </b> <a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.first_name +
      "</a>\n\n🔰 Username = @" +
      user.username +
      "\n🆔<b> User ID :</b> <code>" +
      user.telegramid +
      "</code>\n\n🌝 <b>Total User's Count: " +
      status.value() +
      "</b>",
    parse_mode: "html",
    disable_web_page_preview: true
})
}
User.setProperty("welco", user.telegramid, "text")
