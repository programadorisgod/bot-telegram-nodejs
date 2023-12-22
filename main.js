const express = require('express')

const {mentions} = require('./helper')


const {token} = process.env

const TelegramBot = require('node-telegram-bot-api');


//Url para mensajes
const url =`https://api.telegram.org/bot${token}/sendMessage`;
//url para obtener tu info
const url2= `https://api.telegram.org/bot${token}/getMe`
//url para obtener los mensajes que le llegan al bot
const url3= `https://api.telegram.org/bot${token}/getUpdates`



//se crea un nuevo bot
const bot = new TelegramBot(token,{polling: true})


const app = express()

/** El apartado de express es por si quieres hacer pruebas locales */
app.get('/',  (_, res) => {
    
   res.json({msg: 'Funcionando'})
  
})


app.get('/mentions', async (req, res) => {
    
   
})

app.get('/me', async (req, res) => {

    const response =await fetch(url2)

    const data = await response.json()

    res.status(200).json(data)

})

/** Aquí esuchara los mensajes del bot */

bot.on('message',(msg) => {

    if (msg.text === '/everyone@YulioPatriocioBot') {

       mentions(url)
       
    }

   // bot.sendMessage(msg.chat.id, `${users.join(', ')}`)

})


app.listen(4000,() => console.log('app lista'))
