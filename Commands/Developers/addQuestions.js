module.exports = [{
  name: "addquestion",
    description: "Para adicionar Questões, Alternativas e Respostas na Quiz Api",
    category: "Desenvolvedores",
    usage: "addq <numero da questao que ira setar> <categoria>",
    usage: "addq",
    perms: "Este comando solicita a permissão de Desenvolvedor.",
    aliases: ["addq", "addquestions"],
  code:`
$awaitMessages[$authorID;10m;everything;add1;Tempo esgotado!]
> Digite uma questão!
$setVar[lastCategory;$message[2]]
$onlyForIDs[424931675009712128;417067105897414667;922465403920338944;<@$authorID>{description::no_entry_sign: **» Erro!**
  <:mt_ar:912044933626626088>╰ <@$authorID>, Apenas meus desenvolvedores pode executar este comando!}{color: #ff0000}]
  $onlyIf[$getGlobalUserVar[bl;$authorID]==no;<@$authorID>{color:#2f3136}{description::no_entry_sign: » Blacklist
  <:mt_ar:912044933626626088>╰ <@$authorID>, Você está na minha Blacklist e não pode executar meus comandos!}{delete:15s}]
`
}, {
  name:'add1',
  type:'awaitedCommand',
  code:`
$awaitMessages[$authorID;10m;everything;add2;Tempo esgotado!]
> Digite as alternativas!
`
}, {
  name:'add2',
  type:'awaitedCommand',
  code:`
$awaitMessages[$authorID;10m;everything;add3;Tempo esgotado!]
> Digite a resposta!
`
}, {
  name:'add3',
  type:'awaitedCommand',
  code:`
> Pronto!
`
}] 