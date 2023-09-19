/*CMD
  command: /broadcast2
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
var polll = [[{ text: "🗣️ ᴛᴀʟᴋ ᴛᴏ ᴀᴅᴍɪɴ​", url: "tg://user?id=" + admin }]]
var data = JSON.parse(content)
var c = data.caption
var vc = data.captions

var video = data.video
var image = data.image
var id = data.id
var msg = data.msg
if (vc) {
  Api.sendVideo({
    chat_id: id,
    video: video,
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: polll }
  })
}
if (video) {
  Api.sendVideo({
    chat_id: id,
    video: video,
    caption: vc,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: polll }
  })

  return
}
if (c) {
  Api.sendPhoto({
    chat_id: data.id,
    photo: data.image,
    caption: c,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: polll }
  })
  return
}

if (image) {
  Api.sendPhoto({
    chat_id: id,
    photo: image,
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: polll }
  })

  return
}

//Bot.sendMessage(data.ktp)
Api.sendMessage({
  chat_id: id,
  text: "<b>🔊 ᴀᴅᴍɪɴ ~ ʙʀᴏᴀᴅᴄᴀsᴛ​</b>\n\n" + data.ktp + "",
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: polll }
})

