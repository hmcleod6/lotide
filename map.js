const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// const results1 = map(words, word => word[0]);

// console.log(assertArraysEqual(["g" , "c", "t", "m", "t"], results1));


module.exports = map;