const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

assertArraysEqual(middle([1,3,4,7]), 3);