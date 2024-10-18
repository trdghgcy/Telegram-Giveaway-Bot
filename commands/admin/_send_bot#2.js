/*CMD
  command: /send_bot#2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adm = Bot.getProperty("adminID")
var mm = User.getProperty("private")
if (adm == user.telegramid) {
  Api.deleteMessage({ message_id: request.message_id })
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(String(email).toLowerCase())
  }
  if (!validateEmail(message)) {
    Api.editMessageText({
      message_id: mm,
      text: "<i>⚠️ Send a valid email</>",
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
      }
    })
    return
  }
  BBAdmin.installBot({
    email: message,
    bot_id: bot.id
  })
  Api.editMessageText({
    message_id: mm,
    text: "<b>✳Bot Sent!\n\n🖨Email : " + message + "</>",
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
    }
  })
  return
}

