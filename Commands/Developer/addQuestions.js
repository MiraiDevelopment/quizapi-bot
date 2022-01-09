module.exports = [{
  name: "addquestion",
    description: "Para adicionar Questões, Alternativas e Respostas na Quiz Api",
    category: "Desenvolvedor",
    usage: "addq",
    perms: "Este comando solicita a permissão de Desenvolvedor.",
    aliases: ["addq", "addquestions"],
  code:`
$awaitMessages[$authorID;10m;everything;add1;Tempo esgotado!]
> Digite uma questão!
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