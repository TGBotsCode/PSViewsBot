/*CMD
  command: autor2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Order

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var link = User.getProperty("Link")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var amt = message / 60
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
  } else {
  }
  if (message < 3000) {
    Bot.sendMessage("_❌ Minimum Order Is 50 Reactions_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Order " + balance.value().toFixed(6) + " Reactions_"
      )
    } else {
     var apikey = Bot.getProperty("apikey")
      var url =    "https://mysmmshop.com/api/v2?key="+apikey+"&action=add&service=2779&link=" +
        link +
        "&quantity=" +
        amt +
        ""

      HTTP.get({
        url: url,
        success: "/onSuccess"
      })
      balance.add(-message)
      var usernamei =
        "<a href='tg://user?id=" +
        user.telegramid +
        " '>" +
        user.first_name +
        "</a>"
      Api.sendMessage({
        chat_id: "@ps_smm",
        text:
          "📄<b>New Order Received From</b> " +
          usernamei +
          "  \n\n</b>✅ Status = Processing...\n🆔 User ID = </b> <code>" +
          user.telegramid +
          "</code>\n</b>👍 Amount = " +
          amt +
          " Reactions\n\n🔗 Post Link =\n " +
          link +
          "\n\n👮🏻‍♂ Bot = @" +
          bot.name +
          "</b>",
        parse_mode: "html",
        disable_web_page_preview: true
      })
    }
  }
}

