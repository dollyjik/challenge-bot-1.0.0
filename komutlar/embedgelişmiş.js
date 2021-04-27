module.exports = {
  kod: "gembed",
  async run (client, message, args) {
    const Discord = require('discord.js');
    const exampleEmbed = {
  	color: 0xe24efc,
  	title: 'Başlık',
  	url: 'https://youtube.com',
  	author: {
  		name: 'Dollyjik',
  		icon_url: 'https://images-ext-1.discordapp.net/external/QMRMKBFHSem8FQBucQ-ztNzw33OEvXxGg1zh2rSE5iQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/569969682749063193/8a7b8ed5f116fd9ed7b0b1cd39cb8ae5.png',
  		url: 'https://youtube.com',
  	},
  	description: 'Açıklama',
  	thumbnail: {
  		url: 'https://images-ext-1.discordapp.net/external/QMRMKBFHSem8FQBucQ-ztNzw33OEvXxGg1zh2rSE5iQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/569969682749063193/8a7b8ed5f116fd9ed7b0b1cd39cb8ae5.png',
  	},
  	fields: [
  		{
  			name: 'Dollyjik',
  			value: 'koyun',
  		},
  		{
  			name: '\u200b',
  			value: '\u200b',
  			inline: false,
  		},
  		{
  			name: 'Buwuse',
  			value: 'cupcake',
  			inline: true,
  		},
  		{
  			name: 'Börb',
        value: 'kuş',
  			inline: true,
  		},
  		{
  			name: 'törıt',
  			value: 'robot',
  			inline: true,
  		},
  	],
  	image: {
  		url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/deyege-profile_image-87394b59628554d0-300x300.png',
  	},
  	timestamp: new Date(),
  	footer: {
  		text: '*Dolly*',
  		icon_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/deyege-profile_image-87394b59628554d0-300x300.png',
  	},
  };

  message.channel.send({ embed: exampleEmbed });
}
};
