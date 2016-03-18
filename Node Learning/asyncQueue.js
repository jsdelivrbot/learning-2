
var http = require("http");
var bl = require("bl");

(function(){
	var cmd = process.argv.slice(2);
	var resArr = [];
	var urls = cmd.length;
	var count = 0;

	//Invoked by requester and prints all items of resArr
	var print = function(){
			resArr.forEach(function(data){
				console.log(data);
			});
	};

	//The following takes an index to keep track of its position in the queue. 
	//It will then make a get request at the given url for that index
	//Finally it logs the response to the resparray and checks if the count is equal to the amount of urls
	var requester = function(index){
		resArr.push(null);
		http.get(cmd[index],function(response){
			response.pipe(bl(function(err,data){
				resArr[index]= data.toString();
				count++;
				if(count === urls) print();
			}));
		});
	};


	var main = function(){
		for(var i = 0; i < cmd.length; i++){
			requester(i);
		}
	}();
})();
