module.exports = ({
    name: "<@917962601923760139>",
    description: "Resposta a menção",
    category: "Bot",
    perms: "Este comando solicita a permissão para eu adicionar reações.",
    aliases: ["<@!917962601923760139>"],
    nonPrefixed: true,
    code: `
$thumbnail[1;$userAvatar[$clientID]]
$description[1;\💡 » Olá! Vi que me marcou. 
<:mt_ar:912044933626626088>╰ Meu nome é Quiz Api BOT, um bot feito para auxiliar em minha API de uso público. Meu prefixo neste servidor é \`[ $getServerVar[prefix] ]\` . Para ter acesso a minha Lista de Comandos digite \`[ $getServerVar[prefix]help ]\`.]
 
$footer[1;Executado por $userTag[$authorID];$authorAvatar]
$addTimestamp[1]
$color[1;$getVar[color]]
    `
})
