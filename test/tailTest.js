const assertEqual = require('../assertEqual');
const tail = require('../tail');



assertEqual(tail(["Lighthouse", "Labs", "Bootcamp"]), 3);
assertEqual(tail([1, 2, 3, 4, 5]), 2);