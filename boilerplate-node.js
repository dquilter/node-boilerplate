// Require the http module - allows you to make http requests and receive responses.
var http = require('http');

// Set up a host and port, that you can listen for later.
var host = '127.0.0.1';
var port = 8000;

var app = http.createServer(function(request, response) {
	response.writeHead(200, {
	  'Content-Type': 'text/plain' });
	response.write('This is a basic Node application');
	response.end();
})


// The application can be opened on http://127.0.0.1:8000. 
// Notice the host and host and port variables which were set earlier.
app.listen(port, host);