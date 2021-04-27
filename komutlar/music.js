module.exports = {
 kod: "play",
  async run (client, message, args) {
  const Discord = require('discord.js');
  if (message.content.startsWith('!play')) {
    const args = message.content.split(' ').slice(1)
    const botmesajı = args.join(" ")
    if (!botmesajı) return message.reply('Bir link atmadınız.')
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const ytdl = require('ytdl-core');
      connection.play(ytdl(`${botmesajı}`, { filter: 'audioonly'}))
    } else {
      message.reply('Bir sesli kanala katılın.');
    }
  }
 }
};
