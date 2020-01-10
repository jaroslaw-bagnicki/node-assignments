const assert = require('assert');
const { sortArray } = require('.');

describe('sortArray', () => {

  it('should sort sample array', () => {
    const arr = [6, 'a', 1, 'asd', 32];
    const sortedArr = sortArray(arr);

    assert.deepStrictEqual(sortedArr, [1, 6, 32, 'a', 'asd']);
  });

});