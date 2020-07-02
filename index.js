/*
    Thog Bot
*/
const Discord = require('discord.js')
const client = new Discord.Client();

//Phrases that set off thog.
const triggers = [
    'who',
    'what',
    'where',
    'when',
    'why',
    '?'
]

//Have thog do his thing
client.on('message', (msg) => {
    //Scan messages for triggers
    for (let i=0; i<triggers.length; i++) {
        if (msg.content.toLowerCase().includes(triggers[i])) {
            msg.channel.send('thog dont caare')
            return
        }
    }
})

//Sign in
client.login(require('./config.json').token)