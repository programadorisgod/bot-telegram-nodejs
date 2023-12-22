---
runme:
  id: 01HJ7WDM73V54D1GBAM0RWJ5TC
  version: v2.0
---

# Para obtener el token de tu bot en Telegram, debes seguir estos pasos:

Descarga e instala la aplicación de Telegram en tu teléfono inteligente y registra una nueva cuenta en Telegram (nuevo usuario).

Una vez que hayas iniciado sesión en tu cuenta de Telegram, busca a "BotFather" y selecciónalo. Asegúrate de que sea el que esté etiquetado como 'bot'.

Escribe "/start" y escribe "/newbot" para crear un nuevo bot de Telegram.

Escribe el nombre de usuario para tu nuevo bot, que debe terminar con "bot". 

No puedes elegir un nombre de usuario que ya esté tomado por otros (por ejemplo, "MsgAidBot").

Después de crear con éxito un nuevo bot, BotFather te enviará un mensaje que contiene la clave API HTTP. Esta clave API HTTP es el token de tu bot que necesitas para interactuar con la API de bots de Telegram.

Aquí hay un ejemplo de cómo se ve un token de bot: 123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11.

Por último, recuerda mantener tu token de bot seguro, ya que cualquier persona con acceso a él puede controlar tu bot. 1

# Para escribirle a tu bot en Telegram, simplemente necesitas abrir una conversación con él en la aplicación de Telegram. Aquí están los pasos:

## Abre la aplicación de Telegram en tu dispositivo.
En la barra de búsqueda en la parte superior, escribe el nombre de usuario de tu bot. El nombre de usuario de tu bot es el nombre que le diste cuando lo creaste a través de BotFather.
Selecciona tu bot de la lista de resultados de búsqueda.
Ahora estás en una conversación con tu bot. Simplemente escribe un mensaje y presiona el botón de enviar. Tu bot recibirá este mensaje y podrá procesarlo.
Recuerda que tu bot solo puede recibir mensajes que comiencen con / si está en modo de privacidad. Si tu bot está en un grupo, puede que necesites hablar con el administrador del grupo para que tu bot pueda recibir mensajes.

Una vez que tu bot reciba un mensaje, podrás ver este mensaje en la respuesta de la API getUpdates

## Para obtener el ID de un chat en Telegram, puedes seguir los siguientes pasos:

1. Para chats privados: Cuando tu bot recibe un mensaje de un chat privado, el objeto de mensaje incluirá el ID del chat. Puedes obtener este ID de la propiedad message.chat.id en el objeto de actualización que recibes de la API getUpdates. 

2. Para chats de grupo: Para obtener el ID de un chat de grupo, primero debes agregar tu bot a ese grupo. Luego, puedes usar la misma técnica que para los chats privados, pero el ID del chat será diferente. También puedes usar la versión web de Telegram para obtener el ID del chat.

3. Usando un bot de terceros: Hay varios bots de terceros disponibles que pueden ayudarte a obtener el ID de un chat. Por ejemplo, puedes usar el bot @get_id_bot. Simplemente envía el comando /my_id a este bot y te devolverá el ID de tu chat. 1
Por favor, ten en cuenta que los IDs de chat son sensibles y deben manejarse con cuidado. No compartas nunca tu token de bot ni tu ID de chat con nadie que no confíes completamente.

## Para agregar un comando  a tu bot de Telegram, necesitas usar BotFather, que es el bot oficial de Telegram para gestionar otros bots. Aquí están los pasos para agregar un comando a tu bot:

Abre la aplicación de Telegram en tu dispositivo y busca a BotFather.
Inicia una conversación con BotFather y escribe /mybots para ver una lista de tus bots.

Selecciona el bot al que quieres agregar un comando.
Haz clic en la opción Edit Bot.

Finalmente, selecciona la opción Set Commands.

BotFather te pedirá que ingreses los comandos que quieres agregar a tu bot. Cada comando debe estar en una línea separada y tener el siguiente formato: comando - descripción. Por ejemplo:

```bash
/saludar - saluda a todos los miembros del grupo
``````

## Librerias a usar

node-telegram-bot-api

```bash
npm i node-telegram-bot-api