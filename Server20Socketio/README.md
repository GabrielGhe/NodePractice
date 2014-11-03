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
<!-- ### in index.html/index.ejs ### -->
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
