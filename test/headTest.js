const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("return 'Lighthouse' for ['Lighthouse', 'Labs', 'Bootcamp']", () => {
    assert.strictEqual(head(['Lighthouse', 'Labs', 'Bootcamp']), 'Lighthouse');
  });
});
