//Problem we need a simple way to look
//Solution

var http = require("http");
var fs = require("fs");
var router = require("./router.js");

//1. crate web server

var server = http.createServer(function(req, res){
	router.home(req, res);
	router.user(req, res);
})

server.listen(3000, '127.0.0.1')
console.log("running")


	//if url == "/" && GET
	//Show search
	//if url == "/" && POST
		//redirect to /:username
//3. Handle http route GET /username
 //if url == "/..."
 	//get json from treehouse
 		//on end
 			//show profile
 		//on error
 			//show error
//4. function that handles the reading of files and merge in values
	//read file from string