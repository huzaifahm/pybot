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
