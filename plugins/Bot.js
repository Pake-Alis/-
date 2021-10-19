const Trex = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const {spawnSync} = require('child_process');

const Config = require('../config');

const chalk = require('chalk');

const axios = require('axios');

const Language = require('../language');

const Lang = Language.getString('system_stats');

if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

            

            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})

       

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

⋱ ⋮ ⋰

⋯ ◯ ⋯ ︵ 　　　　　　^v^

 ︵︵( ░░ )︵.︵.︵

(°░░░░░░ °) ░░░° )

°°︶°¯°︶°°︶°︶°°　^v^　　^v^

╔┓┏╦━━╦┓╔┓╔━━╗╔╗

║┗┛║┗━╣┃║┃║╯╰║║║

║┏┓║┏━╣┗╣┗╣╰╯║╠╣

╚┛┗╩━━╩━╩━╩━━╝╚╝

♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪

🍁 *Developer - ○○☓○○ʜᴜɴᴛᴏʀ○○☓○○*

🍁 *Language - NODE JS*

🍁 *Sponser Team○○☓○○ʜᴜɴᴛᴏʀ○○☓○○*

‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭

╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯

┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║

╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝

╭┻╮╱╰╮╰━━╯╭╯╲┊   ║

╰┳┫▔╲╰┳━━┳╯╱▔┊   ║

┈┃╰━━╲▕╲╱▏╱━━━┬╨╮

┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯

       💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🍒 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○* 🍒

➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🍒 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○* 

➻ *ʙᴏᴛ ʙᴀꜱᴇ ᴏᴡɴᴇʀ* 

🍒 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○* 🍒

➻ *ʙᴏᴛ ᴛᴇꜱᴛ ʜᴇʟᴘᴇᴇʀ*

🍒 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○*

➻ *ʙᴏᴛ ᴛʀᴀɪʟᴇʀ ɪɴᴛʀᴏ ᴍᴀᴋᴇʀ*

 .       

         🍒 *𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴* 🍒

         🍒 *𝙻𝙸𝙺𝙴 𝚄𝚂* 🍒

         🍒 *𝙲𝙾𝙼𝙼𝙴𝙽𝚃 𝚄𝚂* 🍒

            

 (¯v¯)　　

  . . 

☻/

/▌

/ |

╬═♥╬

╬♥═╬

╬♥═╬

╬═♥╬

╬═♥╬

╬♥═╬

╬♥═╬

╬♥═╬

╬♥═╬

           

 

 🍁 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○* 🍁

  

  

 

   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰`})

    }));

}

else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          

            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

⋱ ⋮ ⋰

⋯ ◯ ⋯ ︵ 　　　　　　^v^

¸︵︵( ░░ )︵.︵.︵

(°░░░░░░ °) ░░░° )

°°︶°¯°︶°°︶°︶°°　^v^　　^v^

╔┓┏╦━━╦┓╔┓╔━━╗╔╗

║┗┛║┗━╣┃║┃║╯╰║║║

║┏┓║┏━╣┗╣┗╣╰╯║╠╣

╚┛┗╩━━╩━╩━╩━━╝╚╝

♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪

🍁 *Developer -○○☓○○ʜᴜɴᴛᴏʀ○○☓○○*

🍁 *Language - NODE JS*

🍁 *Sponser Team -○○☓○○ʜᴜɴᴛᴏʀ○○☓○○*

‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭

╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯

┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║

╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝

╭┻╮╱╰╮╰━━╯╭╯╲┊   ║

╰┳┫▔╲╰┳━━┳╯╱▔┊   ║

┈┃╰━━╲▕╲╱▏╱━━━┬╨╮

┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯

       💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🍒 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○* 🍒

➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🍒 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○* 

➻ *ʙᴏᴛ ʙᴀꜱᴇ ᴏᴡɴᴇʀ* 

🍒*○○☓○○ʜᴜɴᴛᴏʀ○○☓○○* 🍒

➻ *ʙᴏᴛ ᴛᴇꜱᴛ ʜᴇʟᴘᴇᴇʀ*

🍒 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○*

➻ *ʙᴏᴛ ᴛʀᴀɪʟᴇʀ ɪɴᴛʀᴏ ᴍᴀᴋᴇʀ*

 .       

         🍒 *𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴* 🍒

         🍒 *𝙻𝙸𝙺𝙴 𝚄𝚂* 🍒

         🍒 *𝙲𝙾𝙼𝙼𝙴𝙽𝚃 𝚄𝚂* 🍒           

         

 (¯v¯)　　

  . . 

☻/

/▌

/ |

╬═♥╬

╬♥═╬

╬♥═╬

╬═♥╬

╬═♥╬

╬♥═╬

╬♥═╬

╬♥═╬

╬♥═╬

           

 

 🍁 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○* 🍁

 

 

 

      

     

   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰` })

    }));

  

  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          

            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🔥 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🔥╹ 

⋱ ⋮ ⋰

⋯ ◯ ⋯ ︵ 　　　　　　^v^

¸︵︵( ░░ )︵.︵.︵

(°░░░░░░ °) ░░░° )

°°︶°¯°︶°°︶°︶°°　^v^　　^v^

╔┓┏╦━━╦┓╔┓╔━━╗╔╗

║┗┛║┗━╣┃║┃║╯╰║║║

║┏┓║┏━╣┗╣┗╣╰╯║╠╣

╚┛┗╩━━╩━╩━╩━━╝╚╝

♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪

🍁 *Developer - Hirusha Rushan ( Hiruwa )*

🍁 *Language - NODE JS*

🍁 *Sponser Team - PEARL Team*

‎╮╰╮╮▕╲╰╮╭╯╱▏╭╭╭╭

╰╰╮╰╭╱▔▔▔▔╲╮╯╭╯

┏━┓┏┫╭▅╲╱▅╮┣┓╭║║║

╰┳╯╰┫┗━╭╮━┛┣╯╯╚╬╝

╭┻╮╱╰╮╰━━╯╭╯╲┊   ║

╰┳┫▔╲╰┳━━┳╯╱▔┊   ║

┈┃╰━━╲▕╲╱▏╱━━━┬╨╮

┈╰━━╮┊▕╱╲▏┊╭━━┴╥╯

       💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🍒 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○* 

➻ *ʙᴏᴛ ʙᴀꜱᴇ ᴏᴡɴᴇʀ* 

🍒 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○* 🍒

➻ *ʙᴏᴛ ᴛᴇꜱᴛ ʜᴇʟᴘᴇᴇʀ*

🍒 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○*

➻ *ʙᴏᴛ ᴛʀᴀɪʟᴇʀ ɪɴᴛʀᴏ ᴍᴀᴋᴇʀ*

 .       

          🍒 *𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴* 🍒

          🍒 *𝙻𝙸𝙺𝙴 𝚄𝚂* 🍒

          🍒 *𝙲𝙾𝙼𝙼𝙴𝙽𝚃 𝚄𝚂* 🍒

            

 (¯v¯)　　

  . . 

☻/

/▌

/ |

╬═♥╬

╬♥═╬

╬♥═╬

╬═♥╬

╬═♥╬

╬♥═╬

╬♥═╬

╬♥═╬

╬♥═╬

           

 

 🍁 *○○☓○○ʜᴜɴᴛᴏʀ○○☓○○* 🍁

 

 

    👊 *ᴅᴇᴘʟᴏʏ ɴᴏᴡ | ǫʀ ɴᴏᴡ* 👊

   🔰 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🔰 `  ,quoted: message.data})

    }));

}
