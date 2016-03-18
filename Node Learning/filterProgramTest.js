var filter = require("./DirectoryReaderModule.js");

var main = function(){
	var dir = process.argv[2];
	var ext = process.argv[3];
	filter(dir, ext, function(err, arr){
		arr.forEach(function(arg){console.log(arg);});
	});
}();
