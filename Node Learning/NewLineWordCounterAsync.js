//Written by Stephen Schroeder
//ASync file reading
//EXECUTION: The following will read in a file and count the new line charcters contained in it.
//RESULT: The program will split out a console log with amount of new line characters

//Import file system module


//To limit global collusion we will run annoymously
(function(){
	var fs = require('fs');
	//get filepath
	var filepath = process.argv[2];

	//invoke async file read
	fs.readFile(filepath, function(err, data){
		//Catch error and report if it occurs
		if(err){
			console.log("error!" + err);
			throw err;
		}
		//make array
		var arr = data.toString().split("\n");
		//write that array out
		console.log(arr.length - 1);
	});

})();
