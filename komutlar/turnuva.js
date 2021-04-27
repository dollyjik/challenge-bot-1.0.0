module.exports = {
 kod: "turnuva",
  async run (client, message, args) {
  const Discord = require('discord.js');
  const embed = new Discord.MessageEmbed()

  if (message.content.toLowerCase() === '!turnuva') {
    var Küme1 = [
       'Ömer',
       'Hızır'
     ];
     var Küme2 = [
      'Enes',
      'Arda'
  ];
      var kümekazanan1 = Math.floor(Math.random()*Küme1.length);
      var kümekazanan2 = Math.floor(Math.random()*Küme2.length);
      var Şampiyon = [
        `${Küme1[kümekazanan1]}`,
        `${Küme2[kümekazanan2]}`
      ];

      var şampiyon = Math.floor(Math.random()*Şampiyon.length);

      const embed = new Discord.MessageEmbed()
        .setTitle('cevaplar')
        .addField('1. Kazanan',`${Küme1[kümekazanan1]}`)
        .addField('2. Kazanan',`${Küme2[kümekazanan2]}`)
        .addField('Şampiyon', `${Şampiyon[şampiyon]}`);
        message.channel.send(embed);
   }

 }
};
