export async function participantsUpdate({ id, participants, action }, conn) {
  try {
    if (action === 'add') {
      for (const user of participants) {
        // جلب معلومات المجموعة
        const groupMetadata = await conn.groupMetadata(id)
        const groupName = groupMetadata.subject

        // صورة المستخدم أو بديلة
        let ppUser
        try {
          ppUser = await conn.profilePictureUrl(user, 'image')
        } catch {
          ppUser = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'
        }

        // نص الترحيب
        let text = conn.welcome
          ? conn.welcome
              .replace(/@user/g, '@' + user.split('@')[0])
              .replace(/@subject/g, groupName)
          : `✨ أهلاً وسهلاً @${user.split('@')[0]} في مجموعة *${groupName}* 🌸`

        await conn.sendMessage(id, {
          image: { url: ppUser },
          caption: text,
          mentions: [user]
        })
      }
    } else if (action === 'remove') {
      for (const user of participants) {
        let text = conn.bye
          ? conn.bye.replace(/@user/g, '@' + user.split('@')[0])
          : `👋 وداعاً @${user.split('@')[0]} نتمنى نلقاك بخير 🌷`

        await conn.sendMessage(id, {
          text,
          mentions: [user]
        })
      }
    }
  } catch (err) {
    console.error('❌ خطأ في participantsUpdate:', err)
  }
}
