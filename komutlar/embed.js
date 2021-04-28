module.exports = {
  kod: "embed",
  async run (client, message, args) {
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed()
    .setTitle('Challengers')
    .setDescription('Bu bir açıklamadır.')
    .setAuthor('Challenge Bot')
    .addField('Mesaj', 'İkinci Mesaj')//sadece title'a
    .addField('Sosyal Medya', '[Youtube](https://www.youtube.com/channel/UCCMJUZKDTcKG0Mo7mFib9sw)\n[Twitch](https://www.twitch.tv/deyege)\n[Twitter](https://www.twitter.com/heydeyege)')
    .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/deyege-profile_image-87394b59628554d0-300x300.png')
    .setColor("PINK")
    .setImage("https://static-cdn.jtvnw.net/jtv_user_pictures/deyege-profile_image-87394b59628554d0-300x300.png")
    .setFooter("Challenge Botu");
    message.channel.send(embed)
  }
}
