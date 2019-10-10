class Person {

	// sayHi = () => {
	// 	console.log(`Hi, my name is ${this.firstName}!`);
	// };

	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;

		this.sayHi = this.sayHi.bind(this);
	}

	sayHi(){
		console.log(`Hi, my name is ${this.firstName}!`);
	}

}

const person = new Person("John", "Doe");
// person.sayHi();

// const greet = person.sayHi.bind(person); //Hi, my name is John!
 
//after bind in constructor
const greet = person.sayHi; //Hi, my name is John!
greet();


