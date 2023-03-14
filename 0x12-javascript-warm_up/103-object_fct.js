#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12,
  incr: function addT () {
    return console.log(this.value++);
  }
};
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
