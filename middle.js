const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const middle = function(array) {
  let length = array.length;

  if (length < 3) {
    return [];
  } else if (length % 2 === 0) { 
    return [array[Math.round(length / 2) - 1], array[Math.round(length / 2)]];

  } else if (length % 2 === 1) { 
    return [array[Math.floor(length / 2)]];
  }
};

module.exports = middle;