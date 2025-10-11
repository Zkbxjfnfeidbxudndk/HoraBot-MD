function tr(text) {

  return text; // ترجمة وهمية مؤقتة

}
let handler = async (m, { conn }) => {
  if (global.conn.user.jid === conn.user.jid) {
    await m.reply(await tr(`╮••─๋︩︪──๋︩︪─═⊐‹⚠️›⊏═─๋︩︪──๋︩︪─┈☇\n╿↵ *⚠️ هذا الأمر يمكن تنفيذه فقط من قبل مستخدم ليس بوت فرعي*\n── • ◈ • ──`));
  } else {
    await m.reply(await tr(`╮••─๋︩︪──๋︩︪─═⊐‹💔›⊏═─๋︩︪──๋︩︪─┈☇\n╿↵ *وداعًا بوت :(*\n── • ◈ • ──\n*🚫 البوت سيتم إغلاقه الآن*`));
    conn.ws.close();
  }
};

handler.help = ['stop'];
handler.tags = ['jadibot'];
handler.command = /^(ايقاف_تنصيب|stop|detener)$/i;
handler.private = true;
handler.owner =true;
export default handler;
