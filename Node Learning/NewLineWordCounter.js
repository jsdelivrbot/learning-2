//Written by Stephen Schroeder
//Sync file reading
//EXECUTION: The following will read in a file and count the new line charcters contained in it.
//RESULT: The program will split out a console log with amount of new line characters

//Import file system module
var fs = require('fs');

//To limit global collusion we will run annoymously
var main = function(){

	//Creation of variables
	/*var command = process.argv;
	var filepath = command[2];
	var buffer = fs.readFileSync(filepath);
	var text = buffer.toString();
	var arr = text.split("\n");

	console.log(arr.length - 1);
	*/

	//Simpler

	console.log(fs.readFileSync(process.argv[2]).toString().split("\n").length - 1);

}();
