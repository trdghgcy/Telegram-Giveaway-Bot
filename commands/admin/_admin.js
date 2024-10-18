/*CMD
  command: /admin
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
if (!adm) {
  Bot.sendMessage("*No Admin Here\n\nHit /loginme to login as admin*")
  return
}
var inl = [
  [{ text: "⚠️ Maintenance", callback_data: "/maintainence" }],

  [
    { text: "➕ Add Bot", callback_data: "/add_bot" },
    { text: "➖ Delete Bot", callback_data: "/delete_bot" }
  ],
  [{ text: "📤 Send Bot", callback_data: "/send_bot" }],
  [
    { text: "🔴 Ban", callback_data: "/ban" },
    { text: "🟢 Unban", callback_data: "/unban" }
  ],
  [{ text: "🔊 Broadcast", callback_data: "/broadcast" }]
]
if (adm == user.telegramid) {
  var tto =
    "👋 <b>Welcome, Here You Can Manage Your Bot With a Single Options.</>\n\n<i>🚷 Here are Some Options You Need To Set For This bot Else Bot Won't Work Properly.</>\n\n<b>🤖 Bot Name:</> @" +
    bot.name +
    "\n\n<i>⚠ Warning When Using This Panel Please Don't Send Any Other Command  or it May Spoil Your Work !</>"
  if (request.message_id) {
    Api.sendMessage({
      text: tto,
      parse_mode: "html",
      on_result: "/private",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: inl }
    })
    return
  }
  Api.editMessageText({
    message_id: User.getProperty("private"),
    text: tto,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
  return
}

