var socket = io();
// on = esuchar un evento
socket.on('connect',function(){
    console.log("Conectado al servidor");
});

socket.on('disconnect', function() {
  console.log('Desconectado del servidor!');
});

//Emit= transmitir un evento
socket.emit('enviarMensaje', {
   usuario: 'Alexander',
   mensaje: 'Yupi, me salió'

}, function(resp) {
   console.log("Respuesta del servidor: ",resp);
});

//Esuchar del servidor
socket.on('enviarMensaje', function(mensaje) {
   console.log("Servidor", mensaje);
});