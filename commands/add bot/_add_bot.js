/*CMD
  command: /add_bot
  help: 
  need_reply: false
  auto_retry_time: 
  folder: add bot

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adm = Bot.getProperty("adminID")
if (adm == user.telegramid) {
  var mm = User.getProperty("private")
  Api.editMessageText({
    message_id: mm,
    text: "<b>👨🏻‍🎨 Send Me The Name Of Bot That You Want To Add. </>",
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
    }
  })
  Bot.runCommand("/add_bot#2")
  return
}

