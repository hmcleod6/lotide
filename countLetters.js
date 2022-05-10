const assertEqual = require('./assertEqual');

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

module.exports = countLetters;