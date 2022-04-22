const tmi = require('tmi.js');
const fetch = require('node-fetch')
require('dotenv').config({path: __dirname + '/.env'})

const client = new tmi.Client({
	options: { debug: true },
	identity: {
			username: 'MaesOneBOT',
		password: 'oauth:vxh719e03arfqgl7aqil89dg2w9lhj'
	},
	channels: [ 'maesone' ]
});
client.connect();
client.on('message', (channel, tags, message, self) => {
if(self) return;
if(message.toLowerCase() === '!test') {
 client.say(channel, `Test!`);
}
if (message.toLowerCase() === '!rank') {
	rankFetch(channel,tags)
 
 valorankFetch(channel,tags)
}
});


const rankFetch = async (channel,tags) => {

 
	const accountUrl = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/rogu%20chan?api_key=RGAPI-87079135-fd2e-4430-973b-9af76f409e64`
	let result = await fetch(accountUrl)
	const id = JSON.parse(await result.text()).id
	const rankUrl = await `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/bWmanG6qX1aYhm0O37J6ajXRKgsoutgnnkexqQah4XwGxH0?api_key=RGAPI-87079135-fd2e-4430-973b-9af76f409e64`
	result = await fetch(rankUrl)	
	data = JSON.parse(await result.text())
	const arr = data;
	const obj = arr.find((o) => o.queueType === "RANKED_SOLO_5x5");
		const {summonerName, tier, rank, leaguePoints } = obj;
		speak(channel,`LoL:" ${summonerName} şu anda ${tier} ${rank} ve ${leaguePoints} LP'si var. @${tags.username} " `)
	}
	const speak = (channel,text) => {
	console.log(channel)
	console.log(text)
	
	
	
	
	
	
	client.say(channel, text);
	}


const valorankFetch = async (channel,tags) => {

 
	const accountUrl = `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/fba1aaea-1e89-51c9-8ff5-04b43fd781df`
let result = await fetch(accountUrl)
const id = JSON.parse(await result.text()).id
const rankUrl = await `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/fba1aaea-1e89-51c9-8ff5-04b43fd781df`
result = await fetch(rankUrl)	
valdata = JSON.parse(await result.text())

	function intervalFunc(data) {

		const {currenttierpatched,ranking_in_tier,name} = valdata.data;
		client.say(channel,`Valo: " ${name} şu an ${currenttierpatched} ${ranking_in_tier} puanda. @${tags.username} " `)
	}
	


	  setTimeout(intervalFunc, 4000);
	}




	client.on('message', (channel, tags, message, self) => {
	if(message.toLowerCase() === '!valosonmaç')
	lastFetch(channel,tags)
});
	const lastFetch = async (channel,tags) => {
	 
	  const macUrl = await `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/fba1aaea-1e89-51c9-8ff5-04b43fd781df`
result = await fetch(macUrl)	
valdata = JSON.parse(await result.text())
const {mmr_change_to_last_game} = valdata.data;
	{
      if(mmr_change_to_last_game<0)
		client.say(channel,`Valorant son maç: "Lose" ve giden puan ${mmr_change_to_last_game}.`)
		else 
		client.say(channel,`Valorant son maç "Win" ve gelen puan ${mmr_change_to_last_game}. `)}
	
}
