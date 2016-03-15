var blah = "hello";
var meow = (hello)=> {
	hello = hello + blah
	return [x => {console.log(hello + " Awesome " + x)}, x =>{hello = "changed"}];
};


var newFunc = meow("meow");

newFunc[1]("Sam");

newFunc[0]("Steve")



