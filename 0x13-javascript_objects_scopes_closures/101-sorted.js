#!/usr/bin/node
// Script imports a dictionary of occurrences by user id
// and computes a dictionary of user ids by occurrence.

const { dict } = require('./101-data.js');

const dictByOccurrence = {};
for (const userId in dict) {
  const occurrence = dict[userId];
  if (!dictByOccurrence[occurrence]) {
    dictByOccurrence[occurrence] = [];
  }
  dictByOccurrence[occurrence].push(userId);
}

console.log(dictByOccurrence);
