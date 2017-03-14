var MongoClient = require('mongodb').MongoClient; //this the 
var dburl="mongodb://localhost:27017/meanhotel";
var _connection=null;
var open = function() {
	MongoClient.connect(dburl,function(err, db){

		if(err){
			console.log("fb connection failed");
			return;
		}
		_connection=db;
		console.log("db connection open",db);
	}); //this is callback function which accepts an error object and db object
};

var get = function() {
	return _connection;
};

module.exports = {
	open: open,
	get : get
}