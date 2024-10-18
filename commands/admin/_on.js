/*CMD
  command: /on
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

var adm = Bot.getProperty("adminID")
if (adm == user.telegramid) {
  Api.editMessageText({
    message_id: User.getProperty("private"),
    text: "<b>🚀 Management Mode is Currently: On</b>",
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Turn On", callback_data: "/on" },
          { text: "🛑 Turn OFF", callback_data: "/of" }
        ],
        [{ text: "↩️ Back", callback_data: "/admin" }]
      ]
    }
  })

  Bot.setProperty("maintenance", "on", "string")
  return
}

