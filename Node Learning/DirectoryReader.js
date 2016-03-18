//Written by Stephen Schroeder
//INPUT: File directory and extension person is looking for
//Output: Files of only that exentsion type

exports.main = function(dir, ext, callback){
	var fs = require("fs");
	var path = require("path");
	fs.readdir(dir, function(err, list){
		var arr = [];
		if(err){
			callback(err);
			throw err;
		}
		list.forEach(function(file){
			var fileExt = path.extname(file);
			if(ext === fileExt){
				arr.push(file);
			}
		});
		callback(null, arr);
	});
};