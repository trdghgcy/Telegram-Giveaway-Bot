/*CMD
  command: /ban
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var mm = User.getProperty("private")
Api.editMessageText({
  message_id: mm,
  text: "<b>🆔 Send I'd Of User:</>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
  }
})
Bot.runCommand("/ban#2")

