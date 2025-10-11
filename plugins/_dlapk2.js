let handler = async (m, {conn, args, usedPrefix, command, isOwner}) => {
if (!args[0]) throw `أدخل اسم التطبيق الذي تريد تنزيله . *مثال :*\n${usedPrefix + command} Clash Royale`

let res = await fetch(`https://api.dorratz.com/v2/apk-dl?text=${args[0]}`)
let result = await res.json()
let {name, size, lastUpdate, icon} = result
let URL = result.dllink
let packe = result.package

let texto = `${rg}
   *الأسم* : ⇢ ${name} 📛
   *مقاس* : ⇢ ${size} ⚖️
   *بكج* : ⇢ ${packe} 📦
   *تم التحديث* : ⇢ ${lastUpdate} 🗓️
    
\`\`\`سيتم تقديم طلبك قريبا...\`\`\``

await conn.sendFile(m.chat, icon, name + '.jpg', texto, m)

await conn.sendMessage(
m.chat,
{
document: {url: URL},
mimetype: 'application/vnd.android.package-archive',
fileName: name + '.apk',
caption: ''
},
{quoted: m}
)
}

handler.command = ['apk', 'apkdl2', 'modapk2']
handler.group = true
export default handler

