/*CMD
  command: Broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *📌Send Your Message For Broadcasting*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_chat")
if (user.telegramid == admin) {
  if (request.video) {
    var us = Bot.getProperty("broadcasting", { list: {} })
    var msg = message
    for (var i in us.list) {
      var ase = us.list[i].user_id
      var id = us.list[i].user_tg

      var url = Libs.Webhooks.getUrlFor({
        command: "/broadcast2",
        user_id: ase
      })
      HTTP.post({
        url: url,
        body: {
          msg: msg,
          captions: request.caption,
          video: request.video.file_id,
          id: id
        }
      })
    }
  } else if (request.photo[0]) {
    var key = Bot.getProperty("admin_chat")
    var us = Bot.getProperty("broadcasting", { list: {} })
    var msg = message
    for (var i in us.list) {
      var ase = us.list[i].user_id
      var id = us.list[i].user_tg

      var url = Libs.Webhooks.getUrlFor({
        command: "/broadcast2",
        user_id: ase
      })
      HTTP.post({
        url: url,
        body: {
          msg: msg,
          caption: request.caption,
          image: request.photo[0].file_id,
          id: id
        }
      })
    }
  } else {
    var key = Bot.getProperty("admin_chat")
    var us = Bot.getProperty("broadcasting", { list: {} })
    var msg = message
    for (var i in us.list) {
      var ase = us.list[i].user_id
      var url = Libs.Webhooks.getUrlFor({
        command: "/broadcast2",
        user_id: ase
      })
      HTTP.post({
        url: url,
        body: {
          ktp: msg
        }
      })
    }
  }
} else {
  Bot.sendMessage(    "*⚠️ Warning: You are To Broadcast without authorization. Your actions may be monitored.*")
  Bot.sendMessageToChatWithId(
        admin,
        "*#AutoBan\nA User is trying To Broadcast   without permission*.\n*Use* /BanUser *to Ban The User*\n*🍰User id: * `" +
        user.telegramid +
        "`\n\nTrying To Broadcast\n\n"+message
    );
}

