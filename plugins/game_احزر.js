import fetch from 'node-fetch';

let timeout = 60000; // 60 ثانية لكل سؤال
let poin = 500;

function addNiruFooter(text) {
    return `${text}\n\n— مطور : Niru`;
}

let handler = async (m, { conn, command }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {};
    let id = m.chat;

    if (id in conn.tebakbendera) {
        conn.reply(m.chat, addNiruFooter('❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯'), conn.tebakbendera[id][0]);
        throw false;
    }

    // جلب بيانات الأعلام من الـ gist
    let src = await (await fetch('https://gist.githubusercontent.com/Kyutaka101/98d564d49cbf9b539fee19f744de7b26/raw/f2a3e68bbcdd2b06f9dbd5f30d70b9fda42fec14/guessflag')).json();
    let json = src[Math.floor(Math.random() * src.length)];

    let caption = addNiruFooter(`
${command.toUpperCase()}
❐↞┇الـوقـت⏳↞ ${(timeout / 1000).toFixed(0)} ثانية
*استخدم .انسحب للانسحاب*
❐↞┇الـجـائـزة💰↞ ${poin} نقاط
`);

    // إرسال العلم
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json,
        poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) {
                conn.reply(m.chat, addNiruFooter(`❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ ${json.name}┇`), conn.tebakbendera[id][0]);
                delete conn.tebakbendera[id];
            }
        }, timeout)
    ];
};

handler.help = ['guessflag'];
handler.tags = ['game'];
handler.command = /^احزر/i;

export default handler;
