module.exports = ({
    name: "help",
    description: "Lista de comandos do Quiz Api BOT",
    category: "Bot",
    perms: "Este comando não solicita permissões.",
    usage: "help",
    aliases: ["h","ajuda","cmds","comandos","commands"],
    code: `
$author[1;Minha lista de comandos;$authorAvatar]
$thumbnail[1;$userAvatar[$clientID]]
$description[1;\`\`\`
Ao total, eu tenho 11 comandos. Meus comandos básicos para uso, se encontram abaixo dividos em suas devidas categorias:
\`\`\`
\`💡\` __Bot:__(\`7\`)
\`sobre\`・\`help\`・\`ping\`・\`setprefixo\`・\`status\`・\`versão\`

\`📝\` __Utilidades:__(\`4\`)
\`avatar\`・\`commandinfo\`・\`serverinfo\`]
$color[1;$getVar[color]]
$footer[1;© 2021-2022 Quiz Api. Todos os direitos reservados.;$userAvatar[$clientID]]

`
})