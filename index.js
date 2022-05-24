require('dotenv').config();
var Discord = require('discord.js');
var Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]});

const prefix = '!';

Client.on('ready', () => {
    console.log('Ready !');
});

Client.on('guildMemberAdd', member => {
    member.setNickname('wowo');
});

Client.on('messageCreate', message => {
    if(message.author.bot) return;

    if(message.content === prefix + 'wo'){
        message.channel.send('WowoWoWOwoWoWOWowoWowoWoWoWowowowoWOwo !');
        return;
    }

    if(!message.member.roles.cache.some(role => role.name === "wowo")) {
        if(/[^woWO]/gm.test(message.content)) {
            message.delete();
        }
    }
   
});

Client.login(process.env.TOKEN);

