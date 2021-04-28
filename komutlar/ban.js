module.exports = {
 kod: "ban",
  async run (client, message, args) {
    const args2 = message.content.split(' ').slice(2)
    const neden = args2.join(" ")
    const { MessageEmbed } = require('discord.js')
  const user = message.mentions.users.first();
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Birisini banlamak için **yönetici** olmanız gerekmektedir.');
    if (user) {
      const member = message.guild.member(user);
      if (member) {

        member
          .ban()
          .then(() => {
            const kanal = message.guild.channels.cache.find(ch => ch.name === 'log-channel')
            const embed = new MessageEmbed()
            .setTitle('Log Aktivitesi')
            .setDescription('Olay: `Ban`')
            .addField('Kişi:', member )
            .addField('Neden:', neden)
            kanal.send(embed)
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }

 }
};
