/*CMD
  command: 👨‍👩‍👧‍👦 Refer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink("PSViewsBot","Bot");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("🔰* Per Invite You Will Get 400 Points : \n"+reflink+"\n\n👁️‍🗨️ 1 Point = 1 View\n⚠️ You Will Only Get Points When Your Invited Person Joins Our Channels*");

}
