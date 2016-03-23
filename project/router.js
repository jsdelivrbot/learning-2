var url = require('url')
var Profile = require("./profile.js");

function home(req, res){
	var reqUrl = url.parse(req.url)
	if(reqUrl.pathname === "/"){
		res.writeHead(200, {'content-type':'text/plain'});

		res.write("Header\n");
		res.write("Search\n");
		res.end("footer\n");
	}
}

function user(req, res){
	var reqUrl = url.parse(req.url);
	var userStr = req.url.replace("/", "");

	console.log(userStr)

	if(reqUrl.pathname.length > 1){
		var studentProfile = new Profile("chalkers");
		studentProfile.on("end", function(data){
			res.write(data +"\n")
			res.end()
		});

		studentProfile.on("error", function(err){
			console.log(err);
			res.end()
		});
	}
}

module.exports.home = home;
module.exports.user = user;