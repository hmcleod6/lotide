const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(words) {
  let newArray = words.slice(1);
  return newArray;
};

const words = ["Lighthouse", "Labs", "Bootcamp"];
const newArray = tail(words);
assertEqual(newArray.length, 3);