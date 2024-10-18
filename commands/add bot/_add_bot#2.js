/*CMD
  command: /add_bot#2
  help: 
  need_reply: true
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
  let botName = message
  var mm = User.getProperty("private")
  if (!botName) {
    Api.editMessageText({
      message_id: mm,
      text: "<b>❌ Invalid bot name.</>",
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
      }
    })
    return
  }
  User.setProperty("namesss", botName)
  // Save bot name to property (example of how to append it to a list)
  let bots = Bot.getProperty("bots", {})
  bots[botName] = { bot_id: null } // initialize bot entry
  Bot.setProperty("bots", bots, "json")
  Api.deleteMessage({ message_id: request.message_id })
  Api.editMessageText({
    message_id: mm,
    text: "<b>🆔 Please send the bot ID for " + botName + ":</>",
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
    }
  })
  Bot.runCommand("/add_bot#3") // pass botName as parameter
  return
}

