module.exports = {
 kod: "oylama",
  async run (client, message, args) {
  const Discord = require('discord.js');
  if (message.content.startsWith('!oylama')){
    const args = message.content.split(' ').slice(1)
    const botmesajı = args.join(" ")
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Oylama yapmak için **yönetici** olmanız gerekmektedir.');
    if (!botmesajı) return message.reply('Oylamanın ne olacağını yazmadınız.');
    message.delete(message.author)
    const embed = new Discord.MessageEmbed()
    .setTitle('OYLAMA')
    .setDescription(botmesajı)
    .setFooter('Challenge Botu');
    message.channel.send({ embed: embed }).then( embedMessage => {
      embedMessage.react("👍")
      embedMessage.react("👎");
    })
  }
 }
};
