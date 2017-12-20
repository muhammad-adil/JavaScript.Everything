


// function func(){
// 	console.log( this === global);
// }

//func() //true


//if we are in strict mode
"use strict"

function func(){
	console.log( this === undefined);
}
//it will be undefined true
func() //true 

//----------------------------------------------------------
function Person(firstName, LastName){
	this.firstName = firstName;
	this.LastName = LastName;
}

const person = Person("john", "doe");
console.log(person) //undefined

//but
console.log(global.firstName); //john
console.log(global.LastName); //doe


//in strict mode
"use strict";

function Person(firstName, LastName){
	this.firstName = firstName;
	this.LastName = LastName;
}

const person = new Person("john", "doe");
console.log(person) //person{ firstName: 'john', lastName:'doe'}

//but
console.log(global.firstName); //undefined
console.log(global.LastName); //undefined







