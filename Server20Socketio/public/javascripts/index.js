'use strict';

(function($){
  var socket = io();
  
  socket.emit('chat message', 'I\'m saying things from client');

  socket.on('chat message', function(msg){
    console.log(msg);
  });
})(jQuery);