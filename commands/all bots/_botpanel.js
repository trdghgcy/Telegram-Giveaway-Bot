/*CMD
  command: /botpanel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: all bots

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Current page, default to 1 if no params are provided
var currentPage = parseInt(params) || 1
var botsPerPage = 10 // Number of bots to show per page

// Retrieve the stored bots
let bots = Bot.getProperty("bots", {})
let botNames = Object.keys(bots)

// If there are no bots, send a message
if (botNames.length === 0) {
  Api.editMessageMedia({
    message_id: request.message.message_id,
    media: {
      type: "video",
      media: "https://t.me/ghgfhkkj/88",
      caption: "No bots available."
    },
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/start" }]]
    }
  })
  return
}

// Calculate pagination
var totalBots = botNames.length
var totalPages = Math.ceil(totalBots / botsPerPage)

// Ensure currentPage is within the correct range
if (currentPage < 1) currentPage = 1
if (currentPage > totalPages) currentPage = totalPages

// Define the range of bots to display on this page
var start = (currentPage - 1) * botsPerPage
var end = Math.min(start + botsPerPage, totalBots)

// Create the message text
var messageText = "Choose a bot from below:\n\n"
var buttons = []
var currentRow = []

// Add each bot as an inline button for the current page
for (var i = start; i < end; i++) {
  let botName = botNames[i]
  let botId = bots[botName].bot_id
  let index = i + 1 // Display index starting from 1

  // Add bot to the message text (like "1. BotName")
  messageText += `${index}. ${botName}\n`

  // Create the button with numbered label (like «1», «2», etc.)
  currentRow.push({
    text: `« ${index} »`, // Button label is the number
    callback_data: `selectBot | ${botName} | ${botId}` // Pass botName and botId in callback
  })

  // Add row when 5 buttons are created, then reset the row
  if (currentRow.length === 5) {
    buttons.push(currentRow) // Add row to buttons
    currentRow = [] // Reset the row
  }
}

// If there are leftover buttons (less than 5 in the last row), push them
if (currentRow.length > 0) {
  buttons.push(currentRow)
}

// Add Next/Previous buttons for pagination
var navigationButtons = []
if (currentPage > 1) {
  navigationButtons.push({
    text: "◀️ Previous",
    callback_data: `/botpanel ${currentPage - 1}`
  })
}
if (currentPage < totalPages) {
  navigationButtons.push({
    text: "Next ▶️",
    callback_data: `/botpanel ${currentPage + 1}`
  })
}

// Add "Back To Menu" button
navigationButtons.push({
  text: "« Back To Menu »",
  callback_data: "/start"
})

// Add the navigation buttons at the end if they exist
if (navigationButtons.length > 0) {
  buttons.push(navigationButtons)
}

// Send the message with inline buttons and a video
Api.editMessageMedia({
  message_id: request.message.message_id,
  media: {
    type: "video",
    media: "https://t.me/ghgfhkkj/88",
    caption: messageText
  },
  reply_markup: { inline_keyboard: buttons }
})

