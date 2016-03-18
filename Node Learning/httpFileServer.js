//Written by Stephen Schroeder
//The following is a fileserver program built in node 
var http = require('http');

var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];

var httpServer = http.createServer(function(request, response)
{
	var resStream = fs.createReadStream(file);
	resStream.pipe(response);
});

httpServer.listen(port);

