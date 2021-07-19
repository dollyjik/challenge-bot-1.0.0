const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const fs = require('fs');
const { join } = require('path'); // tanımlamalar
const userID = ["569969682749063193", "297106660713824257", "323546782804082688", "263372687483600896", "140155109966348289"]
client.commands= new Discord.Collection(); // komutları alıyoruz

const hedefim = require('./hedef.json');
const listnumber = require('./listno.json');

var hedef = hedefim.hedef
var listno = listnumber.listno

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

  setInterval(() => {
    var yourchannel = client.channels.cache.get('852934916282646568');
    yourchannel.send('Botu açık tutuyorum');
  }, "2700000");
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
var sıra = '- ';
client.on('message', (msg) => {


  if (!msg.content.startsWith('+')) return;


  var seçilenprompt = prompts[Math.floor(Math.random()*prompts.length)];
  const args = msg.content.slice(1).split(' ');
  const cmd = args.shift().toLowerCase();



  switch (cmd) {
    case 'add':
    const mesaj = `${msg.content} `;
    const remove = mesaj.replace("+add", "");
    if (msg.member.roles.cache.find(r => r.name === "Challengers")){
        let fileContent = fs.readFileSync("prompts.txt").toString();
      if(fileContent.length == 0){
        fs.writeFileSync("prompts.txt", sıra + remove)
      }else{
    fs.writeFileSync("prompts.txt", fileContent + `\n` + sıra + remove );
    msg.channel.send("Konu başarı ile eklendi")
  }}else {

    }

    break;

    case 'get':
    if (userID.includes(msg.author.id)){
      const data2 = fs.readFileSync("prompts.txt").toString();
      const splitData = data2.split('\n');
      const randomNumber = [Math.floor(Math.random() * splitData.length)];
      const line = splitData.splice(randomNumber, 1);
      fs.readFile("prompts.txt", 'utf8', function(err, data)
{
    if (err)
    {

    }
    var linesExceptFirst = data.split('\n').filter(function(line2){
    return line2.indexOf( line ) == -1;
  }).join('\n')
    fs.writeFileSync("prompts.txt", linesExceptFirst);
});
      msg.channel.send(line);
    }else {

      msg.reply('Bu komutu kullanmak için yetkinizin olması gerekmektedir.');

    }
    break;

    case 'delete':
    if (userID.includes(msg.author.id)){
      fs.readFile("prompts.txt", {encoding: 'utf-8'}, function(err, data) {
       if (err) throw error;

       let dataArray = data.split('\n');
       let searchKeyword = `${msg.content}`;
       let lastIndex = -1;

        for (let index=0; index < dataArray.length; index++) {
         if (dataArray[index].includes(searchKeyword)) {
             lastIndex = index;
             break;
        }
    }
    dataArray.splice(lastIndex, 1);

    const updatedData = dataArray.join('\n');
    fs.writeFile("prompts.txt", updatedData, (err) => {
        if (err) throw err;
            msg.channel.send('Son eklenen konu silinmiştir.');
    });

});

    }else {

      msg.reply('Bu komutu kullanmak için yetkinizin olması gerekmektedir.');

    }
    break;

    case 'list':

    var liste = fs.readFileSync("prompts.txt", 'utf8')
    if (liste.length = 0){
          msg.reply('Liste boş.')
  ;
  }else{

      msg.channel.send(liste.toString())
  }

    break;

    case 'reset':
        if (userID.includes(msg.author.id)){
          fs.truncate("prompts.txt", 0, function(){console.log()});
          msg.channel.send('Bütün liste sıfırlanmıştır.');

        }else {
        msg.reply('Bu komutu kullanmak için yetkinizin olması gerekmektedir.')
      }
      break;

    case 'help':
      msg.channel.send('Komutlar\n +add "konu" (Konu eklemenizi sağlar.)\n +get (Eklenen konular arasından bir tanesini rastgele bir biçimde seçer ve listeden siler.)\n +delete (Son eklenen konuyu siler.)\n +list (Eklenen konuları alfabetik sıraya göre sıralar.)\n +reset (Eklenen bütün konuları siler.)' )

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
