module.exports = ({
    name: "sobre",
    description: "Saiba as mais sobre a Quiz Api. Pra que serve, seus modos de uso. Link da api, site, docs e muito mais!",
    usage: "sobre",
    perms: "Este comando não solicita permissões.",
    category: "Bot",
    aliases: ["about","about-api","aboutapi","sobreapi", "sobre-api"],
    code: `
$thumbnail[1;$userAvatar[$clientID]]
$description[1;📋 **» Informações**
<:sp_ar:912044933626626088>╰ Olá **$username** tudo bem? Espero que sim. Se você chegou até aqui e está querendo ver mais informações e saber como funciona a Quiz Api, certamente você está no lugar certo!. Tudo isso, você encontra aqui.
<:sp_ar:912044933626626088>╰ Para mais informações sobre o "BOT" \`[ $getServerVar[prefix]versão ]\` para ver minha versão, \` [ $getServerVar[prefix]ping ]\` para ver minha latência, \`[ $getServerVar[prefix]status ]\` para ver minha status geral.

📖 **» Pra que serve ou pra que é a Quiz Api?**
<:sp_ar:912044933626626088>╰ É uma api de Questões e Respostas para uso livre de Desenvolvedores de bots do Discord, WebDevelopers e etc.
<:sp_ar:912044933626626088>╰ No momento temos a **WebApi** que permite que seus usuários façam as requisições por json fazendo um "fetch" direto do link da Api Web.
<:sp_ar:912044933626626088>╰ Para saber mais sobre como fazer isso acesse a **[Documentação](https://docs.quizapi.site/)**

👨‍💻 **» Api feita em**
<:sp_ar:912044933626626088>╰ [JavaScript](https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript) e [Express.js](https://expressjs.com/pt-br/) com [Node.js](https://nodejs.org/pt-br/about/)

🤩 **» Site da WebAPI**
<:sp_ar:912044933626626088>╰ [QuizApi](https://quizapi.site/)]


$addField[1;**</>** » Criadores;<:sp_ar:912044933626626088>╰ \`$username[424931675009712128]#$discriminator[424931675009712128]\` | \`424931675009712128\` | [GitHub - GR](https://github.com/guihrib)
<:sp_ar:912044933626626088>╰ \`$username[417067105897414667]#$discriminator[417067105897414667]\` | \`417067105897414667\` | [GitHub - Krul](https://github.com/KrulDev);yes]
$addField[1;📈 **» Versões**;<:sp_ar:912044933626626088>╰ API \`[ v$getVar[version] ]\`
<:sp_ar:912044933626626088>╰ Node.js \`[ $nodeVersion ]\`;yes]
$footer[1;Solicitado por $username;$authorAvatar]
$color[1;$getVar[color]]
    `
})