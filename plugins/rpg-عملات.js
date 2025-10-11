let handler = async (m, { conn }) => {

  let hasil = Math.floor(Math.random() * 35)
  let time = global.db.data.users[m.sender].lastmiming + 14400000
  if (new Date - global.db.data.users[m.sender].lastmiming < 14400000) throw `╮───────────────╭ـ\n*لقد أخذت عملاتك بالفعل انتظر* \n︎︎${msToTime(time - new Date())}\n︎╯───────────────╰ـ`
  global.db.data.users[m.sender].limit += hasil
  m.reply(`╮───────────────╭ـ\n*تـم تـجـمـيـع عـمـلاتك* \n︎︎│ *المبلغ » ${hasil} 🪙* \n︎╯───────────────╰ـ`)
  global.db.data.users[m.sender].lastmiming = new Date * 1
}
handler.help = ['amlet']
handler.tags = ['econ']
handler.command = ['عملات'] 

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + "🕰️ساعات |" + minutes + "💠 دقايق| " + seconds + "🛎️ ثواني |" 
      }
