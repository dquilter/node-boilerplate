// Require the http module - allows you to make http requests and receive responses.
var http = require('http');

// Set up a host and port, that you can listen for later.
var host = '127.0.0.1';
var port = 8000;

// Express is a web framework for Node.js. It is downloaded via NPM.
// Provides access to a basic set of features which are needed for the majority of Node applications.
var express = require('express');

// Setting your app up as an instance of Express allows you to make use of Express' features.
var app = express();

// Express allows you to use templating to organise your markup.
// This app uses handlebars, but you can use others (such as Jade).
// You'll need to install the 'express-handlebars' module.
var exphbs = require('express-handlebars');
app.engine('html', exphbs({
    defaultLayout: 'main', // The name of the main 'container' template.
    extname: '.html' // The file extension that should be used.
}));
// Handlebar requires a specific file structure.
// The main layout should be in '/views/layouts/'.
// The views themselves are in the '/views/' folder.
app.set('view engine', 'html');

// Listens for a request on a particular URL or route and sends a response.
app.get('/', function(request, response) {
	// The route for the homepage.
    response.render('home');
});

app.get('/route/', function(request, response) {
	// The route for a subpage.
    response.render('route');
});

app.get('/dynamic/', function(request, response) {
	var contentType = 'dynamic';
	// You can define content within Javascript variables, and then pass them to the view to be rendered dynamically.
    response.render('dynamic', {
		helpers: {
			 output: contentType
		}
	});
});



// The application can be opened on http://127.0.0.1:8000. 
// Notice the host and host and port variables which were set earlier.
app.listen(port, host);