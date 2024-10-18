/*CMD
  command: /deleteSelectedBot
  help: 
  need_reply: false
  auto_retry_time: 
  folder: delete bot

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adm = Bot.getProperty("adminID")
if (adm == user.telegramid) {
  // First, check if params exist and are formatted correctly
  if (!params || params.indexOf("|") === -1) {
    var mm = User.getProperty("private")
    Api.editMessageText({
      message_id: mm,
      text: "❌ <b>Invalid callback data. Please try again.</>",
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
      }
    })
    return
  }

  // Parse the callback data to get the bot name and the current page
  var data = params.split("|") // No spaces around "|"
  var botName = data[1].trim()
  var currentPage = parseInt(data[2].trim())

  // Retrieve the stored bots
  let bots = Bot.getProperty("bots", {})

  // Check if the bot exists
  if (!bots[botName]) {
    var mm = User.getProperty("private")
    Api.editMessageText({
      message_id: mm,
      text: "🤧 <b>Bot not found. Please select a valid bot.</>",
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
      }
    })
    return
  }

  // Delete the selected bot
  delete bots[botName]

  // Save the updated bot list
  Bot.setProperty("bots", bots, "json")

  // Confirmation message
  var mm = User.getProperty("private")
  Api.editMessageText({
    message_id: mm,
    text: `✅ <b>The bot "${botName}" has been deleted.</>`,
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/delete_bot" }]]
    }
  })

  // Show the updated bot list (redirect back to the deleteBot command)
  Bot.runCommand("/deleteBot " + currentPage)
  return
}

