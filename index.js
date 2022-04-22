const tmi = require('tmi.js');
const fetch = require('node-fetch')
require('dotenv').config({path: __dirname + '/.env'})

const client = new tmi.Client({
	options: { debug: true },
	identity: {
			username: 'MaesOneBOT',
		password: 'oauth:vxh719e03arfqgl7aqil89dg2w9lhj'
	},
	channels: [ 'Rogu' ]
});

client.connect();
{
var active = true;

client.on('message', (channel, tags, message, self) => {
	if(message.toLowerCase() === '!rank') {
	

	rankFetch(channel,tags)
}
});
const rankFetch = async (channel,tags) => {

 
	const accountUrl = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/rogu%20chan?api_key=RGAPI-5f4ad909-6fb6-4adc-bce2-fb79df1ee335`
	let result = await fetch(accountUrl)
	const id = JSON.parse(await result.text()).id
	const rankUrl = await `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/bWmanG6qX1aYhm0O37J6ajXRKgsoutgnnkexqQah4XwGxH0?api_key=RGAPI-5f4ad909-6fb6-4adc-bce2-fb79df1ee335`
	result = await fetch(rankUrl)	
	data = JSON.parse(await result.text())
	if (active) {
	const arr = data;
	const obj = arr.find((o) => o.queueType === "RANKED_SOLO_5x5");
	const {summonerName, tier, rank, leaguePoints } = obj;		
	client.say(channel,`LoL:" ${summonerName} şu anda ${tier} ${rank} ve ${leaguePoints} LP'si var. @${tags.username} " `)
active = false;
setTimeout(() => {
	active = true;
}, 15000);
} else {
console.log(` cooldown` );
}
}
}

{	
	var active2 = true;
	
	client.on('message', (channel, tags, message, self) => {
		if (message.toLowerCase() === '!rank') {
		
	
		valorankFetch(channel,tags)
	}
	});
	const valorankFetch = async (channel,tags) => {

 
		const accountUrl = `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/fba1aaea-1e89-51c9-8ff5-04b43fd781df`
	let result = await fetch(accountUrl)
	const id = JSON.parse(await result.text()).id
	const rankUrl = await `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/fba1aaea-1e89-51c9-8ff5-04b43fd781df`
	result = await fetch(rankUrl)	
	valdata = JSON.parse(await result.text())
	if (active2) {
		function intervalFunc(data) {
	
			const {currenttierpatched,ranking_in_tier,name} = valdata.data;
			client.say(channel,`Valo: " ${name} şu an ${currenttierpatched} ${ranking_in_tier} puanda. @${tags.username} " `)
		}
		setTimeout(intervalFunc, 4000);
			active2 = false;
			setTimeout(() => {
				active2 = true;
			}, 15000);
		} else {
			console.log(` cooldown` );
		}
		
	
	}}


{	
var active1 = true;

client.on('message', (channel, tags, message, self) => {
	if(message.toLowerCase() === '!valosonmaç') {
	

	lastFetch(channel,tags)
}
});
	const lastFetch = async (channel,tags) => {
	 
	  const macUrl = await `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/fba1aaea-1e89-51c9-8ff5-04b43fd781df`
result = await fetch(macUrl)	
valdata = JSON.parse(await result.text())
if (active1) {
const {mmr_change_to_last_game,ranking_in_tier} = valdata.data;
	{
      if(mmr_change_to_last_game<0)
		client.say(channel,`Valorant son maç: "Lose" ve giden puan "${mmr_change_to_last_game}"; Güncel puan: "${ranking_in_tier}" .`)
		else 
		client.say(channel,`Valorant son maç "Win" ve gelen puan "${mmr_change_to_last_game}"; Güncel puan: "${ranking_in_tier}" .`)
	}
		active1 = false;
		setTimeout(() => {
			active1 = true;
		}, 10000);
	} else {
		console.log(` cooldown` );
	}
	

}
}





{
	var active3 = true;
	client.on('message', (channel, tags, message, self) =>{
	if(message.toLowerCase() === '!iq') {
		numberFetch(channel,tags)
	}});
	
	const numberFetch = async (channel,tags) => {
		if (active3) {
    const max = 200
    const min= 0
    const result = Math.random()*(max - min) + min
	console.log(Math.floor(result))
		client.say(channel,`Senin iq'n: ${Math.floor(result)} gibi @${tags.username} LUL`)
		active3 = false;
		setTimeout(() => {
			active3 = true;
		}, 10000);
		} else {
		console.log(` cooldown` );
		}
		}
		}
