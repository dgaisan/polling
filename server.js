var express = require('express');
var app = express();

var title = 'Untitled'; // Title of the talk
var liveSockets = []; // Array of live socket connections

// serving static files
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

// starting up the server
var httpServer = app.listen(3000);

// starting socket server
var socketServer = require('socket.io').listen(httpServer);

// listenning to connection
socketServer.sockets.on('connection', function(socket) {
	// register socket disconnect listener
	socket.once('disconnect', onSocketDisconnect.bind(this, socket));

	// Broadcasting a welcome message
	socket.emit('welcome', { title: title });

	liveSockets.push(socket);

	console.log('New Socket connection: ', socket.id);
	console.log('Total number of live connections:', liveSockets.length);
});

// process socket disconnet event
function onSocketDisconnect(socket) {
	var index = liveSockets.indexOf(socket);
	liveSockets.splice(index, 1);
	socket.disconnect();

	console.log('Remaining number of live connections:', liveSockets.length);
}

console.log('The Server is running');