import { Client } from 'whatsappy';
import { group, access } from "./system/control.js";
import UltraDB from "./system/UltraDB.js";

/* =========== Client ========== */
const client = new Client({
  phoneNumber: '967777840294', // Bot number
  prefix: [".", "/", "!"],
  fromMe: false,
  owners: [
  // Owner 1
    { name: "𝑋࿖", lid: "247579682029763@lid", jid: "33760509044@s.whatsapp.net" }
  ],
  commandsPath: './plugins'
});

client.onGroupEvent(group);
client.onCommandAccess(access);

/* =========== Database ========== */
if (!global.db) {
    global.db = new UltraDB();
}

/* =========== Config ========== */
const { config } = client;
config.info = { 
  nameBot: "★˖┊ 𝐛𝐨𝐭☁︎˚𝐣𝐚𝐱 │🍇›", 
  nameChannel: " ✮⋆˙⦓  🍓⃝ᒍᗩ᙭ ᑕᕼᗩᑎᑎᒪ ⦔˙⋆✮", 
  idChannel: "120363425878747150@newsletter",
  urls: {
    repo: "https://github.com/deveni0/Pomni-AI",
    api: "https://emam-api.web.id",
    channel: "https://whatsapp.com/channel/0029VaQim2bAu3aPsRVaDq3v"
  },
  copyright: { 
    pack: '𝑋࿖', 
    author: 'قطلر'
  },
  images: [
    "https://files.catbox.moe/v4ymd9.jpg",
    "https://files.catbox.moe/p9j33q.jpg",
    "https://files.catbox.moe/a5quvu.jpg",
    "https://files.catbox.moe/5yrwya.jpg"
  ]
};

/* =========== Start ========== */
client.start();

