//loading credentials
require('dotenv').config()
const token = process.env.DISCORDTOKEN;

const levelGenerator = require('./LevelGeneration')

//logging in to discord
const Discord = require('discord.js');

const client = new Discord.Client();

client.login(token);

const prefix = '!'

var level

//login callback
client.on('ready', () => {
    level = levelGenerator.CreateFloor()
    //console.log(level)
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "map"){
        message.reply(level)
    }
})