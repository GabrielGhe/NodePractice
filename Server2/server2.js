var http = require('http');

console.log("Creating server");

var s = http.createServer(function(request, response){
	console.log("Received a request");
	response.writeHead(200, {"content-type":"text/plain"});
	response.write("Hello World\n");

	//set a timeout
	setInterval(function(){
		console.log("waited 2 seconds");
		response.write("I paused, but now I'm done\n");
	}, 2000);
})
s.listen(8080);

console.log("Listening on port 8080");