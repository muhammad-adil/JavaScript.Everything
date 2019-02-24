/* In JS, almost every object has some prototype space that contains properties related to the object.
In prototype pattern, we create a blank object and assign properties (and functions also) to its prototype with some default values and then we create a blank object and assign the actual values for the properties. */

var room = function() {};room.prototype.book = NaN;
room.prototype.pen = NaN;
room.prototype.AvailableMemory = function() {
  console.log('Pen : ' + this.pen);
  console.log('book : ' + this.book);
}; // Creating new object(s) for room class
// by using Prototype Patternvar room1 = new room(); 
// Empty object created with default valuesroom1.book = 4; // Assigning the actual value for object property
room1.pen = 512;var room2 = new room();
room2.book = 16;
room2.pen = 1024; // Accessing class methods using objects
room1.AvailableMemory();
room2.AvailableMemory();

// Now consider if we create a new object of the computer with default values.

// var room1 = new room(); 
// // Created object with default valuesconsole.log('ram' in computer1); //returns true
// console.log(room1.hasOwnProperty('book')); // returns false