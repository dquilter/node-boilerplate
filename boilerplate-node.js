// Require the http module - allows you to make http requests and receive responses.
var http = require('http');

// Set up a host and port, that you can listen for later.
var host = '127.0.0.1';
var port = 8000;

// Create your app using the createServer method.
var app = http.createServer(function(request, response) {
	// The headers for your responses will need to be written.
	// Notice status code 200 and the Content-Type being specified.
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	// Sends data to be output (as per the headers).
	response.write('This is a basic Node application');
	// Indicates that we have finished sending our response.
	response.end();
});

// The application can be opened on http://127.0.0.1:8000. 
// Notice the host and host and port variables which were set earlier.
app.listen(port, host);