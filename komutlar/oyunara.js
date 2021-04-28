module.exports = {
  kod: "oyunara",
  async run (client, message, args) {
    const game = args[0]
    if (!game) return message.reply('Bir oyun belirtmelisin.')
    const nott = message.content.split(' ').slice(2)
    const not = nott.join(" ")
    if (!not) return message.reply('Bir not belirtmelisin.')
    if (message.member.voice.channel) {
      const Discord = require('discord.js')
      const embed = new Discord.MessageEmbed()
      .setTitle(`Oyun arıyor: **${message.author.tag}**`)
      .setColor("RANDOM")
      .addField("Oyun:", `${game}`)
      .addField('Sesli Kanal:', `${message.member.voice.channel}`)
      .addField("Not:", `${not}`);
      message.channel.send(embed)
    } else {
      message.reply('Önce sesli kanala katılman gerekiyor.')
    }
  }
}
