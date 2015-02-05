/***
This script runs on the command line.
It assumes you have Mongo DB installed locally.
If you do not have already have a database when you first run this script,
it will create a database of the name you specify (in the variable 'dbName').
***/

// Include the Node.js driver for Mongo DB. It is downloaded via NPM.
var mongo = require('mongodb');

// Setup the various variables that are needed to connect to the Mongo database.
var host = '127.0.0.1';
// The variable used for port is retreived from the Mongo DB package.
var port = mongo.Connection.DEFAULT_PORT;
var dbName = 'test-db';

// MongoClient is the recommended way of connecting to a Mongo database.
var MongoClient = mongo.MongoClient;
// Construct the URL that is used to connect to the Mongo database.
var mongoURL = 'mongodb://' + host + ':' + port  + '/' + dbName;

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
		});
	});
	
/*
	// Insert an item into a collection
	collection.insert({ name: 'Barry' }, function(error, inserted) {
		// The insert function returns a reference to the documents that have been inserted. 
		console.log(inserted);	
	});
*/

});