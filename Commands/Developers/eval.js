module.exports = [{
  name: "eval",
  description: "Evaluate de códigos em JavaScript para Desenvolvedores",
  category: "Desenvolvedores",
  usage: "eval <code>",
  perms: "Este comando solicita a permissão de Desenvolvedor.",
  $if: 'v4',
  aliases: ["e", "ev"],
  code: `
$if[$charCount[$replaceText[$djsEval[$message;yes];$clientToken;hidden]]>2000;]
$clearReactions[$channelID;$getChannelVar[evalMsg];all]
$createFile[$replaceText[$djsEval[$message;yes];$clientToken;hidden];code.js]
$addButton[1;;2;eval_$authorID;false;❌]
$setChannelVar[evalMsg;$messageID]

$elseIf[$charCount[$replaceText[$djsEval[$message;yes];$clientToken;hidden]]<2000;]
$clearReactions[$channelID;$getChannelVar[evalMsg];all]
\`\`\`js
$replaceText[$djsEval[$message;yes];$clientToken;hidden]
\`\`\`
$addButton[1;;2;eval_$authorID;false;❌]
$setChannelVar[evalMsg;$messageID]

$endElseIf
$endIf
$onlyIf[!=$message;:no_entry_sign: **» Erro!**
  <:mt_ar:912044933626626088>╰ <@$authorID>, Digite algo para inspecionar.]

$onlyForIDs[424931675009712128;417067105897414667;:no_entry_sign: **» Erro!**
  <:mt_ar:912044933626626088>╰ <@$authorID>, Este comando requere permissão de Desenvolvedores.]
`
},{
  name: "aoieval",
  description: "Evaluate de códigos em Aoi.js para Desenvolvedores",
  category: "Desenvolvedores",
  usage: "aoieval <code>",
  perms: "Este comando solicita a permissão de Desenvolvedor.",
  $if: 'v4',
  aliases: ["aoie", "aoiev"],
  code: `
$if[$charCount[$replaceText[$eval[$message;yes;no];$clientToken;hidden]]>2000;]
$clearReactions[$channelID;$getChannelVar[evalMsg];all]
$createFile[$replaceText[$eval[$message;yes;no];$clientToken;hidden];code.js]
$addButton[1;;2;eval_$authorID;false;❌]
$setChannelVar[evalMsg;$messageID]

$elseIf[$charCount[$replaceText[$eval[$message;yes;no];$clientToken;hidden]]<2000;]
$clearReactions[$channelID;$getChannelVar[evalMsg];all]
\`\`\`js
$replaceText[$eval[$message;yes;no];$clientToken;hidden]
\`\`\`
$addButton[1;;2;eval_$authorID;false;❌]
$setChannelVar[evalMsg;$messageID]

$endElseIf
$endIf
$onlyIf[!=$message;:no_entry_sign: **» Erro!**
  <:mt_ar:912044933626626088>╰ <@$authorID>, Digite algo para inspecionar.]

$onlyForIDs[424931675009712128;417067105897414667;:no_entry_sign: **» Erro!**
  <:mt_ar:912044933626626088>╰ <@$authorID>, Este comando requere permissão de Desenvolvedores.]
`
}, {
  type: 'interaction',
  prototype: 'button',
  code: `
$deleteIn[2s]
:no_entry_sign: **» Executado!**
  <:mt_ar:912044933626626088>╰ <@$authorID>, Eval encerrado.
$deleteMessage[$messageID]
$deleteMessage[$getChannelVar[evalMsg]]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::no_entry_sign: **» Erro!** -=- <@$authorID>, Sem permissão!}{color:#ff0000}}", "ephemeral" : true, "options" : { "interaction" : true } }] $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==eval;]
`
}]
