var http = require('http');

console.log("Creating server");
http.createServer(function(request, response){
	response.writeHead(200);
	response.write("Hello World");

	//set a timeout
	setTimeout(function(){
		response.write("I paused, but now I'm done");
		response.end();
	}, 2000);
}).listen(8080);
console.log("Listening on port 8080");