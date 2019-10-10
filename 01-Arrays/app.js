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


//Array.prototype.sort()
const listSort = [4, 14, 39, 1]
console.log(listSort);

let resultSort = listSort.sort((a,b) => {
	return a - b ; // b- a for reverse sort
});

console.log(listSort);
console.log(resultSort);

//Sort continued
const fruits = ['orange', 'banana', 'apple'];
console.log(fruits);//[ "orange", "banana", "apple" ]

let resultFr = fruits.sort();

console.log(fruits); //[ "apple", "banana", "orange" ]
console.log(resultFr); //[ "apple", "banana", "orange" ]

//Reverse
let fruitsRev = fruits.reverse();
console.log(fruitsRev); // [ "orange", "banana", "apple" ]


//Accessor Methods

//Array.prototype.concat()
//merge or concatenate two or more arrays

let list1 = [2,3,4,5];
let list2 = ['e', 'b', 'c'];
let list3 = [-100, 99, 0];

let resultConcat = list1.concat(list2);
console.log('concatenated list', resultConcat);

let resultMoreConcatenate = list1.concat(list2, list3);
console.log(resultMoreConcatenate);


//Array.prototype.includes()
//check if element is in array or not, returns boolean true or false

let listInc = [4, 2, 50, 3, 11];
let resultInc = listInc.includes(50);
console.log(resultInc) //true



//Array.prototype.indexOf()
let listI = [4, 2, 50, 3, 11];
let resultI = listI.indexOf(4);
let resultIn = listI.indexOf(100);

console.log(resultI); // 0
console.log(resultIn); // -1



//Array.prototype.join()
let listAlphabets = ['w', 'o', 'r', 'd'];
let resultJoin = listAlphabets.join('');
console.log(resultJoin); // word

//join nums
let listNums = [1, 2, 3, 4];
let resultJoinNums = listNums.join('');// also can add -,./ between elements
console.log(resultJoinNums); // 1234


// Array.prototype.slice()
let listSl = [1, 2, 3, 4];
console.log("before", listSl);
let resultSl = listSl.slice(2);
console.log("after", listSl);
console.log(resultSl); // [3, 4]


/* Array iteration methods */

// Array.prototype.every()
const numbers = [1,2,3,4,5,8,10,11,12];
let resultNums = numbers.every((item) => {
	return item % 2 === 0
})
console.log(resultNums);// false


//Array.prototype.filter
// const numbers = [1,2,3,4,5,8,10,11,12];
let resultFilter = numbers.filter((item) => {
	return item > 8
})
console.log(resultFilter);//[10,11,12]


//array.prototype.forEach
// const numbers = [1,2,3,4,5,8,10,11,12];
const resultFE = [];

numbers.forEach((item, index) => {
	resultFE.push(item * index);
});
console.log(resultFE);//[ 0, 2, 6, 12, 20, 40, 60, 77, 96 ]


//Array.prototype.map()
// const numbers = [1,2,3,4,5,8,10,11,12];

let mappedValues = numbers.map((item) => {
	return item + 5;
});
console.log(mappedValues);//[ 6, 7, 8, 9, 10, 13, 15, 16, 17 ]



//Array.prototype.reduce()
// const numbers = [1,2,3,4,5,8,10,11,12];

let total = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
})
console.log(total); //56

const abc = ['a', 'b', 'c', 'd'];
let totalABC = numbers.reduce((accumulator, currentValue) => {
	return accumulator + "," + currentValue;
})
console.log(abc); // [ "a", "b", "c", "d" ]

