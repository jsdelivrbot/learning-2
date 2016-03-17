//Created by Stephen Schroeder
//Done while doing udacity tutorials
//Practicing functional class pattern

//Super Class
var Employee = function(name, id, salary){
	var obj = {name: name, id:id,salary:salary};
	obj.salaryChange = function(salary){
		obj.salary = salary;
	};
	return obj;
};

//SubClass
var Janitor = function(name, id, salary, level){
	var obj = Employee(name, id, salary);
	obj.level = level;
	obj.clean = function(){
		console.log("I am cleaning");
	};
	return obj;
};
var tod = Janitor("Steve", 1212, 100000, 2);
tod.salaryChange(200000);
console.log(tod.salary);
tod.clean();
 