module.exports = {
 kod: "kiss",
  async run (client, message, args) {
  const Discord = require('discord.js');
  if (message.content.toLowerCase() === '!kiss') {
    var Kiss1 = [
      'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
      'https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif'
    ];
    var sendöpücük1 = Math.floor(Math.random()*Kiss1.length);
    const embed = new Discord.MessageEmbed()
    .setTitle('Öpücük')
    .addField('Kiss', `${Kiss1[sendöpücük1]}`)
    .setImage(`${Kiss1[sendöpücük1]}`)
    message.channel.send(embed);
  }
 }
};
