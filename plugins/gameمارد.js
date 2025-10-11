let handler = async (m, { conn, usedPrefix, command }) => {
  conn.animeAkinator = conn.animeAkinator || {}
  if (conn.animeAkinator[m.sender]) return

  const questions = [
    { q: "هل الشخصية من أنمي ون بيس؟", tag: "onepiece" },
    { q: "هل الشخصية من أنمي ناروتو؟", tag: "naruto" },
    { q: "هل الشخصية من أنمي ديث نوت؟", tag: "deathnote" },
    { q: "هل الشخصية من أنمي هجوم العمالقة؟", tag: "aot" },
    { q: "هل الشخصية قوية جدًا؟", tag: "strong" },
    { q: "هل الشخصية ذكية؟", tag: "smart" },
    { q: "هل الشخصية شريرة؟", tag: "villain" },
    { q: "هل الشخصية طيبة؟", tag: "good" },
    { q: "هل الشخصية تحب القتال؟", tag: "fight" },
    { q: "هل الشخصية مرحة؟", tag: "funny" },
    { q: "هل الشخصية تستخدم سيفًا؟", tag: "sword" },
    { q: "هل الشخصية تستخدم الطاقة الخارقة؟", tag: "powers" },
    { q: "هل الشخصية أنثى؟", tag: "female" },
    { q: "هل الشخصية ذكر؟", tag: "male" },
    { q: "هل الشخصية لديها أخ أو أخت؟", tag: "sibling" },
    { q: "هل الشخصية تحب الطعام؟", tag: "foodie" },
    { q: "هل الشخصية قاتلة؟", tag: "killer" },
    { q: "هل الشخصية زعيم؟", tag: "leader" },
    { q: "هل الشخصية بطل القصة؟", tag: "main" },
    { q: "هل الشخصية ذكية جدًا؟", tag: "smart" }
  ]

  const characters = [
    { name: "لوفي", tags: ["onepiece", "hat", "funny", "fight", "foodie", "strong"], image: "https://qu.ax/WccBS.jpg" },
    { name: "زورو", tags: ["onepiece", "sword", "strong"], image: "https://qu.ax/jEWiH.jpg" },
    { name: "ناروتو", tags: ["naruto", "ninja", "funny", "strong"], image: "https://qu.ax/iayOb.jpg" },
    { name: "ساسكي", tags: ["naruto", "ninja", "sword", "sibling", "strong"], image: "https://qu.ax/kqVBi.jpg" },
    { name: "لايت ياجامي", tags: ["deathnote", "smart", "villain"], image: "https://qu.ax/UWdRe.jpg" },
    { name: "إل (L)", tags: ["deathnote", "smart", "good"], image: "https://i.ibb.co/WPWfQm3/l.jpg" },
    { name: "غوكو", tags: ["powers", "strong", "fight", "good"], image: "https://qu.ax/wJpdp.jpg" },
    { name: "ليفاي", tags: ["aot", "sword", "smart", "strong"], image: "https://i.ibb.co/2Kt0z5H/levi.jpg" },
    { name: "إيرين ييغر", tags: ["aot", "strong", "leader", "fight"], image: "https://i.ibb.co/vhvWjpY/eren.jpg" },
    { name: "ميكاسا أكرمان", tags: ["aot", "strong", "sword", "good"], image: "https://i.ibb.co/t2QmCjj/mikasa.jpg" }
  ];

  let session = {
    step: 0,
    answers: [],
    asked: [],
    maxSteps: 15,
    yesCount: 0,
    noCount: 0,
    maybeCount: 0,
    waitingConfirm: false
  }

  const askQuestion = async () => {
    let q
    do {
      q = questions[Math.floor(Math.random() * questions.length)]
    } while (session.asked.includes(q.tag))
    session.asked.push(q.tag)
    session.currentTag = q.tag

    await conn.sendMessage(m.chat, {
      image: { url: 'https://qu.ax/zYMBR.jpg' },
      caption: `*∘₊✧─────⊰🕷⊱─────✧₊∘*\n \`\`\`مرحبا بك في لعبة المارد\`\`\`\n*◈╎الاعب:* \`@${m.sender.split('@')[0]}\`\n\n\`◈╎🧠 السؤال ${session.step + 1}: ${q.q}\`\n\n\`نعم - لا - يمكن\`\n*𝖧𝖮𝖱𝖠-𝖡𝖮𝖳*\n للخروج من اللعبة اكتب *.الغاء* `
    })
  }

  conn.animeAkinator[m.sender] = { session, askQuestion }

  await askQuestion()
}

handler.before = async (m, { conn }) => {
  if (!conn.animeAkinator || !conn.animeAkinator[m.sender]) return
  let { session, askQuestion } = conn.animeAkinator[m.sender]

  if (m.text.toLowerCase() === 'الغاء') {
    delete conn.animeAkinator[m.sender]
    return m.reply('🛑 تم إلغاء اللعبة.')
  }

  if (session.waitingConfirm) {
    let confirm = m.text.toLowerCase()
    if (confirm === 'نعم') {
      delete conn.animeAkinator[m.sender]
      return m.reply('🎉 رائع! لقد خمنت بشكل صحيح!')
    } else if (confirm === 'لا') {
      session.waitingConfirm = false
      session.step = 0
      session.answers = []
      session.asked = []
      session.yesCount = 0
      session.noCount = 0
      session.maybeCount = 0
      return askQuestion()
    } else {
      return
    }
  }

  let res = m.text.toLowerCase()
  if (!['نعم', 'لا', 'يمكن'].includes(res)) return

  if (res === 'نعم') {
    session.answers.push(session.currentTag)
    session.yesCount++
  } else if (res === 'لا') {
    session.noCount++
  } else if (res === 'يمكن') {
    session.maybeCount++
  }

  session.step++

  if (session.step >= session.maxSteps) {
    let scores = Object.values(conn.animeAkinator[m.sender].session.answers)
    let sorted = characters.map(c => {
      let match = c.tags.filter(t => session.answers.includes(t)).length
      return { ...c, score: match }
    }).sort((a, b) => b.score - a.score)

    let guess = sorted[0]

    await conn.sendFile(m.chat, guess.image, 'guess.jpg',
      `🤔 أعتقد أنك تفكر في: *${guess.name}*!\nهل هذا صحيح؟\nنعم - لا`, m)

    session.waitingConfirm = true
    session.guess = guess
  } else {
    askQuestion()
  }
}

handler.command = /^(مارد|المارد|الغاء)$/i
handler.help = ['المارد']
handler.tags = ['game']

export default handler
