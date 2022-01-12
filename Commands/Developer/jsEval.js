module.exports = [{
    name: "jseval",
    description: "Evaluate de códigos em JavaScript para Desenvolvedores",
    category: "Desenvolvedores",
    usage: "jseval <code>",
    perms: "Este comando solicita a permissão de Desenvolvedor.",
    aliases: ["jse", "jsev"],
    code: `
$if[$isNumber[$message]==true]
$reactionCollector[$splitText[1];$authorID;5m;❌;exeval;yes]
$textSplit[$sendMessage[{thumbnail:$authorAvatar}{color:#2f3136}{description:> Tipo » \`number\`
> Tempo de execução » \`$random[1;30]ms\`
  
**->** » Entrada
\`\`\`js
$message
\`\`\`
    
**<-** » Saída
\`\`\`js
$djsEval[$message;yes]
$error
\`\`\`}{footer:Eval -・- $username[$authorID]:$authorAvatar};yes]; ]
  
$elseif[$isNumber[$message]==false]
$reactionCollector[$splitText[1];$authorID;5m;❌;exeval;yes]
$textSplit[$sendMessage[{thumbnail:$authorAvatar}{color:#2f3136}{description:> Tipo » \`string\`
> Tempo de execução » \`$random[1;30]ms\`
  
**->** » Entrada
\`\`\`js
$message
\`\`\`
    
**<-** » Saída
\`\`\`js
$djsEval[$message;yes]
$error
\`\`\`}{footer:Eval -・- $username[$authorID]:$authorAvatar};yes]; ]
$endelseif
$endif
$argsCheck[>1;<@$authorID>{description::no_entry_sign: **» Erro!**
  <:mt_ar:912044933626626088>╰ <@$authorID>, Digite algo para inspecionar.}{color: #ff0000}]
  $onlyForIDs[424931675009712128;417067105897414667;922465403920338944;<@$authorID>{description::no_entry_sign: **» Erro!**
  <:mt_ar:912044933626626088>╰ <@$authorID>, Apenas meus desenvolvedores pode executar este comando!}{color: #ff0000}]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:#2f3136}{description::no_entry_sign: » Blacklist
  <:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
  `
  }, {
    type: 'awaitedCommand',
    name: 'exeval',
    code: `
$clear[1]
$wait[3s]
$editMessage[$message[1];{description::no_entry_sign: **» Executado!**
  <:mt_ar:912044933626626088>╰ <@$authorID>, Eval encerrado}{color: #ff0000}
$clearReactions[$channelID;$messageID;all]]
`,
 }]
  