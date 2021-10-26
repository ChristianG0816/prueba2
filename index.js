//Todo el proyecto
require('dotenv').config();
//import config from "./config";

//Modulo que se encarga para el trabajo de las rutas
const path = require('path');

const express = require('express');
//app encargado del manejo del servidor
const app = express();

//Settings

//Configuracion del puerto
app.set('port', process.env.PORT || 3000);

//Rutas para el servidor --> Archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//Inicio el servidor
const server = app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});

//Websockets

const SocketIO = require('socket.io');
//Socket.Io requiere un servidor, que es express

//Recibe los datos
// app --> contiene el codigo del servidor
const io = SocketIO(server);

//Cuando alguien se conecte se podra ejecutar el codigo
io.on('connection',(socket)=>{
    console.log('new conection', socket.id);

    //Escuchar el evento
    socket.on('chat:message',(data) =>{
        io.sockets.emit('chat:message',data);
    })

});




