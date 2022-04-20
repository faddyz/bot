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
client.on('message', (channel, tags, message, self) => {
if(self) return;
if(message.toLowerCase() === '!test') {
 client.say(channel, `Test!`);
}
if (message.toLowerCase() === '!rank') {
 rankFetch(channel)


 valorankFetch(channel)
}
});


const valorankFetch = async (channel) => {

 
const accountUrl = `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/fba1aaea-1e89-51c9-8ff5-04b43fd781df`
let result = await fetch(accountUrl)
const id = JSON.parse(await result.text()).id
const rankUrl = await `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/fba1aaea-1e89-51c9-8ff5-04b43fd781df`
result = await fetch(rankUrl)	
valdata = JSON.parse(await result.text())
const {currenttierpatched,ranking_in_tier,name} = valdata.data;

client.say(channel,`Valo: " ${name} şu an ${currenttierpatched} ${ranking_in_tier} puanda. " `)
}

const rankFetch = async (channel) => {

 
	const accountUrl = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/rogu%20chan?api_key=RGAPI-2dcec505-6e9e-40bf-bfe8-3de76fc38231`
	let result = await fetch(accountUrl)
	const id = JSON.parse(await result.text()).id
	const rankUrl = await `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/bWmanG6qX1aYhm0O37J6ajXRKgsoutgnnkexqQah4XwGxH0?api_key=RGAPI-2dcec505-6e9e-40bf-bfe8-3de76fc38231`
	result = await fetch(rankUrl)	
	data = JSON.parse(await result.text())
	const arr = data;
	function intervalFunc(data) {

		const obj = arr.find((o) => o.queueType === "RANKED_SOLO_5x5");
		const {summonerName, tier, rank, leaguePoints } = obj;
	
	
	speak(channel,`LoL: ${summonerName} şu anda ${tier} ${rank} ve ${leaguePoints} LP'si var.`)
	}
	const speak = (channel,text) => {
	console.log(channel)
	console.log(text)
	
	
	
	
	
	
	client.say(channel, text);
	}



	  setTimeout(intervalFunc, 3000);
}