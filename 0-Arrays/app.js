//Array methods


// Array.isArray()

//to check given is array or not, boolean, true/false
let result = Array.isArray('test');
console.log(result); //false

let resultArr = Array.isArray([]);
console.log(resultArr); //true

let resultArr = Array.isArray([3,4,'a',5]);
console.log(resultArr); //true


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

