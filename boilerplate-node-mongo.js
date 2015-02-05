// Require the http module - allows you to make http requests and receive responses.
var http = require('http');
// Include the Node.js driver for Mongo DB. It is downloaded via NPM.
var mongo = require('mongodb');

// Set up a host and port, that you can listen for later.
var appHost = '127.0.0.1';
var appPort = 8000;

// Setup the various variables that are needed to connect to the Mongo database.
var dbHost = '127.0.0.1';
// The variable used for port is retreived from the Mongo DB package.
var dbPort = mongo.Connection.DEFAULT_PORT;
var dbName = 'test-db';

// MongoClient is the recommended way of connecting to a Mongo database.
var MongoClient = mongo.MongoClient;
// Construct the URL that is used to connect to the Mongo database.
var mongoURL = 'mongodb://' + dbHost + ':' + dbPort  + '/' + dbName;

// Create your app using the createServer method.
var app = http.createServer(function(request, response) {

	var dataToWrite;
	
	// Connect to the database.
	MongoClient.connect(mongoURL, function(error, db) {
		// Using console logs extensively to debug.
		// These will appear on the command line.
		console.log('Connected');

		// Create a reference to the specific collection you want to access.
		var collection = db.collection('testCollection');

		// A very simple query (find ALL of the datas!).
		collection.find(function(error, cursor) {
			// In the callback there is a reference to the cursor.
			// The cursor is returned by the find function.
			console.log('Data found');
			// You can use the toArray method on the cursor to get an array of results. 
			// Or you can use the forEach method to iterate over the results.
			cursor.toArray(function(error, data) {
				console.log(data);
				// We're accessing a very specific piece of data.
				// Comes from an array of objects.
				dataToWrite = data[0].propertyName;

				// Note that the response is written in the database's 'find' callback.
				// If it weren't the response would probably be written
				// before we got anything back from the database.
				
				// The headers for your responses will need to be written.
				// Notice status code 200 and the Content-Type being specified.
				response.writeHead(200, { 'Content-Type': 'text/plain' });
				// Sends data to be output (as per the headers).
				response.write('This is a basic Node application written by ' + dataToWrite);
				// Indicates that we have finished sending our response.
				response.end();
			});
		});

	});	
	
});

// The application can be opened on http://127.0.0.1:8000. 
// Notice the host and host and port variables which were set earlier.
app.listen(appPort, appHost);