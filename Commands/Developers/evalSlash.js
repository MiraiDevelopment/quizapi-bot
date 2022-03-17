module.exports = [{
  name: 'eval',
  type:'interaction',
  prototype:'slash',
  $if: 'v4',
  code: `
$if[$charCount[$replaceText[$djsEval[$interactionData[options.data[0].value];yes];NzYzMTA5OTI5MzAwMjYyOTUz.X3y7gQ.f1wTXSHHW9Bz0tx3P4m8FgP3fH0;hidden]]>2000;]
$interactionReply[$createFile[$replaceText[$djsEval[let db = client.db.db
$interactionData[options.data[0].value];yes];NzYzMTA5OTI5MzAwMjYyOTUz.X3y7gQ.f1wTXSHHW9Bz0tx3P4m8FgP3fH0;hidden];code.js];;{actionRow:{button::2:eval_$authorID::❌}}]
$clearReactions[$channelID;$messageID;all]

$elseIf[$charCount[$replaceText[$djsEval[$interactionData[options.data[0].value];yes];NzYzMTA5OTI5MzAwMjYyOTUz.X3y7gQ.f1wTXSHHW9Bz0tx3P4m8FgP3fH0;hidden]]<2000;]
$interactionReply[\`\`\`js
$replaceText[$djsEval[$interactionData[options.data[0].value];yes];NzYzMTA5OTI5MzAwMjYyOTUz.X3y7gQ.f1wTXSHHW9Bz0tx3P4m8FgP3fH0;hidden]
\`\`\`;;{actionRow:{button::2:eval_$authorID::❌}}]
$clearReactions[$channelID;$messageID;all]
$endElseIf
$endIf

$createApplicationCommand[global;eval;[Devs]・Evaluate em JavaScript para desenvolvedores;true;slash;{
    "name" : "code",
     "description": "[Devs]・Evaluate em JavaScript para desenvolvedores",
    "type" : 3,
    "required" : true
}]

$onlyForIDs[424931675009712128;417067105897414667;889991365092581386;{ "embeds" : "{newEmbed:{description::no_entry_sign: **» Erro!**\\n<:mt_ar:912044933626626088>╰ <@$interactionData[author.id]>, Este comando requere permissão de Desenvolvedores.}{color:$getVar[color2]}}", "ephemeral" : true, "options" : { "interaction" : true } }]
`
},{
  name: 'aoieval',
  type:'interaction',
  prototype:'slash',
  $if: 'v4',
  code: `
$if[$charCount[$replaceText[$eval[$interactionData[options.data[0].value];yes;no];NzYzMTA5OTI5MzAwMjYyOTUz.X3y7gQ.f1wTXSHHW9Bz0tx3P4m8FgP3fH0;hidden]]>2000;]
$interactionReply[$createFile[$replaceText[$eval[$interactionData[options.data[0].value];yes;no];NzYzMTA5OTI5MzAwMjYyOTUz.X3y7gQ.f1wTXSHHW9Bz0tx3P4m8FgP3fH0;hidden];code.js];;{actionRow:{button::2:eval_$authorID::❌}}] 
$clearReactions[$channelID;$messageID;all]

$elseIf[$charCount[$replaceText[$eval[$interactionData[options.data[0].value];yes;no];NzYzMTA5OTI5MzAwMjYyOTUz.X3y7gQ.f1wTXSHHW9Bz0tx3P4m8FgP3fH0;hidden]]<2000;]
$interactionReply[\`\`\`js
$replaceText[$eval[$interactionData[options.data[0].value];yes;no];NzYzMTA5OTI5MzAwMjYyOTUz.X3y7gQ.f1wTXSHHW9Bz0tx3P4m8FgP3fH0;hidden]
\`\`\`;;{actionRow:{button::2:eval_$authorID::❌}}]
$clearReactions[$channelID;$messageID;all]

$endElseIf
$endIf

$createApplicationCommand[global;aoieval;[Devs]・Evaluate em Aoi.js para desenvolvedores;true;slash;{
    "name" : "code",
     "description": "[Devs]・Evaluate em Aoi.js para desenvolvedores",
    "type" : 3,
    "required" : true
}]

$onlyForIDs[424931675009712128;417067105897414667;889991365092581386;{ "embeds" : "{newEmbed:{description::no_entry_sign: **» Erro!**\\n<:mt_ar:912044933626626088>╰ <@$interactionData[author.id]>, Este comando requere permissão de Desenvolvedores.}{color:$getVar[color2]}}", "ephemeral" : true, "options" : { "interaction" : true } }]
`
}, {
  type: 'interaction',
  prototype: 'button',
  code: `
$interactionDelete
$wait[7s]
$interactionUpdate[;{newEmbed:{description:🚫 **» Executado!**
<:mt_ar:912044933626626088>╰ <@$authorID>, Eval encerrado.}{color:$getVar[color]}}]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{ "embeds" : "{newEmbed:{description::no_entry_sign: **» Erro!** -=- <@$authorID>, Sem permissão!}{color:$getVar[color2]}}", "ephemeral" : true, "options" : { "interaction" : true } }] $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==eval;]
`
}]
