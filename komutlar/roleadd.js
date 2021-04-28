module.exports = {
 kod: "rolver",
  async run (client, message, args) {
  const Discord = require('discord.js');
  if (message.content.startsWith('!rolver')) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanmaya yetkin yok.`)
    let role = message.mentions.roles.first();
    let member = message.mentions.members.first();
    member.roles.add(role)
  }
 }
};
