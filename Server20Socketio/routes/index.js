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

  });
};