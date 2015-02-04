// Include the Node.js driver for Mongo DB. It is downloaded via NPM.
var mongo = require('mongodb');

// Setup host and port for Mongo.
var host = '127.0.0.1';
// The variable used for port is retreived from the above package.
var port = mongo.Connection.DEFAULT_PORT;
var dbName = 'test-db';

var MongoClient = mongo.MongoClient;
var mongoURL = 'mongodb://' + host + ':' + port  + '/' + dbName;

MongoClient.connect(mongoURL, function(error, db) {
	console.log('Connected');
	
	var collection = db.collection('testCollection');
	
	collection.find(function(error, cursor) {
		console.log('Data found');
		cursor.toArray(function(error, data) {
			console.log(data);
		});
	});
	
/*	
	collection.insert({ name: 'Barry' }, function(error, docs) {
		
	});
*/
	
});