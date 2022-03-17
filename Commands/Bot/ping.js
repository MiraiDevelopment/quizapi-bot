module.exports = {
    name: "ping",
    description: "Mostrando a latência do Quiz Api BOT.",
    category: "Bot",
    perms: "Este comando não solicita permissões.",
    usage: "ping",
    aliases: ["ms","latency","latencia","latência"],
    code: `
:ping_pong: <@$authorID> pong!
$description[1;\💡 » Minha Latência é:
<:mt_ar:912044933626626088>╰ \`$messagePingms\`
\⚡ » Latência da Gateway:
<:mt_ar:912044933626626088>╰ \`$djsEval[client.ws.ping;yes]ms\`
\🌐 » Latência da Database:
<:mt_ar:912044933626626088>╰ \`$djsEval[client.db.db.ping();yes]ms\`]
$color[1;$getVar[color]]
$footer[1;Executado por $userTag[$authorID];$authorAvatar]
$addTimestamp[1]

    `
}