'use strict';

(function($){
  var socket = io();
  socket.emit('chat message', 'I\'m saying things from client');
})(jQuery);