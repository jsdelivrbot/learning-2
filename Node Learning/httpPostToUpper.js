//Written by Stephen Schroeder
//The following is a fileserver program built in node 
var http = require('http');
var map = require('through2-map');
var url = require('url');
var port = process.argv[2];

var httpServer = http.createServer(function(req, res)
{
	var url = url.parse(req.url, true);
	var output = "";
	if(req.method === 'GET'){
		//Check to see if iso query is present
		if(url.query.iso !== undefined){
			//grab query item
			var iso = url.query.iso;
			var date = new Date(iso);
			switch(url.pathname){
				case '/api/parsetime':
					var timeObj = {
						minutes: ("0" + date.getMinutes()).slice(-2),
						seconds: ("0" + date.getSeconds()).slice(-2),
						hours: ("0" + date.getHours()).slice(-2)
					};
					output = JSON.stringify(timeObj, null, "\n");
					break;
				case '/api/unixtime':
					output = JSON.stringify(date.getTime());
					break;
			}
		}else{
			output = "No Iso Provided";
		}
	}else{
		output = "Please make a GET request";
	}
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.write(output); 
});

httpServer.listen(port);

