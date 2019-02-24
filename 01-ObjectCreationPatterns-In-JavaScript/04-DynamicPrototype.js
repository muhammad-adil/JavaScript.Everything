/*
Dynamic prototype pattern is a hybrid of constructor pattern and prototype pattern.
In this pattern, we reference the properties using this operator and we create the member functions in the prototype space of the object if the member function does not exist.
*/
var roomDynamicProto = function(book, pen) {
    this.book = book;
    this.pen = pen;  if (typeof this.AvailableMemory !== 'function') {
      roomDynamicProto.prototype.AvailableMemory = function() {
        console.log('\npen : ' + this.pen);
        console.log('book : ' + this.book);
      };
    }
  };var room1 = new roomDynamicProto(4,512);
  room1.AvailableMemory();