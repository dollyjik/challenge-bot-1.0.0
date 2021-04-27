module.exports = {
 kod: "duyuru",
  async run (client, message, args) {
  const Discord = require('discord.js');
  if (message.content.startsWith('!duyuru')) {
    const kanal = message.mentions.channels.first();
    const args = message.content.split(' ').slice(2)
    const botmesajı = args.join(" ")
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Duyuru yapmak için **yönetici** olmanız gerekmektedir.');
    if (!botmesajı) return message.reply('Neyi duyuracağınızı yazmadınız.');
    if (!kanal) return message.reply('Duyurunun yapılacağı kanalı belirtmediniz.');
    message.delete(message.author)
    kanal.send(botmesajı);
  }
 }
};
