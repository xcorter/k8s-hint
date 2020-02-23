const http = require('http'); 
const os = require('os');

console.log("Kubia server starting...");

var counter = 0;

var handler = function(request, response) {
	if (counter > 5) {
		console.log("Pizdos request from " + request.connection.remoteAddress);
		response.writeHead(500);
	} else {
		console.log("Received request from " + request.connection.remoteAddress);
		response.writeHead(200);
	}
	console.log(counter++);
	response.end("You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler); 
www.listen(8081);