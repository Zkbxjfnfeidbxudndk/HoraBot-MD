import ws from 'ws';

async function handler(m, { conn: _envio, usedPrefix }) {
  const msgTxt = "✅ *توفير البوت للانضمام إلى المجموعات*";
  const msgTxt2 = "الوقت النشط";
  const msgTxt3 = "*لا توجد بوتات فرعية متصلة، يرجى التحقق لاحقًا.*";
  const msgTxt4 = "اسم المستخدم";
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];

  function convertirMsADiasHorasMinutosSegundos(ms) {
    var segundos = Math.floor(ms / 1000);
    var minutos = Math.floor(segundos / 60);
    var horas = Math.floor(minutos / 60);
    var días = Math.floor(horas / 24);
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    var resultado = "";
    if (días !== 0) {
      resultado += días + " أيام, ";
    }
    if (horas !== 0) {
      resultado += horas + " ساعات, ";
    }
    if (minutos !== 0) {
      resultado += minutos + " دقائق, ";
    }
    if (segundos !== 0) {
      resultado += segundos + " ثواني";
    }
    return resultado;
  }

  const message = users.map((v, index) => {
    const botConfig = global.db.data.users[v.user.jid] || {};
    const botNumber = botConfig.privacy ? `${msgTxt4}: ` : `wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado`
    const prestarStatus = botConfig.privacy ? '' : (botConfig.prestar ? msgTxt : '');
    return `👉🏻 ${botNumber} (${v.user.name || '-'})\n*🔰 ${msgTxt2} :* ${v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "مجهول"}\n${prestarStatus}`}).join('\n\n');

  const replyMessage = message.length === 0 ? msgTxt3 : message;
  const totalUsers = users.length;
  const responseMessage = `╮••─๋︩︪──๋︩︪─═⊐‹🤖›⊏═─๋︩︪──๋︩︪─┈☇\n` +
    `╿↵ *🤖 إليك قائمة بعض البوتات الفرعية (jadibot/serbot)*\n` +
    `── • ◈ • ──\n` +
    `*👉🏻 يمكنك التواصل معهم لمعرفة ما إذا كانوا سينضمون إلى مجموعتك*\n\n` +
    `*✳️ يرجى منك:*\n` +
    `*1.- كن لطيفًا ✅*\n` +
    `*2.- لا تُصر أو تجادل ✅*\n\n` +
    `*⚠️ إذا ظهرت لك هذه الرسالة فارغة، فهذا يعني أنه لا توجد بوتات فرعية متاحة حاليًا، يرجى المحاولة لاحقًا*\n\n` +
    `*⚠️ ملاحظة: هم أشخاص لا نعرفهم، لذلك فريق KITO-MD غير مسؤول عن أي شيء قد يحدث معهم*\n\n` +
    `*🤖 البوتات الفرعية المتصلة:* ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();

  await _envio.sendMessage(m.chat, {
    text: responseMessage,
    contextInfo: {
      mentionedJid: _envio.parseMention(responseMessage),
      externalAdReply: {
        mediaUrl: null,
        mediaType: 1,
        description: null,
        title: wm,
        body: '𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩',
        previewType: 0,
        thumbnail: img.getRandom(),
        sourceUrl: redes.getRandom()
      }
    }
  }, { quoted: m });
}

handler.command = handler.help = ['listjadibot', 'بوتات'];
handler.tags = ['jadibot'];
handler.register = true;
handler.owner = true;
export default handler;
