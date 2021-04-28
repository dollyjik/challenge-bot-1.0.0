const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar
const userID = ["569969682749063193", "297106660713824257", "323546782804082688", "263372687483600896", "140155109966348289"]
client.commands= new Discord.Collection(); // komutları alıyoruz

const hedefim = require('./hedef.json');

var hedef = hedefim.hedef

const işaret = require('./işaret.json')
const prefix = işaret.prefix

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('ready', () => {
    client.user.setActivity('+add "konunuz"')
    console.log('Botumuz Aktif')
});

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return message.channel.send(`**${command}** isimli bir komut bulunmamaktadır.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.on('guildMemberAdd', member => {
   const hoşgeldin = member.guild.channels.cache.find(channel => channel.name === 'hoşgeldin');
   hoşgeldin.send(`Hoşgeldin, ${member}`);
   //member.send(`${member} Sunucumuza Hoşgeldin.`)
}); //Hoşgeldin Mesajı

client.on('guildMemberRemove', member => {
  const hoşgeldin = member.guild.channels.cache.find(channel => channel.name === 'hoşgeldin');
  hoşgeldin.send(`${member}, sunucumuzdan ayrıldı.`);
}); //Sunucudan ayrıldı Mesajı

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nicebot') {
    msg.react("😄")
    msg.channel.send('sağ ol');
  }
}); //nice bot

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'badbot') {
    msg.react("😭")
    msg.channel.send('özür dilerim');
  }
}); //bad bot

var prompts = [];
client.on('message', (msg) => {


  if (!msg.content.startsWith('+')) return;


  var seçilenprompt = prompts[Math.floor(Math.random()*prompts.length)];
  const args = msg.content.slice(1).split(' ');
  const cmd = args.shift().toLowerCase();

  switch (cmd) {
    case 'add':
      prompts.push(args.join(' '));
      break;

    case 'get':
    if (userID.includes(msg.author.id)){
    msg.channel.send(`${seçilenprompt}`);

    }else {

      msg.reply('Bu komutu kullanmak için yetkinizin olması gerekmektedir.');

    }
    break;

    case 'delete':
    if (userID.includes(msg.author.id)){
      prompts.pop();
      msg.channel.send('Son eklenen konu silinmiştir.');
    }else {

      msg.reply('Bu komutu kullanmak için yetkinizin olması gerekmektedir.');

    }
    break;

    case 'list':
    if (prompts.length == '0'){
      msg.channel.send('Liste boş.');
    }else{
    msg.channel.send(prompts);
  }
    break;

    case 'reset':
        if (userID.includes(msg.author.id)){
          prompts.length = '0';
          msg.channel.send('Bütün liste sıfırlanmıştır.');

        }else {
        msg.reply('Bu komutu kullanmak için yetkinizin olması gerekmektedir.')
      }
      break;

      case 'help':
      msg.channel.send('Komutlar\n +add "konu" (Konu eklemenizi sağlar.)\n +get (Eklenen konular arasından bir tanesini rastgele bir biçimde seçer)\n +delete (Son eklenen konuyu siler.)\n +list (Eklenen konuları alfabetik sıraya göre sıralar.)\n +reset (Eklenen bütün konuları siler.)' )
  };

});//prompt selector

client.on('guildCreate', async guild => {
  const embed1 = new Discord.MessageEmbed()
  .setTitle('Challenge Botu Sunucunuza Eklenmiştir.')
  .setDescription('Sunucu Adı: `' + guild.name + '`')
  const embed2 = new Discord.MessageEmbed()
  .setTitle('Yeni Sunucu')
  .setDescription('Sunucu Adı: ' + guild.name)
  .addField('Kişi Sayısı:', guild.memberCount)
  .addField('Sunucu Sahibi:', guild.owner)
  .setThumbnail(guild.iconURL())
  guild.owner.send(embed1)
  const channel = client.channels.cache.find(ch => ch.id === '836348692306460673')
  channel.send(embed2)
});//sunucuya eklendiğinde yollanan mesajlar

client.on('guildDelete', async guild => {
  const embed1 = new Discord.MessageEmbed()
  .setTitle('Challenge Botu Sunucunuzdan Çıkarılmıştır.')
  .setDescription('Sunucu Adı: `' + guild.name + '`')
  const embed2 = new Discord.MessageEmbed()
  .setTitle('Çıkarılan Sunucu')
  .setDescription('Sunucu Adı: ' + guild.name)
  .addField('Kişi Sayısı:', guild.memberCount)
  .addField('Sunucu Sahibi:', guild.owner)
  .setThumbnail(guild.iconURL())
  guild.owner.send(embed1)
  const channel = client.channels.cache.find(ch => ch.id === '836348692306460673')
  channel.send(embed2)
});//sunucudan çıkarıldığında yollanan mesajlar

client.login('ODM1NTc4OTA3MDQ5NTkwNzg1.YIRffw.YA0hSANQ6Zakmw3WHufUtvyFwLw')
