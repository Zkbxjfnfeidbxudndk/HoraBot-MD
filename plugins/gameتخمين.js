let timeout = 60000; // وقت كل جولة بالميلي ثانية
let poin = 500;      // نقاط لكل إجابة صحيحة

// بدء اللعبة
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.guessnumber = conn.guessnumber || {};
    let id = m.chat;

    if (id in conn.guessnumber) {
        conn.reply(m.chat, '❐┃يجب إنهاء اللعبة السابقة أولاً┃❌', conn.guessnumber[id][0]);
        throw false;
    }

    // اختيار رقم عشوائي من 1 إلى 100
    let number = Math.floor(Math.random() * 100) + 1;

    let caption = `
${command.toUpperCase()}
❐↞┇الوقت⏳↞ ${(timeout / 1000).toFixed(0)} ثانية
❐↞┇الجائزة💰↞ ${poin} نقاط
❐↞┇أرسل الرقم لتخمينه
❐↞┇أو اكتب: ${usedPrefix}انسحب للانسحاب
`;

    conn.guessnumber[id] = [
        await conn.reply(m.chat, caption, m),
        number,
        poin,
        setTimeout(() => {
            if (conn.guessnumber[id]) {
                conn.reply(m.chat, `❮ ⌛ انتهى الوقت ⌛ ❯\n❐↞┇الرقم الصحيح↞ ${number}`, conn.guessnumber[id][0]);
                delete conn.guessnumber[id];
            }
        }, timeout)
    ];
};

// تخمين الرقم
let guessHandler = async (m, { conn, text }) => {
    let id = m.chat;
    if (!(id in conn.guessnumber)) return;
    let guess = parseInt(text);
    if (isNaN(guess)) return conn.reply(m.chat, '❌┃الرجاء إدخال رقم صحيح┃', m);

    let [msg, number, points] = conn.guessnumber[id];

    if (guess === number) {
        conn.reply(m.chat, `✅┃مبروك! الرقم الصحيح هو ${number}\n💰 حصلت على ${points} نقاط`, m);
        global.db.data.users[m.sender].exp += points;
        clearTimeout(conn.guessnumber[id][3]);
        delete conn.guessnumber[id];
    } else if (guess < number) {
        conn.reply(m.chat, '⬆️ الرقم أكبر', m);
    } else if (guess > number) {
        conn.reply(m.chat, '⬇️ الرقم أصغر', m);
    }
};

// الانسحاب
let giveUpHandler = async (m, { conn }) => {
    let id = m.chat;
    if (!(id in conn.guessnumber)) return;
    let number = conn.guessnumber[id][1];
    conn.reply(m.chat, `❌ انسحبت! الرقم الصحيح هو ${number}`, m);
    clearTimeout(conn.guessnumber[id][3]);
    delete conn.guessnumber[id];
};

handler.help = ['احزر'];
handler.tags = ['game'];
handler.command = /^تخمين_رقم$/i;

export default handler;
export { guessHandler, giveUp
