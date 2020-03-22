// Promise.all() method is basically a promise that takes an array of Promises (an iterable) as an input and then it returns a single Promise that gets resolved when all the promises passed as an iterable/ array are resolved or when the any of the passed promises gets rejected.

// If the passed array is empty, then a promise is returned by this method that is already resolved.
Promise.all([]).then(()=>{
   console.log("Empty Iterable gets resolved")
});
// Output
// Empty Iterable gets resolved


// When all the promises provided in the array/ iterable are resolved then this method gets resolved.
const promise1 = Promise.resolve(3);

// If the passed array contains no promise, it returns a Promise that is resolved asynchronously
const promise2 = 42;

const promise3 = new Promise((resolve, reject) => {
  resolve("Promise.all() Resolved.")
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// Output
//Array of fullfilled value is returned if the Promise.all() gets fulfilled
// [3, 42, "Promise.all() Resolved."]

// Rejection
// If even one of the promises passed in the array/ iterable is rejected irrespective of whether other promises are resolved. Then this method rejects the value of that promise.
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise((resolve, reject) => {
  reject("Promise Rejected Irrespective of other resolutions")
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((err) => {
  console.log(err)
});
// Output
// Promise Rejected Irrespective of other resolutions



