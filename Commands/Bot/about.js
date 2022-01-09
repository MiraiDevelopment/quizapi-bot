module.exports = ({
    name: "sobre",
    description: "Saiba as mais sobre a Quiz Api. Pra que serve, seus modos de uso. Link da api, site, docs e muito mais!",
    usage: "sobre",
    perms: "Este comando não solicita permissões.",
    category: "Bot",
    aliases: ["about","about-api","aboutapi","sobreapi", "sobre-api"],
    code: `
$reply[$messageID;{thumbnail:$userAvatar[$clientID]}{description:
📋 **» Informações**
<:mt_ar:912044933626626088>╰ Olá **$username** tudo bem? Espero que sim. Se você chegou até aqui e está querendo ver mais informações e saber como funciona a Quiz Api, certamente você está no lugar certo!. Tudo isso, você encontra aqui.
<:mt_ar:912044933626626088>╰ Para mais informações sobre o "BOT" \`[ $getServerVar[prefix]versão ]\` para ver minha versão, \` [ $getServerVar[prefix]ping ]\` para ver minha latência, \`[ $getServerVar[prefix]status ]\` para ver minha status geral.

📖 **» Pra que serve ou pra que é a Quiz Api?**
<:mt_ar:912044933626626088>╰ É uma api de Questões e Respostas para uso livre de Desenvolvedores de bots do Discord, WebDevelopers e etc.
<:mt_ar:912044933626626088>╰ No momento temos a **WebApi** que permite que seus usuários façam as requisições por json fazendo um "fetch" direto do link da Api Web.
<:mt_ar:912044933626626088>╰ Para saber mais sobre como fazer isso acesse a **[Documentação](https://docs.quizapi.ga/)**

👨‍💻 **» Api feita em**
<:mt_ar:912044933626626088>╰ [JavaScript](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript) e [Express.js](https://expressjs.com/pt-br/) com [Node.js](https://nodejs.org/pt-br/about/)

🤩 **» Site da WebAPI**
<:mt_ar:912044933626626088>╰ [QuizApi](https://quizapi.ga/)

}

{field: **</>** » Criadores:<:mt_ar:912044933626626088>╰ \`$username[424931675009712128]#$discriminator[424931675009712128]\` | \`424931675009712128\` | [GitHub - GR](https://github.com/guihrib)
<:mt_ar:912044933626626088>╰ \`$username[417067105897414667]#$discriminator[417067105897414667]\` | \`417067105897414667\` | [GitHub - Krul](https://github.com/KrulDev)
<:mt_ar:912044933626626088>╰ \`$username[922465403920338944]#$discriminator[922465403920338944]\` | \`922465403920338944\` | [GitHub - ! yScypt3r'](https://github.com/Scypt3r):yes}
{field: 📈 **» Versões**:<:mt_ar:912044933626626088>╰ API \`[ v$getVar[version] ]\`
<:mt_ar:912044933626626088>╰ Node.js \`[ $nodeVersion ]\`:yes}
{footer:Solicitado por $username:$authorAvatar}
{color:$getVar[color]};yes]
$onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Blacklist
<:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
$cooldown[5s;<@$authorID>{color:$getVar[color]}{description::no_entry_sign: » Cooldown
<:mt_ar:912044933626626088>╰ <@$authorID>, Vai com calma pequeno Einstein. Espere %time% para executar meus comandos!}{delete:15s}]
    `
})