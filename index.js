//Aqui empezara el codigo del bot
//Empieza el codigo
const Discord = require('discord.js'); //Declaramos que la constante Discord
va a requerir del modulo discord.js

//Definimos al cliente
const client = new Discord.Client();
//Este sera nuestro bot 
//Llamamos a la config
const config = require('./config.json');

client.login(config.token); //Llamamos la config y el apartado de token 
