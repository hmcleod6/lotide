const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "2" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false