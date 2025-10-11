const handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) return;
  if (isAdmin) throw "*[❗] انت ادمن اصلاً يا مطوري ❤️*\n@+33760509044";
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply("*[❗] آيف مش قادر*");
  }
};

handler.command = /^ارفعني|adm$/i;
handler.botAdmin = true;
handler.group = true;
handler.admin = true;

export default handler;
