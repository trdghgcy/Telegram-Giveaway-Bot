/*CMD
  command: @
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

let stat = Bot.getProperty("" + user.telegramid + "")
var adm = Bot.getProperty("adminID")
var to = Bot.getProperty("maintenance")
if (stat == "ban") {
  Bot.sendMessage("*You're Ban From Using The Bot ❌*")
  return
}
if (user.telegramid != adm) {
  if (to == "On") {
    Bot.sendMessage(
      "🔰*Sorry Our Bot Is Currently Under Maintaice* 🙇‍♀\n\n_Bot will start Working in next some hours...._✅\n\n_Regards - @" +
        bot.name +
        "_"
    )
    return
  }
}

