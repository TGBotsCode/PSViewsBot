/*CMD
  command: 👍 Order Reactions
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Order
  answer: *🔰 Send Post Link Where You Want To Get Positive Reactions (Send Only Public Posts)*
  keyboard: ✖️ Cancel
  aliases: 
CMD*/

let Link = User.getProperty("Link")
User.setProperty("Link" , data.message ,"string")
Bot.runCommand("autor")
