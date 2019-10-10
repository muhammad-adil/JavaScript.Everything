function sayHi(){
 	console.log(`Hi, my name is ${this.firstName}!`);
}

const person = {
 	firstName: "John",
 	lastName: "Doe"
};

//person.sayHi() //Hi, my name is John

//function prototype call
sayHi.call(person); //Hi, my name is John

//function prototype apply
sayHi.apply(person); //Hi, my name is John


//diff
const numbers = [10,20,30,40,50]

const slice1 = numbers.slice(1, 4);
const slice2 = numbers.slice.call(numbers, 1, 4);
const slice2 = numbers.slice.apply(numbers, [1, 4]);

console.log(slice1); // [20,30,40]
console.log(slice2); // [20,30,40]
console.log(slice3); // [20,30,40]

// (c)all => (c)omma
// (a)pply => (a)rray

//-----------------------------------------------------
function func(){
	console.log(this === global);
}

func.call(null);	//true
func.call(undefined);	//true

func.apply(null);	//true
func.apply(undefined);	//true


//in strict mode
"use strict";
function func(){
	console.log(this === global);
}

func.call(null);	//false
func.call(undefined);	//false

func.apply(null);	//false
func.apply(undefined);	//false

