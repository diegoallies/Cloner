
/*

$$$$$$\            $$\                                               
$$  __$$\           $$ |                                              
$$ /  \__|$$\   $$\ $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\   $$$$$$\  
\$$$$$$\  $$ |  $$ |$$  __$$\ \____$$  |$$  __$$\ $$  __$$\ $$  __$$\ 
 \____$$\ $$ |  $$ |$$ |  $$ |  $$$$ _/ $$$$$$$$ |$$ |  \__|$$ /  $$ |
$$\   $$ |$$ |  $$ |$$ |  $$ | $$  _/   $$   ____|$$ |      $$ |  $$ |
\$$$$$$  |\$$$$$$  |$$$$$$$  |$$$$$$$$\ \$$$$$$$\ $$ |      \$$$$$$  |
 \______/  \______/ \_______/ \________| \_______|\__|       \______/

Project Name : SubZero MD
Creator      : Darrell Mucheri ( Mr Frank OFC )
Repo         : https//github.com/mrfrank-ofc/SUBZERO-MD
Support      : wa.me/18062212660
*/






















































const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

cmd({
    pattern: "menu",
    desc: "subzero menu",
    category: "menu",
    react: "📑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `

    \`${config.BOT_NAME}\`
    
⟣──────────────────⟢
▧ *ᴄʀᴇᴀᴛᴏʀ* : *ᴍʀ ғʀᴀɴᴋ (🇿🇼)*
▧ *ᴍᴏᴅᴇ* : *${config.MODE}*
▧ *ᴘʀᴇғɪx* : *${config.PREFIX}*
▧ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
▧ *ᴠᴇʀsɪᴏɴ* : *1.0.3*
▧ *ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}

⟣──────────────────⟢

> ＳＵＢＺＥＲＯ - ＭＤ- ＢＯＴ

\`❀━━━━━━━━━━━━━━━❀\`

${readmore}
*🏮 \`SUBZERO DOWNLOADER\` 🏮* 

╭─────────────···◈
*┋* *⬡ ғʙ*
*┋* *⬡ ɪɴꜱᴛᴀ*
*┋* *⬡ sᴘᴏᴛɪғʏ*
*┋* *⬡ ᴠɪᴅᴇᴏ*
*┋* *⬡ ɢᴅʀɪᴠᴇ*
*┋* *⬡ ᴛᴡɪᴛᴛᴇʀ*
*┋* *⬡ ᴛᴛ*
*┋* *⬡ ᴍᴇᴅɪᴀғɪʀᴇ*
*┋* *⬡ ꜱᴏɴɢ*
*┋* *⬡ ᴘʟᴀʏ*
*┋* *⬡ ᴘʟᴀʏ2*
*┋* *⬡ ᴘʟᴀʏ3*
*┋* *⬡ ᴠɪᴅᴇᴏ*
*┋* *⬡ ᴠɪᴅᴇᴏ2*
*┋* *⬡ ᴠɪᴅᴇᴏ3*
*┋* *⬡ ɢɪᴛᴄʟᴏɴᴇ*
*┋* *⬡ ɪᴍɢ*
*┋* *⬡ ᴀᴘᴋ*
*┋* *⬡ ʏᴛᴍᴘ3*
*┋* *⬡ ʏᴛᴍᴘ4*
*┋* *⬡ ᴘɪɴᴛᴇʀᴇsᴛ*
*┋* *⬡ ʙᴀɪsᴄᴏᴘᴇ*
*┋* *⬡ ɢɪɴɪsɪsɪʟᴀ*
*╰─────────────╶╶···◈*

*🔎 \`SEARCH-CMD\` 🔍* 

╭─────────────···◈
*┋* *⬡ ʏᴛꜱ*
*┋* *⬡ ʏᴛᴀ*
*┋* *⬡ ɢᴏᴏɢʟᴇ*
*┋* *⬡ ʟᴏʟɪ*
*┋* *⬡ ɢɪᴛsᴛᴀʟᴋ*
*┋* *⬡ ᴡɪᴋɪᴘᴇᴅɪᴀ*
*┋* *⬡ ᴍᴏᴠɪᴇɪɴғᴏ*
*┋* *⬡ ɢᴏᴏɢʟᴇ*
*┋* *⬡ ʙɪʙʟᴇ*
*┋* *⬡ ᴍᴏᴠɪᴇ*
*┋* *⬡ ᴡᴇᴀᴛʜᴇʀ*
*┋* *⬡ ssᴡᴇʙ
*┋* *⬡ ɴᴘᴍ*
*╰─────────────╶╶···◈*
*🧠 \`AI-CMD\` 🧠* 

╭─────────────···◈
*┋* *⬡ ɢᴘᴛ*
*┋* *⬡ ᴀɪ*
*┋* *⬡ sᴜʙᴢᴇʀᴏ*
*┋* *⬡ ɢᴇᴍɪɴɪ*
*┋* *⬡ ʙɪɴɢ*
*┋* *⬡ ᴄᴏᴘɪʟᴏᴛ*
*┋* *⬡ ᴍɪsᴛʀᴀᴀɪ*
*┋* *⬡ ᴍᴇᴛᴀᴀɪ*
*┋* *⬡ ᴄʜᴀᴛɢᴘᴛ*
*┋* *⬡ ɢᴘᴛ3*
*┋* *⬡ ɢᴘᴛ4*
*┋* *⬡ ɢᴘᴛ4ᴏ*
*┋* *⬡ ʟʟᴀᴍᴀ2*
*┋* *⬡ ʟʟᴀᴍᴀ3*
*┋* *⬡ ғʟᴜx*
*┋* *⬡ ɪᴍᴀɢɪɴᴇ*
*┋* *⬡ ᴅᴀʟʟᴇ*
╰─────────────╶╶···◈

*👨‍💻 \`OWNER-CMD\` 👨‍💻* 

╭─────────────···◈
*┋* *⬡ ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *⬡ sᴇᴛᴛɪɴɢs*
*┋* *⬡ ᴏᴡɴᴇʀ*
*┋* *⬡ ʀᴇᴘᴏ*
*┋* *⬡ ʙᴏᴛsᴇᴛᴛɪɴɢs*
*┋* *⬡ ꜱʏꜱᴛᴇᴍ*
*┋* *⬡ ᴜᴘᴅᴀᴛᴇ*
*┋* *⬡ ꜱᴛᴀᴛᴜꜱ*
*┋* *⬡ ʙʟᴏᴄᴋ*
*┋* *⬡ ᴜɴʙʟᴏᴄᴋ*
*┋* *⬡ sʜᴜᴛᴅᴏᴡɴ*
*┋* *⬡ ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *⬡ sᴇᴛᴘᴘ*
*┋* *⬡ ғᴜʟʟᴘᴘ*
*┋* *⬡ ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *⬡ ᴊɪᴅ*
*┋* *⬡ ɢᴊɪᴅ*
*┋* *⬡ ʀᴇꜱᴛᴀʀᴛ*
╰─────────────╶╶···◈

*👥 \`GROUP-CMD\` 👥* 

╭─────────────···◈
*┋* *⬡ ʀᴇᴍᴏᴠᴇ*
*┋* *⬡ ᴅᴇʟᴇᴛᴇ*
*┋* *⬡ ᴀᴅᴅ*
*┋* *⬡ ᴋɪᴄᴋ*
*┋* *⬡ ᴋɪᴄᴋᴀʟʟ*
*┋* *⬡ sᴇᴛɢᴏᴏᴅʙʏᴇ*
*┋* *⬡ sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*┋* *⬡ ᴘʀᴏᴍᴏᴛᴇ*
*┋* *⬡ ᴅᴇᴍᴏᴛᴇ*
*┋* *⬡ ᴛᴀɢᴀʟʟ*
*┋* *⬡ ɢᴇᴛᴘɪᴄ*
*┋* *⬡ ɪɴᴠɪᴛᴇ*
*┋* *⬡ ʀᴇᴠᴏᴋᴇ*
*┋* *⬡ ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *⬡ ᴀʟʟʀᴇǫ*
*┋* *⬡ ᴍᴜᴛᴇ*
*┋* *⬡ ᴜɴᴍᴜᴛᴇ*
*┋* *⬡ ʟᴏᴄᴋɢᴄ*
*┋* *⬡ ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *⬡ ʟᴇᴀᴠᴇ*
*┋* *⬡ ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *⬡ ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *⬡ ᴊᴏɪɴ*
*┋* *⬡ ʜɪᴅᴇᴛᴀɢ*
*┋* *⬡ ɢɪɴғᴏ*
*┋* *⬡ ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *⬡ ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *⬡ ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *⬡ sᴇɴᴅᴅᴍ*
*┋* *⬡ ᴏᴘᴇɴᴛɪᴍᴇ*
*┋* *⬡ ᴄʟᴏsᴇᴛɪᴍᴇ*
╰─────────────╶╶···◈

*📃 \`INFO-CMD\` 📃* 

╭─────────────···◈
*┋* *⬡ ᴍᴇɴᴜ*
*┋* *⬡ ᴀʟʟᴍᴇɴᴜ*
*┋* *⬡ ʙᴇᴛᴀᴍᴇɴᴜ*
*┋* *⬡ ᴀʙᴏᴜᴛ*
*┋* *⬡ sᴄʀɪᴘᴛ*
*┋* *⬡ ʀᴇᴘᴏ*
*┋* *⬡ ᴍʀғʀᴀɴᴋ*
*┋* *⬡ ᴀʟɪᴠᴇ*
*┋* *⬡ ʙᴏᴛɪɴꜰᴏ*
*┋* *⬡ ꜱᴛᴀᴛᴜꜱ*
*┋* *⬡ ꜱᴜᴘᴘᴏʀᴛ*
*┋* *⬡ ᴘɪɴɢ*
*┋* *⬡ ᴘɪɴɢ2*
*┋* *⬡ sᴜʙᴢᴇʀᴏɪɴᴄ*
*┋* *⬡ ꜱʏꜱᴛᴇᴍ*
*┋* *⬡ ᴘᴀɪʀ*
*┋* *⬡ ᴘᴀɪʀ2*
╰─────────────╶╶···◈

*🍭 \`CONVERTER-CMD\` 🍭* 

╭─────────────···◈
*┋* *⬡ sᴛɪᴄᴋᴇʀ*
*┋* *⬡ ᴛʀᴛ*
*┋* *⬡ ᴛʀᴛs*
*┋* *⬡ ᴛɢsᴛɪᴄᴋᴇʀ*
*┋* *⬡ ʟᴏɢᴏ*
*┋* *⬡ ʟᴏɢᴏ1*
*┋* *⬡ ʟᴏɢᴏ2*
*┋* *⬡ ғᴀɴᴄʏ*
*┋* *⬡ ᴠᴠ*
*┋* *⬡ ᴛᴇᴍᴘᴍᴀɪʟ*
╰─────────────╶╶···◈

*⚙️ \`SUBZERO-SETTINGS\` ⚙️* 

╭─────────────···◈
*┋* *⬡ sᴜʙᴢᴇʀᴏᴇɴᴠ*
*┋* *⬡ ᴜᴘᴅᴀᴛᴇ*
*┋* *⬡ ᴘɪɴɢ*
*┋* *⬡ ᴍʀғʀᴀɴᴋ*
*┋* *⬡ ᴏᴡɴᴇʀ*
*┋* *⬡ sᴜʙᴢᴇʀᴏɪɴᴄ*
*┋* *⬡ ᴀʙᴏᴜᴛ*
*┋* *⬡ sᴇᴛᴛɪɴɢs*
*┋* *⬡ ᴀʟɪᴠᴇ*
╰─────────────╶╶···◈

*♻️ \`RANDOM-CMD\` ♻️* 

╭─────────────···◈
*┋* *⬡ ᴄᴘᴘ*
*┋* *⬡ ᴅᴏɢ*
*┋* *⬡ ʀᴀɴᴅᴏᴍᴡᴀʟʟᴘᴇʀ*
*┋* *⬡ ʟᴏʟɪ*
*┋* *⬡ ᴀᴡᴏᴏ*
*┋* *⬡ ᴡᴀɪғᴜ*
*┋* *⬡ ɢᴀʀʟ*
*┋* *⬡ ᴍᴀɪᴅ*
*┋* *⬡ ɴᴇᴋᴏ*
*┋* *⬡ ᴀɴɪᴍᴇ*
*┋* *⬡ ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *⬡ ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *⬡ ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *⬡ ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *⬡ ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *⬡ ᴀɴɪᴍᴇɢɪʀʟ5*
╰─────────────╶╶···◈

*🎀 \`WALLPAPERS-CMD\` 🎀* 

╭─────────────···◈
*┋* *⬡ ɪᴍɢ*
*┋* *⬡ ᴡᴀʟʟᴘᴀᴘᴇʀ*
╰─────────────╶╶···◈

*😆 \`FUN-CMD\` 😆* 

╭─────────────···◈
*┋* *⬡ sʜʏ*
*┋* *⬡ sʜʏʏ*
*┋* *⬡ ʜᴀᴘᴘʏ*
*┋* *⬡ sᴀᴅ*
*┋* *⬡ ᴀɴɢʀʏ*
*┋* *⬡ ʜᴀɴᴅ*
*┋* *⬡ ɴɪᴋᴀʟ*
*┋* *⬡ ʜᴜɢ*
*┋* *⬡ ᴍᴏᴏɴ*
*┋* *⬡ ᴋɪss*
*┋* *⬡ ᴄᴏɴғᴜsᴇᴅ*
*┋* *⬡ ʜᴇᴀʀᴛ*
*┋* *⬡ ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
*┋* *⬡ ғᴀᴄᴛ*
*┋* *⬡ ᴛʀᴜᴛʜ*
*┋* *⬡ ᴅᴀʀᴇ*
*┋* *⬡ ᴄʜᴀʀᴀᴄᴛᴇʀ*
╰─────────────╶╶···◈


*❄️ \`OTHER-CMD\` ❄️* 

╭─────────────···◈
*┋* *⬡ ᴛʀᴛ*
*┋* *⬡ ᴊᴏᴋᴇ*
*┋* *⬡ ᴛᴛs*
*┋* *⬡ ꜰᴀᴄᴛ*
*┋* *⬡ ɢɪᴛʜᴜʙ*
*┋* *⬡ ɢᴘᴀꜱꜱ*
*┋* *⬡ ʜᴀᴄᴋ*
*┋* *⬡ ǫᴜᴏᴛᴇ*
*┋* *⬡ ʀᴇᴘᴏ*
*┋* *⬡ ᴛɢsᴛɪᴄᴋᴇʀ*
*┋* *⬡ sʀᴇᴘᴏ*
*┋* *⬡ ᴅᴇꜰɪɴᴇ*
*┋* *⬡ ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ*
╰─────────────╶╶···◈

*🔞 \`NSFW-CMD\` 🔞* 

╭─────────────···◈
*┋* *⬡ ᴇᴊᴀᴄᴜʟᴀᴛɪᴏɴ*
*┋* *⬡ ᴘᴇɴɪs*
*┋* *⬡ ᴇʀᴇᴄ*
*┋* *⬡ ɴᴜᴅᴇ*
*┋* *⬡ sᴇx*
*┋* *⬡ ᴄᴜᴛᴇ*
*┋* *⬡ ᴏʀɢᴀsᴍ*
*┋* *⬡ ᴀɴᴀʟ*
*┋* *⬡ sᴜsᴘᴇɴsɪᴏɴ*
*┋* *⬡ ᴋɪss*
╰─────────────╶╶···◈


*━━━━━━━━━━━━━━━━━━━━*⁠⁠⁠⁠
> ＭＡＤＥ ＢＹ ＭＲ ＦＲＡＮＫ
*━━━━━━━━━━━━━━━━━━━━━*
`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://i.postimg.cc/yNf7rQFw/prn.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363304325601080@newsletter',
                        newsletterName: '❄️『 𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐌𝐃 』❄️ ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-menu.mp3
        await conn.sendMessage(from, { //https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/blob/main/audios/subzero-menu.mp3
            audio: { url: 'https://github.com/mrfrank-ofc/SUBZERO-MD-DATABASE/raw/refs/heads/main/audios/subzero-menu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});




//  SUBZERO SC BY MR FRANK
