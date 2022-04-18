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
}
});
const rankFetch = async (channel) => {

 
const accountUrl = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/rogu%20chan?api_key=RGAPI-d7b061ab-14cd-42e8-821b-fa5c707fbeb2`
let result = await fetch(accountUrl)
const id = JSON.parse(await result.text()).id
const rankUrl = await `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/bWmanG6qX1aYhm0O37J6ajXRKgsoutgnnkexqQah4XwGxH0?api_key=RGAPI-d7b061ab-14cd-42e8-821b-fa5c707fbeb2`
result = await fetch(rankUrl)	
data = JSON.parse(await result.text())
rankSpeak(channel,data)
}
const rankSpeak = (channel,data) => {
console.log(channel)
console.log(data)



const {summonerName, tier, rank, leaguePoints } = data[2];


client.say(channel, `${summonerName} şu anda ${tier} ${rank} ve ${leaguePoints} LP'si var.`);
}