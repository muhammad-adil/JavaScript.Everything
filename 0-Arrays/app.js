//Array methods


// Array.isArray()

//to check given is array or not, boolean, true/false
let result = Array.isArray('test');
console.log(result); //false

let resultArr = Array.isArray([]);
console.log(resultArr); //true

let resultArrNew = Array.isArray([3,4,'a',5]);
console.log(resultArrNew); //true


// Array.of()
let resultArrayOf = Array.of(2, 3, 5);
console.log(resultArrayOf); //[2,3,5]


// Array.from()
let resultArrayFrom = Array.from('abc');
console.log(resultArrayFrom); //["a", "b", "c"]

let resultArrayFromNum = Array.from(23);
console.log(resultArrayFromNum); //[] // because its only works on array like objects


//Array properties

//- length
const list = [4, 2, 5];
const len = list.length;
console.log(len); //3

const listNull = [];
const lenNull = listNull.length;
console.log(lenNull); //0


//- prototype
if (!Array.prototype.first){
	Array.prototype.first = function(){
		return this[0];
	}
}

const listProto = [4, 2, -1];
let resultPrototype = listProto.first()
console.log(resultPrototype); // 4


//Mutator methods

//Array.prototype.push()
const listArr = [3, 2, -19, 4];
console.log(listArr); //[3, 2, -19, 4]

listArr.push(11);
console.log(listArr); //[3, 2, -19, 4, 11]

listArr.push(93, -90, 'test', null, {a: 1}, [2,4]);
console.log(listArr); //[3, 2, -19, 4, 11, 93, -90, 'test', null, Object {a: 1}, Array [2,4]]


//Array.prototype.pop()
//removes last element from an array
const listToPop = [3, 2, -19];
console.log(listToPop); // [3, 2, -19];

let resultPop = listToPop.pop();

console.log(listToPop); // [3, 2]
console.log(resultPop); // -19


//Array.prototype.unshift()
//add element in the beginning of an array
const listUn = [3, 2, -19];
console.log(listUn); // [3, 2, -19]

let resultUn = listUn.unshift(100);
console.log(listUn); // [100,3, 2, -19]
console.log(resultUn); // 4

let resultUnN = listUn.unshift(33, 'test');
console.log(listUn); //[33, 'test', 100, 3, 2, -19]
console.log(resultUnN); // 6


//Array.prototype.shift()
//remove element at the beginning of an array
const listSh = ["1A3", 2, -19];
console.log(listSh); // [3, 2, -19]

let resultSh = listSh.shift();
console.log(listSh); // [ 2, -19]
console.log(resultSh); // 1A3  //removed element


//Array.prototype.splice()
//insert element at index in an array 

// splice(index, number of elements to remove)
const listSp = [10, 4, 2, 9];
console.log(listSp) // [10, 4, 2, 9]

//Remove 4 from array
const resultSp = listSp.splice(1, 1); //remove 1 item at index 1
console.log(listSp) // [10, 2, 9]
console.log(resultSp) // 4
/*
if you want to remove more just add elements quantity to remove from array in splice like splice(1 , 2)
*/
//Add element in an array
const resultSpAdd = listSp.splice(1, 0, 100); //add 1 item at index 1
console.log(listSp) // [10, 100, 2, 9]
console.log(resultSpAdd) // []















