/*CMD
  command: /loginme
  help: 
  need_reply: false
  auto_retry_time: 
  folder: login command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 6261873071) {
  Bot.setProperty("admin_chat", user.telegramid, "string")
  Bot.setProperty("adminID", user.telegramid, "string")
  Bot.sendMessage(
    "*You are now Admin With* `" + user.telegramid + "` *ID Send /admin*"
  )
} else {
  Bot.sendMessage("*Ooops it seems we already has an admins*")
}

