require('dotenv').config();
var Discord = require('discord.js');
var Client = new Discord.Client({
    partials: ['CHANNEL'],
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
        ]});

const prefix = '!';

const words = ['WOWOWOWOWO', 'wowowowowo', 'woWOWOWOwoWO', 'WOWOWOwowo', 'wowoWOWOWO', 'wowowoWOWO', 'WOwoWOWOWO', 'WOwowoWOWOWO', 'wowoWOWOWOWOwo', 'WOWOWOWOwoWOWO'];

Client.on('ready', () => {
    console.log('Ready !');
});

Client.on('guildMemberAdd', member => { 
    member.setNickname('wowo');
});

Client.on('messageCreate', message => {

    if(message.author.bot) return;

    if(message.channel.type === 'DM') {
        let size = message.content.length;
        let msg = '';
        for (let i = 0; i < size; i++) {
            msg = msg + words[Math.floor(Math.random() * 10)] + ' ';
        }
        message.author.send('Translated:');
        message.author.send(msg);
    }

    if(message.content === prefix + 'wo'){
        message.channel.send('WowoWoWOwoooowoowowoowowoWOOWOOWOOWOOWOOWOWWOWOOowooWOWOOoWOOwooWowowWOOOWOWOoWOwo');
        return;
    }

    if(message.channel.type === 'GUILD_TEXT') {
        if(!message.member.roles.cache.some(role => role.name === "wowo")) {
            if(/[^woWO]/gm.test(message.content)) {
                message.delete();
            }
        }
    }
});

Client.on('messageUpdate', (oldMessage, newMessage) => {
    if(!newMessage.member.roles.cache.some(role => role.name === "wowo")) {
        if(/[^woWO]/gm.test(newMessage.content)) {
            newMessage.delete();
        }
    }
});

Client.login(process.env.TOKEN);

