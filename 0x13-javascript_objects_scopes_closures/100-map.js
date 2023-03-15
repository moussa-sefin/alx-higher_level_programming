#!/usr/bin/node
// script that imports an array and computes a new array

const array = require('./100-data').list;

console.log(array);
const map1 = array.map(function (x, index) {
  return (x * index);
});
console.log(map1);
