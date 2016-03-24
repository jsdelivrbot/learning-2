'use strict'

var express = require('express'),
	posts = require('./mock/posts.json');

var app = express();

var postLists = Object.keys(posts).map(function(value){
return posts[value];});

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.use('/static', express.static( __dirname +'/public'));

app.get('/', function(req, res){
	var path = req.path;
	console.log("loaded");
	res.locals.path = path;
	res.render('index.jade');
});

app.get('/blog/:id?', function(req, res){
	var title = req.params.id;
	if(title === undefined){
		res.status(503);
		res.render('blog', {posts: postLists});
	}else{
		var rtnPosts = posts[title] || {};
		res.render('posts.jade', {post: rtnPosts});
	}
	

});
app.listen(3000, function(){
	console.log("The frontend server is running on Port 3000");
});