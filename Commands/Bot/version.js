module.exports = ({
    name: "versão",
    description: "Mostrando minha atual versão",
    category: "Bot",
    perms: "Este comando não solicita permissões.",
    usage: "versao",
    aliases: ["versao", "version", "v", "--v", "-v"],
    code: `
$description[1;📑 » Versão
<:mt_ar:912044933626626088>╰ Minha versão atual é v$getVar[version]]
$color[1;$getVar[color]]
    `
  })