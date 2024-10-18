/*CMD
  command: /maintainence
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
if (user.telegramid == adm) {
  var key = [
    [
      { text: "✅ Turn On", callback_data: "/on" },
      { text: "🛑 Turn OFF", callback_data: "/of" }
    ],
    [{ text: "↩️ Back", callback_data: "/admin" }]
  ]
  var k = Bot.getProperty("maintenance", "Not Set")
  var text = "*🚀 Management Mode is Currently: *" + k
  Api.editMessageText({
    message_id: User.getProperty("private"),
    text: text,
    parse_mode: "markdown",
    reply_markup: {
      inline_keyboard: key
    }
  })
} 
