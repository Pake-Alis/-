const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      ๐โ GROUP LIST โ๐\n\n๐ GROUP 01 ๐\n\n ๐ฑ ' + Config.GROUPN1 + ' ๐ฑ\nโข ' + Config.GROUPL1 + '\n\n๐ GROUP 02 ๐\n\n๐ฑ ' + Config.GROUPN2 + '๐ฑ\nโข ' + Config.GROUPL2 + '\n\n๐ GROUP 03 ๐\n\n๐ฑ ' + Config.GROUPN3 + ' ๐ฑ\nโข ' + Config.GROUPL3 + '\n\n๐ GROUP 04 ๐\n\n๐ฑ ' + Config.GROUPN4 + ' ๐ฑ\nโข ' + Config.GROUPL4 + '\n\n\n       โโโโโสแดษดแดแดสโโโโโ   '})

    }));
  
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      ๐โ GROUP LIST โ๐\n\n๐ GROUP 01 ๐\n\n ๐ฑ ' + Config.GROUPN1 + ' ๐ฑ\nโข ' + Config.GROUPL1 + '\n\n๐ GROUP 02 ๐\n\n๐ฑ ' + Config.GROUPN2 + '๐ฑ\nโข ' + Config.GROUPL2 + '\n\n๐ GROUP 03 ๐\n\n๐ฑ ' + Config.GROUPN3 + ' ๐ฑ\nโข ' + Config.GROUPL3 + '\n\n๐ GROUP 04 ๐\n\n๐ฑ ' + Config.GROUPN4 + ' ๐ฑ\nโข ' + Config.GROUPL4 + '\n\n\n       โโโโโสแดษดแดแดสโโโโโ  '})

    }));
  
  Trex.addrex({pattern: 'grp', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      ๐โ GROUP LIST โ๐\n\n๐ GROUP 01 ๐\n\n ๐ฑ ' + Config.GROUPN1 + ' ๐ฑ\nโข ' + Config.GROUPL1 + '\n\n๐ GROUP 02 ๐\n\n๐ฑ ' + Config.GROUPN2 + '๐ฑ\nโข ' + Config.GROUPL2 + '\n\n๐ GROUP 03 ๐\n\n๐ฑ ' + Config.GROUPN3 + ' ๐ฑ\nโข ' + Config.GROUPL3 + '\n\n๐ GROUP 04 ๐\n\n๐ฑ ' + Config.GROUPN4 + ' ๐ฑ\nโข ' + Config.GROUPL4 + '\n\n\n       โโโโโสแดษดแดแดสโโโโโ   ' ,quoted: message.data})

    }));
 
}
