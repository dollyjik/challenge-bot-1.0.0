module.exports = {
 kod: "ping",
  async run (client, message, args) {
  const { MessageEmbed } = require('discord.js')
  const embed = new MessageEmbed()
  .setTitle('PING ÖLÇÜLÜYOR')
  .addField('Bot Pingi', client.ws.ping + ' ms')
  .addField('Mesaj Gecikmesi:', `${Date.now() - message.createdTimestamp} ms`)
  message.channel.send(embed)
 }
};
