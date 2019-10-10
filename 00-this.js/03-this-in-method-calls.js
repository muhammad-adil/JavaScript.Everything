// const person = {
// 	firstName: "John",
// 	sayHi(){
// 		console.log(`Hi, my name is ${this.firstName}!`);
// 	}
// };

// person.sayHi() //Hi, my name is John


//also can do it seperately then bind
function sayHi(){
	console.log(`Hi, my name is ${this.firstName}!`);
}

const person = {
	firstName: "John",
};

person.sayHi = sayHi;
person.sayHi();

//property chaining
foo.bar.person.sayHi(); 

//---------------------------------------------------------

const person = {
 	firstName: "John",
 	sayHi(){
 		console.log(`Hi, my name is ${this.firstName}!`);
 	}
};

// setTimeout(function(){
// 	person.sayHi() //Hi, my name is John	
// }, 1000);

setTimeout(person.sayHi.bind(person),1000); //Hi, my name is John
