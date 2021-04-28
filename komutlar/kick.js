module.exports = {
 kod: "kick",
  async run (client, message, args) {
    const args1 = message.content.split(' ').slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require('discord.js')
  const user = message.mentions.users.first();
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yetkiniz bulunmamaktadır.');
    if (user) {
      const member = message.guild.member(user);
      if (member) {

        member
          .kick()
          .then(() => {
            const kanal = message.guild.channels.cache.find(ch => ch.name === 'log-channel')
            const embed = new MessageEmbed()
            .setTitle('Log Aktivitesi')
            .setDescription('Olay: `Kick`')
            .addField('Kişi:', member )
            .addField('Neden:', neden)
            kanal.send(embed)
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }

 }
};
