const Discord = require("discord.js")
const config = require('./config.json');

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
client.login(config.token)

client.once("ready", () => console.log("Ready"))

client.on("messageCreate", message => {
	if (config.threadChannels.indexOf(message.channel.id) == -1) return
	message.startThread({
		name: `${message.member.displayName}s Thread`, //Change this to whatever you want the thread name to be. 
		autoArchiveDuration: 60,
		reason: "Automatic Thread Creation",
	})
})