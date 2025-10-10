import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//---------[ Añada los numeros a ser Propietario/a ]---------

global.owner = [
['33744276467', '💋LUFFY💕', true]]
global.mods = []
global.prems = []

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = "" //Ejemplo: +59309090909
global.confirmCode = "" 

//cambia a false Desactivar en "auto-reconexion" de sub-bots
global.gataJadibts = true 

// Cambiar a false para usar el Bot desde el mismo numero del Bot.
global.isBaileysFail = false

//---------[ APIS GLOBAL ]---------

global.openai_key = 'sk-...OzYy' /* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */
global.openai_org_id = 'HITjoN7H8pCwoncEB9e3fSyW' /* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */
global.Key360 = ['964f-0c75-7afc']//key de violetics
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "GataDiosV2"
global.itsrose = ['4b146102c4d500809da9d1ff']
global.baileys = '@whiskeysockets/baileys'
global.apis = 'https://atom.bio/elakrabelyotyobr'

global.APIs = {xteam: 'https://api.xteam.xyz', 
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',	
fgmods: 'https://api-fgmods.ddns.net',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',	
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site' },
global.APIKeys = {'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,	
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren' }

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//------------------------[ Stickers ]-----------------------------

global.packname = '𝖱𝖴𝖪𝖠𝖨'
global.author = '𝑂𝑊𝑁𝐸𝑅 𝐿𝑈𝐹𝐹𝑌💕💋'

//------------[ Versión | Nombre | cuentas ]------------

global.wm = '𝖱𝖴𝖪𝖠𝖨' 
global.botname = '𝑂𝑊𝑁𝐸𝑅 𝐿𝑈𝐹𝐹𝑌'
global.vs = '1.9.5'

global.tk = 'https://www.tiktok.com/@rukia_b.l?_t=ZN-8xaK1x6Pmn0&_r=1'
global.ig = 'https://www.instagram.com/yoruichi.xd1?igsh=ZjliZHhlMTVkdHow'
global.nob = 'https://wa.me/33760509044'

global.nna = 'https://whatsapp.com/channel/0029Vb3DpuzJuyA7ENrVUB46' //shinobu Update
global.nna2 = 'https://whatsapp.com/channel/0029VbA5scz0VycPOBi6A32G' //shinobu 2update
global.nnaa = 'https://chat.whatsapp.com/FrEiPzjejEy7UmxGoEvHOa?mode=ac_c' //shinobu - Test
global.nnntttt = 'https://chat.whatsapp.com/FrEiPzjejEy7UmxGoEvHOa?mode=ac_c' //Grupo ayuda sobre el bot
global.bot = 'wa.me/33760509044'
global.asistencia = `${nna}`
global.redes = [nna, nna2, nnaa, nnntttt, tk, ig, nob]

//------------------------[ Info | Datos ]---------------------------

global.wait = ' *❃━━━═✦•〘•🌸•〙•✦═━━━❃*\n*❮💋❯⪼ جاري التحميل*\n*┊〄 ❮▬▭▭▭▭❯\n*❃━━━═✦•〘•💕•〙•✦═━━━❃*'
global.waitt = '*❃━━━═✦•〘•🌸•〙•✦═━━━❃*\n*❮💋❯⪼ جاري التحميل*\n*┊〄 ❮▬▭▭▭▭❯\n*❃━━━═✦•〘•💕•〙•✦═━━━❃*'
global.waittt = '*❃━━━═✦•〘•🌸•〙•✦═━━━❃*\n*❮💋❯⪼ جاري التحميل*\n*┊〄 ❮▬▭▭▭▭❯\n*❃━━━═✦•〘•💕•〙•✦═━━━❃*'
global.waitttt = '*❃━━━═✦•〘•🌸•〙•✦═━━━❃*\n*❮💋❯⪼ جاري التحميل*\n*┊〄 ❮▬▭▭▭▭❯\n*❃━━━═✦•〘•💕•〙•✦═━━━❃*'
global.waittttt = '*❃━━━═✦•〘•🌸•〙•✦═━━━❃*\n*❮💋❯⪼ جاري التحميل*\n*┊〄 ❮▬▭▭▭▭❯\n*❃━━━═✦•〘•💕•〙•✦═━━━❃*'
global.rg = '『✅ النتائج ✅』\n\n'
global.resultado = rg
global.ag = '『⚠️ إعلان ⚠️』\n\n'
global.advertencia = ag
global.iig = '『❕ مـعـلــومــة 』\n\n'
global.informacion = iig
global.fg = '『❌ خطأ ❌』\n\n'
global.fallo = fg
global.mg = '『❗️ 𝙇𝙊 𝙐𝙎𝙊 𝙈𝘼𝙇❗』\n\n'
global.mal = mg
global.eeg = '『📩 ابلاغ 📩』\n\n'
global.envio = eeg
global.eg = '『💚 نجاح 💚』\n\n'
global.exito = eg

//-------------------------[ IMAGEN ]------------------------------
global.img = "https://qu.ax/Owghm.jpg"
global.img1 = 'https://qu.ax/Owghm.jpg'
global.img2 = 'https://qu.ax/Owghm.jpg'

global.imagen = fs.readFileSync('./Menu2.jpg')
global.imagen1 = fs.readFileSync('./media/Menu1.jpg')
global.imagen2 = fs.readFileSync('./media/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/Menu3.jpg')
global.imagen4 = fs.readFileSync('./media/Menu4.jpg')
global.imagen5 = 'https://qu.ax/GBYCY.jpg'
global.imagen6 = 'https://qu.ax/TjNaY.jpg'
global.menu18 = 'https://qu.ax/JWVpS.jpg'
global.vid1 = 'https://qu.ax/PKiiU.mp4'
global.img = [imagen, imagen1, imagen2, imagen3, imagen4]
global.imageUrl = ["https://qu.ax/ZNAUE.jpg", "https://qu.ax/HYtLT.jpg", "https://qu.ax/nrLHp.jpg"]

//----------------------------[ NIVELES | RPG ]---------------------------------

global.multiplier = 850 // Cuanto más alto, más difícil subir de nivel
global.maxwarn = '3' // máxima advertencias

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

//---------------[ IDs de canales ]----------------

global.ch = {
ch1: '120363399336067154@newsletter',
}

//----------------------------------------------------

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
