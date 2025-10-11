const roles = {
    'مواطن 👨🏻‍💼': 0,
     'فقير 😞': 2,
      'موظف 👨🏻‍🔧': 4,
       'رجل اعمال 🧑🏻‍✈️': 5,
        'طباخ 👨🏻‍🍳': 10,
    'عميل سري 🥷🏻': 15,
     'عسكري 💂🏻': 20,
      'كاتب 📚': 30,
       'جاسوس 🕵🏻': 35,
       'مصارع 🤼‍♂': 40,
    'قاضي 👩‍⚖': 45,
     'لاعب كرة قدم ⚽': 50,
      'رسام 🧑🏻‍🎨': 55,
       'مدير بنك 🏦': 60,
        'مدير مدرسة 🧶': 65,
    'ظابط شرطة 👮‍♂️': 70,
     'كاتب ✒️': 75,
      'ظابط جيش 🎖️': 80,
       'ممثل 👨‍🎤': 85,
        'نائب الرئيس 🤵🏻‍♂': 90,
    'الرئيس 🤵🏻‍♂': 100,
}

let handler = m => m
handler.before = async function (m, { conn }) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}
export default handler
