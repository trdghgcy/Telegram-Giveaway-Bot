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
  group: 
CMD*/

var adm = Bot.getProperty("adminID")
if (!adm) {
  Bot.sendMessage(
    "*😣 No Admin In This Bot\n\n Search For Command* `/loginme` *Then Change Your TG Id There.*"
  )
  return
}

var email = User.getProperty("mail", "❌ Not Set")

var but = [
  [
    { text: "📧 Set BB Mail", callback_data: "/setmail" },
    { text: "📩 Change BB Mail", callback_data: "/changeemail" }
  ],
  [{ text: "🚀 Open Bot Store", callback_data: "/botpanel" }]
]
var cap =
  "<b>👋🏻 Hi <a href='tg://user?id=" +
  user.telegramid +
  "'>" +
  user.first_name +
  "</a>!\n\n❯ Welcome To Our Giveaway Bot.\n\nYour Set Email Is : </b><code>" +
  email +
  "</code>"
if (request.message_id) {
  Api.sendVideo({
    video: "https://t.me/ghgfhkkj/88",
    caption: cap,
    reply_markup: { inline_keyboard: but },
    parse_mode: "HTML"
  })
  return
}
Api.editMessageMedia({
  message_id: request.message.message_id,
  media: {
    type: "video",
    media: "https://t.me/ghgfhkkj/88",
    parse_mode: "HTML",
    caption: cap
  },
  reply_markup: { inline_keyboard: but }
})

var hh = ""
if (!User.getProperty("UserDone")) {
  User.setProperty("UserDone", true, "boolean")
  var statss = Libs.ResourcesLib.anotherChatRes("status", "global")
  statss.add(1)
  Api.sendMessage({
    chat_id: adm,
    text:
      "➕ <b>New User Notification</b> ➕\n\n👤<b>User:</b> <a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.first_name +
      "</a> " +
      hh +
      "\n\n🆔<b> User ID :</b> <code>" +
      user.telegramid +
      "</code>\n\n🌝 <b>Total User's Count: " +
      statss.value() +
      "</b>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
}

