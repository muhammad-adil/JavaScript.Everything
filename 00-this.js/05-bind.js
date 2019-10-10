const person = {
	firstName: "John",
	sayHi(){
		console.log(`Hi, my name is ${this.firstName}!`);
	}
};

setTimeout(person.sayHi.bind(person), 1000); //Hi, my name is John

const greet = person.sayHi.bind(person);
greet(); // Hi, my name is John

//bound function can never be change 
const otherPerson = {
	firstName: "Jane"
};
greet.call(otherPerson) // Hi, my name is John


//understand Bind
Function.prototype.bind = function(thisArg){
	const func = this;
	return function(...args){
		return func.apply(thisArg, [...fixedArgs, ...args]);
	};
};
