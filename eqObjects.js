const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.entries(object1).length !== Object.entries(object2).length)
    return false; // if the objects are not the same length, you know they are not going to be equal
  for (let key in object1) { // loop through the keys in object 1
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //
      if (eqArrays(object1[key], object2[key]) === false) { // using function eqArrays to determine whether the keys in Obj 1 and 2 are perfect matches, returns true or false
        return false;
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqObjects;