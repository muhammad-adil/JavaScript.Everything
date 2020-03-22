// A promise is basically an object that may produce a single value some time in the future: either a resolved value or a reason that it’s not resolved (e.g., internet connection error). 

// A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

// Three states of Promise 

// Fulfilled -> When resolve() is called
// Rejected -> When reject() is called.
// Pending -> When a promise is not fulfilled or rejected.

var calculatePromise - new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve(1 + 1)
	}, 1000);
});


//addTwo function
function addTwo(value){
	return value + 2;
}


function printFinalValue(nextValue){
	console.log("the final value is ", nextValue);
}
calculatePromise.then(addTwo).then(printFinalValue)

// calculatePromise.then(function(value){
// 	// console.log("the answer is " , value)
// 	return value + 2;
// }).then(function(nextValue){
// 	console.log("the final value is ", nextValue);
// });
