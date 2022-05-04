const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(words) {
  const result = {};
  const newWordsString = words.split(" ").join("");
  for (const letter of newWordsString) {
    if (result[letter]) { 
      result[letter] += 1;
    } else { 
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters("my name is heather"));