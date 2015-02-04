// Require the http module - allows you to make http requests and receive responses.
var http = require('http');

// Set up a host and port, that you can listen for later.
var host = '127.0.0.1';
var port = 8000;

// Express is a web framework for Node.js
// Provides access to a basic set of features which are needed for the majority of Node applications.
var express = require('express');

// Setting your app up as an instance of Express allows you to make use of Express' features.
var app = express();

// Listens for a request on a particular URL or route and sends a response.
// In this case, requests to the root of your domain/URL will receive the following response.
// This is basic routing.
app.get('/', function(request, response) {
	response.send('Boilerplate for for Node and Express!');
});

// The application can be opened on http://127.0.0.1:8000. 
// Notice the host and host and port variables which were set earlier.
app.listen(port, host);