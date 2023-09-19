/*CMD
  command: 🎉 Bonus
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /bonus
CMD*/

function canRun() {
  var last_run_at = User.getProperty("last_run_at")
  if (!last_run_at) {
    return true
  }

  var minutes = (Date.now() - last_run_at) / 1000 / 60

  var minutes_in_day = 24 * 60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 60)
  next -= wait_hours * 60
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
  if (minutes < minutes_in_day) {
    Bot.sendMessage(
      "*📛 You have already received a bonus Today\n\n▶️ Come Back After ⏳ " +
        wait_hours +
        " h " +
        wait_minutes +
        " m " +
        seconds +
        " s*"
    )
    return
  }
  return true
}

if (!canRun()) {
  return
}
User.setProperty("last_run_at", Date.now(), "integer")

let bonus = Libs.Random.randomInt(50, 100)
let balance = Libs.ResourcesLib.userRes("balance")
balance.add(+bonus)
Bot.sendMessage("*🎉 Congratulation , you Received " + bonus + " Points*")
var bt5 = [[{ text: "🎁 Claim Your Bonus", url: "tg://user?id=6570238406" }]]
Api.sendMessage({
  chat_id: "@ps_smm",
  text:
    "<b>♨️ New User Claimed Bonus ♨️</b>\n\n👤<b>User Link : </b> <a href='tg://user?id=" +
    user.telegramid +
    "'>" +
    user.first_name +
    "</a>\n<b>🆔 User ID :</b> <code>" +
    user.telegramid +
    "</code>\n<b>👁️‍🗨️ Amount = " +
    bonus +
    " Points</b>",
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: bt5 }
})

