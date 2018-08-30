const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  console.log('---------------');

  console.log(' Mob2 Bot Is Online')

  console.log('---------------')

  client.user.setStatus("Online")

    client.user.setActivity(".help |.invite",{type: 'WATCHING'})

	});

	

            var prefix = "." ;
            
            
            
            
            
            
            
            
            
           const adminprefix = ".";//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

const devs = ['470500980342128650'];//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

client.on('message', message => {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

    

if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ء , ??#4777 'CODES SERVER'

  client.user.setGame(argresult);

    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)

} else 

  if (message.content.startsWith(adminprefix + 'setname')) {

client.user.setUsername(argresult).then

    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)

return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");

} else

  if (message.content.startsWith(adminprefix + 'setavatar')) {

client.user.setAvatar(argresult);

  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);

      } else     

if (message.content.startsWith(adminprefix + 'setT')) {

  client.user.setGame(argresult, "https://www.twitch.tv/idk");

    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)

}

});



client.on('message', message => {

   if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'bc')) {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

let BcList = new Discord.RichEmbed()

.setThumbnail(message.author.avatarURL)

.setAuthor(`محتوى الرساله ${args}`)

.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)

if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {

msg.react('📝')

.then(() => msg.react('✏'))

.then(() =>msg.react('📝'))

 

let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;

let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

 

let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });

let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });

 

 

EmbedBc.on("collect", r => {

 

message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)

var bc = new

Discord.RichEmbed()

.setColor('RANDOM')

.setDescription(EmbedRep)

.setThumbnail(message.author.avatarURL)

m.send({ embed: bc })

msg.delete();

})

})

NormalBc.on("collect", r => {

  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)

m.send(NormalRep);

msg.delete();

})

})

})

}

});


client.on('message', function(message) {

    if (message.channel.type === "dm") {

        if (message.author.id === client.user.id) return;

        var norElden = new Discord.RichEmbed()

            .setColor('RANDOM')

            .setTimestamp()

            .setTitle('New Message On My DM !')

            .setThumbnail(`${message.author.avatarURL}`)

            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)

            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)

        client.channels.get("484662633660940288").send({ embed: norElden });

    }

});

client.on('guildCreate', guild => {//DarkLast Alpha Codes

  client.channels.get("484662601339502592").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك

Server name: __${guild.name}__

Server owner: __${guild.owner}__

Server id: __${guild.id}__ 

Server Count: __${guild.memberCount}__**`)//DarkLast Alpha Codes

});

client.on('guildDelete', guild => {//DarkLast Alpha Codes

  client.channels.get("484662601339502592").send(`:negative_squared_cross_mark: **طردوني حرام والله ايش سويت انا

Server name: __${guild.name}__

Server owner: __${guild.owner}__

Server id: __${guild.id}__ 

Server Count: __${guild.memberCount}__**`)//DarkLast Alpha Codes

});

client.on('guildCreate', guild => {//DarkLast Alpha Codes

  client.channels.get("484661620476346378").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك

Server name: __${guild.name}__

Server owner: __${guild.owner}__

Server id: __${guild.id}__ 

Server Count: __${guild.memberCount}__**`)//DarkLast Alpha Codes

});
















   client.on('message', message => {

       if(message.content.startsWith(`${prefix}invite`)){

           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")

           var embed = new Discord.RichEmbed()

           .setTitle("Invite Broadcast Bot")

           .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&permissions=8&scope=bot")

           .setTimestamp()

           .setColor("RANDOM")

           message.channel.send({embed})

       }

   });
   
   
    client.on('message', message => {

       if(message.content.startsWith(`${prefix}support`)){

           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")

           var embed = new Discord.RichEmbed()

           .setTitle("Support Server")

           .setURL("https://discord.gg/v84KKjD")

           .setTimestamp()

           .setColor("RANDOM")

           message.channel.send({embed})

       }

   });


client.on('message', message => {

            if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

if (message.content.startsWith('.bcall')){

 if (message.author.id !== '470500980342128650') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')

message.channel.sendMessage('جار ارسال الرسالة |✅')

client.users.forEach(m =>{

m.sendMessage(args)

})

}

});


         client.on('message', message => {

            if (message.content.startsWith(prefix + "bot")) {

     let embed = new Discord.RichEmbed()

.setThumbnail(message.author.avatarURL)

.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)

.addField(' الاعضاء👥 ',` [${client.users.size}] `)

.addField('الرومات📚 ',`[${client.channels.size}]`) 

.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 



.setColor('#7d2dbe')

  message.channel.sendEmbed(embed);

    }

});



client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {

                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;

  let args = message.content.split(" ").slice(1);

  var argresult = args.join(' '); 

  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {

 m.send(`${argresult}\n ${m}`);

})

 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 

 message.delete(); 

};     

});

 

 client.on('message' , message => {

  

  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "bc-role")) {

        if (!message.member.hasPermission('ADMINSTRATOR')) return message.reply(`**You Don't Have**  *ADMINSTRATOR*  **Permission **`).catch(console.error);

    let args = message.content.split(" ").slice(1);

    if(!args[0]) {

      message.channel.send("قم بمنشنه رتبه معينه");

        return;

    }

      if(args[0] == "@everyone") {

        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);

        message.guild.members.forEach(mi => {

          mi.send(

          "الرسالة :" + "\n" +

         "**" + `${args[1]}` + "**"

          );

        });
return;

      }

          var role = message.mentions.roles.first();

            if(!role) {

              message.reply("يرجا كتابه اسم رتبه موجوده");

                return;

            }

        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {

        sa.send(

          "الرساله :" + "\n" +

        "**" + `${args[1]}` + "**"

          );

        });

      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);

    }

});
   
client.on("message", message => {

                            const Premium = ['484660959730728961']//ايديات السيرفرات اللي عندها بريميوم

                            if (message.content === "role-bc) {

                                if( Premium.some(word => message.guild.id.includes(word)) ) {

        message.channel.send('ماني فاضي لك -_-')

                                } else {

   message.channel.send('**Premium Only! 🙃**').then(message => {message.delete(1000)});

}

                          }

                      });

client.on("message", (message) => {

if (message.content === ".help") {

    const embed = new Discord.RichEmbed()

      .setColor("RANDOM")

      .addField(`${prefix}bc`, `لارسال راسألة جماعية لجميع اعضاء السيرفر`)

      .addField(`${prefix}obc`, `لارسال رسالة جماعية للاون لاين فقط`)

      .addField(`${prefix}invite`, `لدعوة البوت الي سيرفرك`)

      .addField(`${prefix}bot`, `لروياة معلومات البوت`)

      .addField(`${prefix}support`, `لسيرفر الدعم الفني حق البوت`)

    

  message.author.send({embed});

}

});




         




client.login(process.env.BOT_TOKEN); 
