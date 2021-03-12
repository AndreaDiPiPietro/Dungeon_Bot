//loading credentials
require('dotenv').config()
const token = process.env.DISCORDTOKEN;

const levelGenerator = require('./LevelGeneration')

//logging in to discord
const Discord = require('discord.js');

const client = new Discord.Client();

client.login(token);

//login callback
client.on('ready', () => {
    var level = levelGenerator.CreateRoom(10,10,20)
    console.log(level)
})