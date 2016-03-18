//written by Stephen Schroeder
//The following program listens on a given tcp port for requests
//The program will resppond to requests with the current time

var net = require('net');
var port = process.argv[2];

var timeMaker = function(){
		var date = new Date();
		var year = date.getFullYear();
		var month = ('0' + (date.getMonth() + 1)).slice(-2);
		var day = ('0' + date.getDate()).slice(-2);
		var hours = date.getHours();
		var minutes = date.toTimeString().substr(0,5);

		return year + '-' + month + '-' + day + ' ' + minutes + "\n";
	};
var server = net.createServer(function(socket){
	socket.write(timeMaker());
	socket.end();

});

server.listen(port);
