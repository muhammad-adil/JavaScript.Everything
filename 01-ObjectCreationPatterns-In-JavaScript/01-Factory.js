// In the Factory pattern, we create a factory that creates specified objects and returns their reference. Every time, we call the factory, we will get a new instance.
//Factory pattern for object Creation
var roomFactory = function(book, pen) {
    var room = {}; //creating a new temporary object  //Create class properties
    room.book = book;
    room.pen = pen;  //Create class methods
    room.AvailableMemory = function() {
      console.log('Pen : ' + this.pen);
      console.log('Book : ' + this.book);
    };  return room;
  };

// Now we will create an object by calling the factory like this.
// Creating new object(s) for room class by using roomFactory
var room1 = roomFactory(4,512);
var room2 = roomFactory(16,1024);//Accessing class methods using objects
room1.AvailableMemory();
room2.AvailableMemory();