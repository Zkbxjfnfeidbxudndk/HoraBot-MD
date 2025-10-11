import fs from 'fs';

let timeout = 60000;
let poin = 500;

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {};
    let id = m.chat;
    if (id in conn.tekateki) {
        conn.reply(m.chat, '*┈──╌❊ ⁽🌸⁾ ❊╌──┈*\n\n*╏ لسه مجاوبتش ع السؤال ده 🗿*\n\n*┈──╌❊ ⁽🌸⁾ ❊╌──┈*', conn.tekateki[id][0]);
        throw false;
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/كت.json`));
    let json = tekateki[Math.floor(Math.random() * tekateki.length)];
    let _clue = json.response;
    let clue = _clue.replace(/[A-Za-z]/g, ''); // Fixed this line
    let caption = `
*┈──╌❊ ⁽🌸⁾ ❊╌──┈*
    
*〘 ${json.question} 〙*

*╏ الـوقـت↞ ${(timeout / 1000).toFixed(2)}*

*╏ الـجـائزة💰↞ ${poin} نقاط*

> 𝑯𝑶𝑹𝑨-𝑩𝑶𝑻
*┈──╌❊ ⁽🌸⁾ ❊╌──┈*
`.trim();
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `*┈──╌❊ ⁽🌸⁾ ❊╌──┈*\n\n*╏ الوقت خلص وانت فاشل مجوبتش*\n\n*╏ ↞الــــاجـــابـــه ${json.response}*\n\n*┈──╌❊ ⁽🌸⁾ ❊╌──┈*`, conn.tekateki[id][0]);
            delete conn.tekateki[id];
        }, timeout)
    ];
};

handler.help = ['miku'];
handler.tags = ['game'];
handler.command = /^(كت)$/i;

export default handler;
