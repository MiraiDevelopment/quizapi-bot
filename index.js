require('dotenv').config()

// Utilização da Aoi.JS
const Aoijs = require("aoi.js")
const Discord = require('discord.js')
const util = require('util')

// Configurando a Database
const Aoifb = require("aoi.fb")

const firebase = Aoifb.Create({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
});

// Configurando o Client da Aoi.js
const bot = new Aoijs.Bot({
  	token: process.env.token,
  	prefix: '$getServerVar[prefix]',
  	intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES'] ,
  	suppressAllErrors: true,
  	database: {
    	type: "aoi.fb",
    	db: firebase,
    },
    respondOnEdit:{
      commands: true
  	}
});


// Configuração
const voice = new Aoijs.Voice(bot, {
  cache: {
    cacheType: "Memory",
    enabled: true,
  },
youtube: {
  fetchAuthor:true
}
},true);

const loader = new Aoijs.LoadCommands(bot);
loader.load(bot.cmd, './Commands/', false)
bot.onInteractionCreate();
bot.onMessageDelete();
bot.onMessageUpdate();
bot.onMessage();
bot.readyCommand({
    channel: "",
    code: `$log[Ligado no usuário $userTag[$clientID]]`
})


// Status do Bot 
require('./src/stats')(bot);

// Variáveis
require('./src/variables')(bot);

// Sistema de AFK (DESLIGADO)

/* bot.command({
  name: "<@",
  aliases: ["<!@"],
  nonPrefixed: true,
  code:`
$if[$getGlobalUserVar[afk;$mentioned[1]]==activated]
$reply[$messageID;😬・$username[$mentioned[1]] está no **modo AFK**. Deu uma saidinha...
> Motivo: \`\`\`$getGlobalUserVar[motivoAfk;$mentioned[1]]\`\`\`{delete:7s};yes]
$endif
`
})
      
bot.command({
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `
$setGlobalUserVar[afk;disabled;$authorID]
$setGlobalUserVar[motivoAfk;não foi passado o motivo 😕;$authorID]
$if[$getGlobalUserVar[afk;$authorID]==activated]
$sendMessage[😉・**$username[$authorID]**, seu **modo AFK** foi desativado. Se precisar dar uma saindinha **:3** e ativar de novo peça pra mim usando \`$getServerVar[prefix]afk\`{delete:7s};no]
$onlyIf[$checkContains[$message[1];afk;off;ausente]==false;]
$endif`
}) */

function clean(text) {
    const blankSpace = String.fromCharCode(8203)
    return typeof text === 'string' ? text.replace(/`/g, '`' + blankSpace).replace(/@/g, '@' + blankSpace) : text
}
