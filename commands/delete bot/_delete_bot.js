/*CMD
  command: /delete_bot
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

var adm = Bot.getProperty("adminID");
if (adm == user.telegramid) {
  // Current page, default to 1 if no params are provided
  var currentPage = parseInt(params) || 1;
  var botsPerPage = 10; // Number of bots to show per page

  // Retrieve the stored bots
  let bots = Bot.getProperty("bots", {});
  let botNames = Object.keys(bots);

  // If there are no bots, send a message
  if (botNames.length === 0) {
    var mm = User.getProperty("private");
    Api.editMessageText({
      message_id: mm,
      text: "<b>🙂‍↔️ No bots available to delete.</b>",
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/admin" }]]
      }
    });
    return;
  }

  // Calculate pagination
  var totalBots = botNames.length;
  var totalPages = Math.ceil(totalBots / botsPerPage);

  // Ensure currentPage is within the correct range
  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  // Define the range of bots to display on this page
  var start = (currentPage - 1) * botsPerPage;
  var end = Math.min(start + botsPerPage, totalBots);

  // Create the message text
  var messageText = "🚀 Select a bot to delete from below:\n\n";
  var buttons = [];
  var currentRow = [];

  // Add each bot as an inline button for the current page
  for (var i = start; i < end; i++) {
    let botName = botNames[i];
    let botId = bots[botName].bot_id;
    let index = i + 1; // Display index starting from 1

    // Add bot to the message text (e.g., "1. BotName")
    messageText += `${index}. ${botName}\n`;

    // Create the button with numbered label inside « » (e.g., «1»)
    currentRow.push({
      text: `«${index}»`, // Button label with number
      callback_data: `/deleteSelectedBot | ${botName} | ${currentPage}` // Pass botName and currentPage
    });

    // If 5 buttons are reached, push the row and reset
    if (currentRow.length === 5) {
      buttons.push(currentRow);
      currentRow = [];
    }
  }

  // If there are leftover buttons (less than 5 in the last row), push them
  if (currentRow.length > 0) {
    buttons.push(currentRow);
  }

  // Add Next/Previous buttons for pagination
  var navigationButtons = [];
  if (currentPage > 1) {
    navigationButtons.push({
      text: "◀️ Previous",
      callback_data: `/delete_bot ${currentPage - 1}`
    });
  }
  if (currentPage < totalPages) {
    navigationButtons.push({
      text: "Next ▶️",
      callback_data: `/delete_bot ${currentPage + 1}`
    });
  }

  // Always add the "Back to Panel" button
  navigationButtons.push({
    text: "« Back To Panel »",
    callback_data: "/admin"
  });

  // Add the navigation buttons at the end if they exist
  if (navigationButtons.length > 0) {
    buttons.push(navigationButtons);
  }

  // Get the stored message ID to edit the message
  var mm = User.getProperty("private");
  Api.editMessageText({
    message_id: mm,
    text: messageText,
    parse_mode: "html",
    reply_markup: { inline_keyboard: buttons }
  });
}
