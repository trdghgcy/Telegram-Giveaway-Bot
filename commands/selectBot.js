/*CMD
  command: selectBot
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

let mail = User.getProperty("mail")
if (!mail) {
  Bot.sendMessage("*❌ BB Mail Not Set, Use command /setmail to set*")
  return
}
let data = params // params contains the callback_data
let parts = data.split("|") // Split callback_data by the delimiter

// Extract botName and botId from the callback_data
let botName = parts[1].trim() // Trim any extra spaces
let botId = parts[2].trim()

if (!botName || !botId) {
  Bot.sendMessage("Error selecting bot. Please try again.")
  return
}

// Send bot to the user account
BBAdmin.installBot({
  email: mail,
  bot_id: botId
})
Bot.sendMessage(
  "*✳ " + botName + " Sent!\n\n🖨Email : " + mail + "\n\n©@Privates_Bots*"
)

