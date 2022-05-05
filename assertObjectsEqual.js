const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        result = false;
      }
    }
  } else {
    result = false;
  }
  return result;
};

const eqObjects = function(object1, object2) {
  if (Object.entries(object1).length !== Object.entries(object2).length)
    return false;
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) !== Array.isArray(object2[key])) return false;
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) 
      return false;
    }
    for (const [key, value] of Object.entries(object1)) {
      if (typeof value === "object") {
        if (!eqObjects(object1[key], object2[key])) 
        return false;
      } else {
        if (object1[key] !== object2[key]) 
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const object1 = { c: "1", d: ["2", 3] };
const object2 = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(object1, object2)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false