// Promise.allSettled() lets you know when all the promises are settled, which means either the promise is fulfilled or rejected. It returns an array of objects that describes the output of each promise whether resolved or rejected.

// For each object, a status string is present. If the status is fulfilled, then we get value and when the status is rejected, then we get a reason. The value (or reason) reflects what value each promise was fulfilled (or rejected) with. 

var geeksResolve = Promise.resolve("Geeks Resolved");

var geeksReject = new Promise((resolve, reject) => {
  reject("Geeks Rejected")
});

var promiseArr = [geeksResolve, geeksReject];

Promise.allSettled(promiseArr).then((results) => {
  results.forEach((result) => console.log(result.status))
})

// Output// Incase of resolve - Value is returned
// Incase of reject - Reason is returned

// {status: "fulfilled", value: "Geeks Resolved"}
// {status: "rejected", reason: "Geeks Rejected"}

// When an empty iterable is passed as an argument, Promise.allSettled() returns a Promise object that has already been resolved as an empty array.