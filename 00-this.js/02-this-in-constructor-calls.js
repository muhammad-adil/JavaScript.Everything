function Person(firstName, LastName){
	console.log(this);
	this.firstName = firstName;
	console.log(this);
	this.LastName = LastName;
	console.log(this);

	return this;
}

const person = new Person("john", "doe"); //constructor call
console.log(person)
//output
//Person{}
//Person { firstName: 'john'}
//Person { firstName: 'john', lastName: 'doe' }
//Person { firstName: 'john', lastName: 'doe' }
