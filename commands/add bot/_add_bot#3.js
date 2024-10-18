/*CMD
  command: /add_bot#3
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
  let botName = User.getProperty("namesss") // Get bot name passed from previous step
  let botId = message

  if (!botId) {
    var mm = User.getProperty("private")
    Api.editMessageText({
      message_id: mm,
      text: "<b>❌ Invalid bot ID.</>",
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
      }
    })
    return
  }

  // Get existing bots list
  let bots = Bot.getProperty("bots", {})

  // Check if botName exists in the object
  if (!bots[botName]) {
    bots[botName] = {} // Initialize the botName entry if it doesn't exist
  }

  // Now we can safely set the bot_id
  bots[botName].bot_id = botId

  // Save the updated bots object
  Bot.setProperty("bots", bots, "json")
  Api.deleteMessage({ message_id: request.message_id })
  // Confirmation message
  var mm = User.getProperty("private")
  Api.editMessageText({
    message_id: mm,
    text: " <b>✅ " + botName + " has been saved with Bot ID " + botId + "</>",
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
    }
  })
  return
}

