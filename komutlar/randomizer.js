module.exports = {
 kod: "random",
  async run (client, message, args) {
  const Discord = require('discord.js');
  if (message.content.toLowerCase() === '!random') {
    var Cevap1 = [
       '0',
       '1',
       '2',
       '3',
       '4',
       '5',
       '6',
       '7',
       '8',
       '9',
       '10'
     ];
      var Cevap1doğru = Math.floor(Math.random()*Cevap1.length);
      const embed = new Discord.MessageEmbed()
        .setColor("PINK")
        .setTitle('Random Number')
        .addField('Çıkan Sayı: ',`${Cevap1[Cevap1doğru]}`)
        message.channel.send(embed);
   }
 }
};
