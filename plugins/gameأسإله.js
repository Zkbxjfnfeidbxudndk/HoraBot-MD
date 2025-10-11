//حقوق كود لوفي mix 🌤 حلالك لو لقيته 😂 مهم خش قناتي https://whatsapp.com/channel/0029VbA5scz0VycPOBi6A32G
const timeout = 60000;

// أسئلة الأنمي المحلية
const animeQuiz = [
    { question: "من هو بطل أنمي دراغون بول؟", answer_1: "غوكو", answer_2: "فيجيتا", answer_3: "غوهان", answer_4: "", right_answer: "1" },
    { question: "من هو قائد فريق السلاحف في ون بيس؟", answer_1: "لوفي", answer_2: "زورو", answer_3: "سانجي", answer_4: "", right_answer: "1" },
    { question: "من هو أشهر نينجا في ناروتو؟", answer_1: "ناروتو", answer_2: "ساسكي", answer_3: "ساكورا", answer_4: "", right_answer: "1" },
    { question: "من هو بطل أنمي بليتش؟", answer_1: "ايشيدا", answer_2: "اوراهارا", answer_3: "كوروساكي", answer_4: "", right_answer: "3" },
    { question: "أي شخصية تُعرف بلقب الملك الشيطان؟", answer_1: "ميلور", answer_2: "إيسكانور", answer_3: "زورو", answer_4: "", right_answer: "2" },
    { question: "من هو صديق لوفي وخصمه في بعض الأحيان؟", answer_1: "سانجي", answer_2: "زورو", answer_3: "نامي", answer_4: "", right_answer: "2" },
    { question: "من هو بطل أنمي هجوم العمالقة؟", answer_1: "ليڤاي", answer_2: "إرين", answer_3: "ميكاسا", answer_4: "", right_answer: "2" },
    { question: "أي شخصية تُعرف بسرعة عالية جداً في ناروتو؟", answer_1: "شينو", answer_2: "ساسكي", answer_3: "كاكاشي", answer_4: "", right_answer: "2" },
    { question: "من هو صاحب تقنية السيف الأسطوري في بليتش؟", answer_1: "إينوي", answer_2: "اوروهارا", answer_3: "إيتشيغو", answer_4: "", right_answer: "3" },
    { question: "من هو بطل أنمي مقتل العملاق الأزرق؟", answer_1: "ليڤاي", answer_2: "إرين", answer_3: "هانجي", answer_4: "", right_answer: "1" },
    { question: "من هو الطباخ الرئيسي في طاقم قبعة القش؟", answer_1: "سانجي", answer_2: "زوفر", answer_3: "لوفي", answer_4: "", right_answer: "1" },
    { question: "من هو بطل أنمي ون بيس الذي لديه قوة المطاط؟", answer_1: "لوفي", answer_2: "زورو", answer_3: "فرانكي", answer_4: "", right_answer: "1" },
    { question: "من هو المعلم الذي علم ناروتو شقته الشهيرة؟", answer_1: "جيرايا", answer_2: "كاكاشي", answer_3: "أوروتشيمارو", answer_4: "", right_answer: "1" },
    { question: "أي شخصية بليتش يمكنها التحكم بالأرواح؟", answer_1: "إيتشيغو", answer_2: "اوروهارا", answer_3: "رينجي", answer_4: "", right_answer: "2" },
    { question: "من هو بطل أنمي دراغون بول الذي تحول إلى سوبر سايان؟", answer_1: "غوهان", answer_2: "غوكو", answer_3: "فيجيتا", answer_4: "", right_answer: "2" },
    { question: "أي شخصية من ون بيس تحب المال كثيراً؟", answer_1: "لوفي", answer_2: "نامي", answer_3: "زورو", answer_4: "", right_answer: "2" },
    { question: "من هو أخو ناروتو بالتبني؟", answer_1: "ساسوكي", answer_2: "ساي", answer_3: "نيجي", answer_4: "", right_answer: "1" },
    { question: "من هو قائد وحدة الاستطلاع في هجوم العمالقة؟", answer_1: "إرين", answer_2: "ليڤاي", answer_3: "هانجي", answer_4: "", right_answer: "2" },
    { question: "أي شخصية بليتش مشهورة بابتسامة المكر؟", answer_1: "اينوي", answer_2: "اوروهارا", answer_3: "هالبرتو", answer_4: "", right_answer: "2" },
    { question: "من هو بطل أنمي ناروتو الذي فقد ساقيه؟", answer_1: "هيروزو", answer_2: "ناروتو", answer_3: "كاكاشي", answer_4: "", right_answer: "3" },
    { question: "من هو أقدم تلميذ جيرايا؟", answer_1: "ناروتو", answer_2: "جيكو", answer_3: "ميناتو", answer_4: "", right_answer: "3" },
    { question: "من هو صاحب حلم أن يصبح ملك القراصنة؟", answer_1: "زورو", answer_2: "لوفي", answer_3: "سانجي", answer_4: "", right_answer: "2" },
    { question: "من هو قائد فريق 7 في ناروتو؟", answer_1: "كاكاشي", answer_2: "جيرايا", answer_3: "أوروتشيمارو", answer_4: "", right_answer: "1" },
    { question: "أي شخصية بليتش تستخدم سيف زانباكتو؟", answer_1: "ايتشيغو", answer_2: "اينوي", answer_3: "اوروهارا", answer_4: "", right_answer: "1" },
    { question: "من هو قائد الطاقم في أنمي ون بيس؟", answer_1: "زورو", answer_2: "سانجي", answer_3: "لوفي", answer_4: "", right_answer: "3" }
];

let handler = async (m, { conn, command }) => {
    if (command.startsWith('answer_')) {
        let id = m.chat;
        let quiz = conn.quiz[id];

        if (!quiz) return;

        let selectedAnswer = command.split('_')[1];
        let isCorrect = quiz[0].right_answer == selectedAnswer;

        if (isCorrect) {
            await conn.reply(m.chat, `*⎔⋅• ━ ╼╃ ⌬〔 🕷 〕⌬ ╄╾ ━ •⋅⎔*\n*✅╎اجـابـه صـحـيـحـة╎✅*\n*【💰الـجـائـز 500xp 】*\n*⎔⋅• ━ ╼╃ ⌬〔 🕷 〕⌬ ╄╾ ━ •⋅⎔*`, m);
            global.db.data.users[m.sender].exp += 500; 
            clearTimeout(quiz[2]);
            delete conn.quiz[id];
        } else {
            quiz[3] -= 1;
            if (quiz[3] > 0) {
                await conn.reply(m.chat, `*❌┇اجـابـة خـطـئ┇❌*\n> *⧉↫تـبـقـي عـدد مـحـولات↫ ${quiz[3]} ❯*`, m);
            } else {
                await conn.reply(m.chat, `*❌┇اجـابـة خـطـئ┇❌*\n> *⧉↫الاجـابـه الـصـحـيـحة↫ ${quiz[0]['answer_' + quiz[0].right_answer]} ❯*`, m);
                clearTimeout(quiz[2]);
                delete conn.quiz[id];
            }
        }
    } else {
        try {
            conn.quiz = conn.quiz ? conn.quiz : {};
            let id = m.chat;
            if (id in conn.quiz) {
                conn.reply(m.chat, '*⌫┇يـجـب أن يـتـم الاجـابـة عـلـي هـذا اولا قبل ارسال سؤال اخر┇〄*', conn.quiz[id][0]);
                return;
            }

            // اختيار سؤال عشوائي من مصفوفة الأسئلة
            const quizData = animeQuiz[Math.floor(Math.random() * animeQuiz.length)];

            const caption = `
*\`⊰┇${quizData.question}┇⊱\`*

*【⚡┇الـوقـت ⟣ ${(timeout / 1000).toFixed(0)} 】* 
*【💰┇الـجـائـزة ⟣ 500 𝚡𝚙】* 
            `.trim();

            await conn.relayMessage(m.chat, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: { title: '*سؤال أنمي*' },
                            body: { text: caption },
                            nativeFlowMessage: {
                                buttons: [
                                    { name: "quick_reply", buttonParamsJson: `{"display_text":"『1┇${quizData.answer_1}┇』","id":".answer_1"}` },
                                    { name: "quick_reply", buttonParamsJson: `{"display_text":"『2┇${quizData.answer_2}┇』","id":".answer_2"}` },
                                    { name: "quick_reply", buttonParamsJson: `{"display_text":"『3┇${quizData.answer_3}┇』","id":".answer_3"}` }
                                ]
                            }
                        }
                    }
                }
            }, {});

            conn.quiz[id] = [
                quizData,
                500,
                setTimeout(async () => {
                    if (conn.quiz[id]) {
                        await conn.reply(m.chat, `*⌛┇انـتـهـي الـوقـت┇⌛*\n> *الاجـابـة ⟣ ${quizData['answer_' + quizData.right_answer]}*`, m);
                        delete conn.quiz[id];
                    }
                }, timeout),
                2
            ];

        } catch (e) {
            console.error(e);
            conn.reply(m.chat, '*⌫┇حـدث خـطـأ فـي عـمـلـية الإرسال┇〄*', m);
        }
    }
};

handler.help = ['انمي'];
handler.tags = ['game'];
handler.command = /^(انمي|quiz|answer_\d)$/i;

export default handler;
