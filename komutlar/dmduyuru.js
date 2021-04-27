module.exports = {
 kod: "dmduyuru",
  async run (client, message, args) {
  const Discord = require('discord.js');
  if (message.content.startsWith('!dmduyuru')) {
    const kişi = message.mentions.users.first();
    const args = message.content.split(' ').slice(2)
    const botmesajı = args.join(" ")
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Duyuru yapmak için **yönetici** olmanız gerekmektedir.');
    if (!botmesajı) return message.reply('Neyi duyuracağınızı yazmadınız.');
    if (!kişi) return message.reply('Duyurunun yapılacağı kişiyi seçmediniz.');
    message.delete(message.author)
    kişi.send(botmesajı);
  }
 }
};
