const { io } = require('../index');

//mensajes de sockets
io.on('connection', client => {

    console.log('Client connected');

    client.on('disconnect', () => {
        console.log('Client disconnected')
     });

     client.on('message', ( payload ) => {
        console.log(`Mensaje: ${ payload.nombre }`);

        io.emit('message', payload);
     });


  });