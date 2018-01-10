


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


