NodeJS with Socket.io
============

<p>
  If you ever want to create a real time web interface, you probably should learn about web sockets.
  A very good javascript library is Socket.io. It starts off with websockets and if the browser doesn't support that technology,
  it will switch to long polling or another technology. It is extremely simple to implement.
</p>

<h1>Installation</h1>
```shell
# ### in terminal ###
npm install --save socket.io

# look at my bower guide
npm install --save bower
bower install --save socket.io-client
bower install --save jquery
```

<p>
  Add jquery and socket.io to your html page
</p>

```html
<!-- ### in views/index.ejs or an html file ### -->
<script type='text/javascript' src='/bower_components/socket.io-client/socket.io.js'></script>
<script type='text/javascript' src='/bower_components/jquery/dist/jquery.min.js'></script>
<script type='text/javascript' src='/javascripts/index.js'></script>
```

<p>
  Now that you have the libraries, you have to use them. Lets first do the client side.
</p>

```javascript
// ### in public/javascripts/index.js ###
(function($){
  // initialize socket.io
  var socket = io();
  
  // Send a message to the server
  socket.emit('chat message', 'I\'m saying things from client');
  
  // Receive message
  socket.on('chat message', function(msg) {
    console.log(msg);
  });
})(jQuery);
```

<p>
  Now we need to setup the server.
</p>
```javascript
// ### in app.js ###

// at the end of the file
var io = require('socket.io')(server);
routes.init(io);
```

<p>
  We need to tell socket.io on the server side what to do, so create a function to handle that.
  I put that method in routes/index.js but you can put it anywhere.
</p>
```javascript
// ### in routes/index.js ###

exports.init = function(io) {
  // Connect
  io.on('connection', function(socket){
    console.log('user connected ' + socket.id);

    // Disconnect
    socket.on('disconnect', function(){
      console.log('user disconnected ' + socket.id);
    });

    // Chat Message event handler
    socket.on('chat message', function(msg){
      console.log('user ' + socket.id + ': ' + msg);
      // Send to everyone except for this socket
      socket.broadcast.emit('chat message', msg);
      
      // Send to everyone including this socket
      socket.emit('chat message',msg);
    });
  });
};
```
