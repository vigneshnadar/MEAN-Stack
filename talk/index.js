var name = function(name) {
	console.log("Hello" + name);
}


var intro = function() {
	console.log("Im in index file");
}


module.exports = {
 name : name,
 intro : intro
};