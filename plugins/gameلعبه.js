/**
 * 🎮 لعبة أنمي صح أو خطأ
 * 🛠 المطور: Niru
 * 📅 النسخة: 1.0
 * ✅ أوامر: .quiz, .tf_صح, .tf_خطأ
 */
 const timeout = 60000; // 60 ثانية لكل سؤال
const maxAttempts = 1; // عدد المحاولات لكل سؤال

// أسئلة أنمي
const animeQuizTF = [
    { question: "لوفي لم يستخدم تقنية الـ Gear Fourth إلا في القتال ضد كايدو.", right_answer: "صح" },
    { question: "ناروتو فقد ساقيه بعد قتال مع ساسكي.", right_answer: "خطأ" },
    { question: "إرين يعلم الحقيقة عن العمالقة من مذكرات والده.", right_answer: "صح" },
    { question: "غوكو فقد حياته عند قتال جيرين في توف البطولة الكونية.", right_answer: "خطأ" },
    { question: "ميكاسا تنتمي لعشيرة الآكْرمان.", right_answer: "صح" },
    { question: "سانجي فقد إحدى ساقيه في أنمي ون بيس.", right_answer: "خطأ" },
    { question: "زورو تمكن من تقطيع صخرة كبيرة بسهولة دون أي تدريب.", right_answer: "خطأ" },
    { question: "ناروتو استخدم قوة الثعلب التسعة لأول مرة أثناء اجتياز امتحان التشونين.", right_answer: "خطأ" },
    { question: "لوفي لديه القدرة على استخدام هاكي الملكي.", right_answer: "صح" },
    { question: "إيتشيغو فقد قوة الشينيغامي بعد قتال ضد أوراهارا.", right_answer: "خطأ" }
];

// حقوق Niru
function addNiruFooter(text) {
    return `${text}\n\n— مطور اللعبة: Niru`;
}

// handler
let handler = async (m, { conn, command }) => {
    if (!conn.quiz) conn.quiz = {};

    const id = m.chat;

    if (command.startsWith('tf_')) {
        let quiz = conn.quiz[id];
        if (!quiz) return;

        const selectedAnswer = command.split('_')[1]; // صح أو خطأ
        const isCorrect = quiz[0].right_answer === selectedAnswer;

        if (isCorrect) {
            await conn.reply(m.chat, addNiruFooter("*✅ إجابة صحيحة! +500XP*"), m);
            try { global.db.data.users[m.sender].exp += 500; } catch (e) {}
            clearTimeout(quiz[2]);
            delete conn.quiz[id];
        } else {
            quiz[3] -= 1;
            if (quiz[3] > 0) {
                await conn.reply(m.chat, addNiruFooter(`*❌ إجابة خاطئة! تبقى لك ${quiz[3]} محاولة*`), m);
            } else {
                await conn.reply(m.chat, addNiruFooter(`*❌ انتهت المحاولات! الإجابة الصحيحة: ${quiz[0].right_answer}*`), m);
                clearTimeout(quiz[2]);
                delete conn.quiz[id];
            }
        }
    } else if (command === 'quiz' || command === 'لعبه_انمي') {
        if (id in conn.quiz) {
            await conn.reply(m.chat, addNiruFooter("*⌫ يجب الإجابة على السؤال الحالي أولاً!*"), m);
            return;
        }

        const quizData = animeQuizTF[Math.floor(Math.random() * animeQuizTF.length)];
        const caption = `
${quizData.question}

💰 الجائزة: 500XP
⚡ الوقت: ${(timeout / 1000).toFixed(0)} ثانية
        `.trim();

        const buttons = [
            { name: "quick_reply", buttonParamsJson: `{"display_text":"✅ صح","id":".tf_صح"}` },
            { name: "quick_reply", buttonParamsJson: `{"display_text":"❌ خطأ","id":".tf_خطأ"}` }
        ];

        await conn.relayMessage(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: { title: '*سؤال أنمي صعب*' },
                        body: { text: addNiruFooter(caption) },
                        nativeFlowMessage: { buttons }
                    }
                }
            }
        }, {});

        conn.quiz[id] = [
            quizData,
            500,
            setTimeout(async () => {
                if (conn.quiz[id]) {
                    await conn.reply(m.chat, addNiruFooter(`*⌛ انتهى الوقت! الإجابة الصحيحة: ${quizData.right_answer}*`), m);
                    delete conn.quiz[id];
                }
            }, timeout),
            maxAttempts
        ];
    }
};

handler.help = ['كويز niru'];
handler.tags = ['game'];
handler.command = /^(لعبه_انمي|quiz|tf_(صح|خطأ))$/i;

export default handler;
