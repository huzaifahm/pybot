//Startup of bot
//Load discord.js
const Discord = require("discord.js");
//New client
const client = new Discord.Client();
//Require config file
const config = require("./config.json");
client.on("ready", () => {
  //Following event will run with successful startup and login of bot
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setGame(`on ${client.guilds.size} servers`);
});

//Main functionality
//Following command will now run on every message
client.on("message", async message => {
  if(message.author.bot) return;
//To avoid a constant loop of bot return messages
  if(message.content.indexOf(config.prefix) !== 0) return;
  
//kick command
