const {io} = require('../server');


io.on('connection',(client) => {
    console.log("Usuario conectado");
    client.emit('enviarMensaje',{
        usuario: 'Alexander',
        mensaje: 'Bienvenido a nuestra aplicación'
    });
    client.on('disconnect', () => {
        console.log("Usuario desconectado del servidor");
    });

    client.on('enviarMensaje', (data,callback) => {
        
        
        console.log(data);
        //broadcast== enviar mensajes a todos los usuarios conectados
        client.broadcast.emit('enviarMensaje',data);


/*         if (mensaje.usuario) {
            callback({
                resp: 'Todo salió bien',
            });
        }else{
            callback({
                resp: 'Todo salió mal',
            });
        } */


    })
} );
