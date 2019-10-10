//this in global execution
this === window //true

"use strict";
this === window //true



//node
this === global //true



//node module
this === global //false

this === module.exports 	//true
console.log(this === module.exports)