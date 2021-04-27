module.exports = {
 kod: "links",
  async run (client, message, args) {
  const { MessageEmbed } = require('discord.js')
  const embed = new MessageEmbed()
    .setTitle('Sosyal Medya')
    .addField('Bağlantılar', '[Youtube](https://www.youtube.com/channel/UCCMJUZKDTcKG0Mo7mFib9sw)\n[Twitch](https://www.twitch.tv/deyege)\n[Twitter](https://www.twitter.com/heydeyege)')
  message.channel.send(embed)
 }
};
