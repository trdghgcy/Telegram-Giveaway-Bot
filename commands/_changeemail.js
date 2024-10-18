/*CMD
  command: /changeemail
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ➡️ *Please Send Me The BB Email ID*


  <<KEYBOARD

  KEYBOARD
  aliases: /setmail
  group: 
CMD*/

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(email).toLowerCase())
}
if (!validateEmail(message)) {
  Bot.sendMessage("_⚠️ Send a valid email_")
  return
}
User.setProperty("mail", message, "string")
Bot.sendMessage("💌🌟 Your BB Mail Set To: 💼📧 " + message + " ✉️🔒", {
  is_reply: true
})

