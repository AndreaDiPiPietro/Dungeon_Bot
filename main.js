require('dotenv').config()

const token = process.env.DISCORDTOKEN;

const Discord = require('discord.js');

const client = new Discord.Client();

client.login(token);

client.on('ready', () => {
    console.log(token);
})