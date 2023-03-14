#!/usr/bin/node

const myObjecti = {
  type: 'object',
  value: 12
};
console.log(myObjecti);

const myObject = {
  type: 'object',
  value: 12,
  incr: function (num) { this.value++; }
};
myObject.incr(myObject.value);
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
