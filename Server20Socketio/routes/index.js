'use strict';

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.init = function(io) {
  // Connect
  io.on('connection', function(socket){
    console.log('user connected ' + socket.id);

    // Disconnect
    socket.on('disconnect', function(){
      console.log('user disconnected ' + socket.id);
    });

    // Chat Message
    socket.on('chat message', function(msg){
      console.log('user ' + socket.id + ': ' + msg);
      // Send to everyone except for this socket
      socket.broadcast.emit('Hello from ' + socket.id);
    });
  });
};