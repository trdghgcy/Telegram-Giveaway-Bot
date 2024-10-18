/*CMD
  command: /test
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

Api.sendMessage({    text: "<b style='color: #00ff00;'>Your Green Text Here</b>",    parse_mode: "HTML",    preview_disable: true 
});
