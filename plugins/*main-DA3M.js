import fetch from 'node-fetch';
import fs from 'fs';

const handler = async (m, { conn }) => {
  try {
    // الصورة المستخدمة في الرسالة (تأكد أن الملف موجود)
    const pp = './Menu2.jpg';

    const d = new Date(Date.now() + 3600000);
    const locale = 'ar';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    const uptime = clockString(process.uptime() * 1000);
    const taguser = '@' + m.sender.split('@')[0];

    // نص الرسالة
    const str = `
> *﹝⟣┈┈┈⟢﹝🍁﹞⟣┈┈┈⟢﹞*
> 👋🏻 أهلاً, ${taguser}
> *أنا مطور بوت أورا 🔮*

📞 *رقم المطور الرئيسي:*  
https://wa.me/+33760509044

📞 *مساعد المطور:*  
https://wa.me/+201113599698

> *▫️البوت تم تطويره بواسطة Niru / Luffy*
> *انضم إلى القناة لمعرفة التحديثات القادمة:*  
https://whatsapp.com/channel/0029VbA5scz0VycPOBi6A32G

> *▫️مجموعة الدعم:*  
https://chat.whatsapp.com/FrEiPzjejEy7UmxGoEvHOa?mode=ems_copy_t

> *﹝⟣┈┈┈⟢﹝🍁﹞⟣┈┈┈⟢﹞*
`.trim();

    // رسالة الاتصال (لتظهر كاقتباس جميل)
    const contactMsg = {
      key: {
        participants: '0@s.whatsapp.net',
        remoteJid: 'status@broadcast',
        fromMe: false,
        id: 'AuraBot'
      },
      message: {
        contactMessage: {
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:AuraBot;;;\nFN:AuraBot\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:واتساب\nEND:VCARD`
        }
      },
      participant: '0@s.whatsapp.net'
    };

    // إرسال الرسالة بصورة البوت
    await conn.sendMessage(
      m.chat,
      {
        image: { url: pp },
        caption: str,
        mentions: [m.sender]
      },
      { quoted: contactMsg }
    );

  } catch (err) {
    console.error(err);
    conn.reply(m.chat, '⚠️ حدث خطأ أثناء تنفيذ الأمر.', m);
  }
};

handler.command = /^(معلومات_المطور|owner|الدعم|دعم|menuowner|auraowner)$/i;
handler.exp = 50;
export default handler;

// دالة حساب وقت التشغيل
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
