// In Constructor Pattern, we do not return the instance from the function, instead, we use the new operator along with the function name.

var room = function(book, pen) {
    // Create class properties
    this.book = book;
    this.pen = pen;  // Create class methods
    this.AvailableMemory = function() {
      console.log('Pen : ' + this.pen);
      console.log('book : ' + this.book);
    };
  };

/* Note that, we are not returning the object from the room constructor. */

// Creating new object(s) for room class by using constructor pattern
  var room1 = new room(4,512);
  var room2 = new room(16,1024); // Accessing object's properties
  room1.AvailableMemory();
  room2.AvailableMemory();