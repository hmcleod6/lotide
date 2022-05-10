const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    
    results.push(item);
  }
  return results;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// const data3 = '---';
// const results3 = takeUntil(data3, x => x === ['-','-']);
// console.log(results3);


// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

module.exports = takeUntil;