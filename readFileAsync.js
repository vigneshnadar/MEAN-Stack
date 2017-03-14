var f = require('fs');


var onFileLoad = function(err, file) {
	console.log("Got the file");
};

console.log("before fetching");
f.readFile('readFileSync.js', onFileLoad);

console.log("after fetching");