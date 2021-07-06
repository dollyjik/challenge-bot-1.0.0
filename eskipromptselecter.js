var prompts = [];
var sıra = '- ';
client.on('message', (msg) => {


  if (!msg.content.startsWith('+')) return;


  var seçilenprompt = prompts[Math.floor(Math.random()*prompts.length)];
  const args = msg.content.slice(1).split(' ');
  const cmd = args.shift().toLowerCase();



  switch (cmd) {
    case 'add':

    prompts.push(sıra + args.join(" "));
    msg.channel.send('Konu başarıyla eklendi.')

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






var linesExceptFirst = data.split('\n').slice(1).join('\n').replace(randomNumber, "");
