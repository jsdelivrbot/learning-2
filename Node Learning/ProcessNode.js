//The following will take in the arugements from command line
//It will then start at the index = 2 (past command and file path) and take numbers
//it will then print to window

var command = process.argv;
var sum = 0;
for(i = 2; i < command.length; i++){
	sum += Number(command[i]);
};

console.log(sum);
