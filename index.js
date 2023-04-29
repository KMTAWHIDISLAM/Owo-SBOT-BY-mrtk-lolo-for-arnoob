const { Client } = require('discord.js-selfbot-v13');
const settings = require('./settings.json');
const client = new Client({checkUpdate: false});


client.on('ready', () =>{
	console.log('bot is on')
})
const fs = require('fs')
let amount = 2500;

const code = ["h","t","h","h","t","t","h","h","h","h","t","t","t","h","t","t","t","h","t","h","h","t","t","t","h","t","t"]
let i = 0;
let isRunning = false;
let intervalId = null;
if (amount > 2500){
	amount = 2500;
}
client.on('messageCreate', (message) =>{
	if(message.content === 'start'){
		message.reply('Kisu Koilam Na Thak');
		isRunning = true;
		intervalId = setInterval(() => {
      

			// Check the last message for a win or loss after 4 seconds
			setTimeout(() => {
			  message.channel.messages.fetch({ limit: 1 }).then(messages => {
	  
				const lastmessage = messages.first();
				if (lastmessage.content.includes('and you won')) {
				  amount = 2500;
				  
				} else if (lastmessage.content.includes('and you lost it all...')) {
				  if (amount === 2500){
					amount = 750;
				  }else{
					amount *= 3;
				}
				  
				}
			  }).catch(console.error);
			}, 5000);
			turn = code[i]
			i++
			if(i > code.length){
				i = 0;
			}
			
		  message.channel.send(`ocf ${amount} ${turn}`);
	  }, 16500);
	  
	}
	else if (message.content.includes('captcha') || message.content.includes('verify that you are human!')) {
		if (isRunning) {
		  isRunning = false;
		  clearInterval(intervalId);
		}
	  }
})

client.login(process.env.token)
