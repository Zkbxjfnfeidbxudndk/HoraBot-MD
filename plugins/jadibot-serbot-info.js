import ws from 'ws'

async function handler(m, { conn: stars, usedPrefix }) {
  let uniqueUsers = new Map()

  global.conns.forEach((conn) => {
    if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
      uniqueUsers.set(conn.user.jid, conn)
    }
  })

  let users = [...uniqueUsers.values()]
  let totalUsers = users.length

  let message = users.map((v, index) => 
`╮─ׅ─๋︩︪─┈─๋︩︪─═⊐‹✨›⊏═┈ ─๋︩︪─ ∙ ∙ ⊰ـ
│┊ ۬.͜ـ🤖˖ ⟨ ${index + 1} ⟩ 
│┊ ۬.͜ـ🌐˖ *الرقم:* wa.me/${v.user.jid.replace(/[^0-9]/g, '')}
│┊ ۬.͜ـ📛˖ *الاسم:* ${v.user.name || 'بوت فرعي'}
│┊ ۬.͜ـ🔗˖ *المعرف:* @${v.user.jid.replace(/[^0-9]/g, '')}
┤└─ׅ─ׅ┈ ─๋︩︪──ׅ─ׅ┈ ─๋︩︪☇ـ`).join('\n\n')

  let responseMessage = 
`╮••─๋︩︪──๋︩︪─═⊐‹⧫›⊏═─๋︩︪──๋︩︪─┈☇
╿↵ *قائمـة البـوتـات الفرعيـة المتصـلة:*
╰─ׅ─๋︩︪─┈─๋︩︪─═⊐‹🤖›⊏═┈ ─๋︩︪─ ∙ ∙ ⊰ـ
┤┌─ׅׅ───ׅׅ┈ • ◈ • ──
│┊ ۬.͜ـ📊˖ *العدد الكلي:* ${totalUsers}
┤└─ׅ─ׅ┈ ─๋︩︪──ׅ─ׅ┈ ─๋︩︪☇ـ

${message}`.trim()

  await stars.sendMessage(m.chat, {
    text: responseMessage,
    mentions: stars.parseMention(responseMessage)
  }, { quoted: fkontak })
}

handler.command = ['listjadibot', 'bots']
handler.help = ['bots']
handler.tags = ['jadibot']
export default handler
