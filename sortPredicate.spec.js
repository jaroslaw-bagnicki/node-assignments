const assert = require('assert');
const sortPredicate = require('./sortPredicate');

describe('sortPredicate', () => {

  it('sould throw errow for invalid args length', () => {
    assert.throws(() => sortPredicate());
    assert.throws(() => sortPredicate(1));
    assert.throws(() => sortPredicate(1, '2', 'three'));
  });

  it('should throw error for invalid args type', () => {
    assert.throws(() => sortPredicate(null, 1));
    assert.throws(() => sortPredicate('a', {}));
    assert.throws(() => sortPredicate('0', []));
    assert.throws(() => sortPredicate(0, new Number(0)));
    assert.throws(() => sortPredicate('a', new String('a')));
    assert.throws(() => sortPredicate('xyz', new Set()));
    assert.throws(() => sortPredicate('123', Symbol()));
  });

  it('for proper args type should return number', () => {
      /** @type {number} */
      let result;

      result = sortPredicate(0, 0);
      assert.ok(typeof result === 'number');

      result = sortPredicate(0, 'a');
      assert.ok(typeof result === 'number');

      result = sortPredicate('ab', 'xz');
      assert.ok(typeof result === 'number');
  });

  it('sould return -1 if first arg is number and second is string', () => {
    /** @type {number} */
    let result;

    result = sortPredicate(0, 'a');
    assert.ok(result === -1);

    result = sortPredicate(999, '100');
    assert.ok(result === -1);

    result = sortPredicate(-1, '-1');
    assert.ok(result === -1);
  });

  it('sould return 1 if first arg is string and second is number', () => {
    /** @type {number} */
    let result;

    result = sortPredicate('a', 0);
    assert.ok(result === 1);

    result = sortPredicate('999', 100);
    assert.ok(result === 1);

    result = sortPredicate('-1', -1);
    assert.ok(result === 1);
  });

  describe('for both number type params', () => {

    it('sould return positive number if first number is greater', () => {
      /** @type {number} */
      let result;

      result = sortPredicate(1, 0);
      assert.ok(result > 0);

      result = sortPredicate(999, 1);
      assert.ok(result > 0);

      result = sortPredicate(0, -.1);
      assert.ok(result > 0);
    });

    it('sould return negative number if second number is greater', () => {
      /** @type {number} */
      let result;

      result = sortPredicate(-1, 1);
      assert.ok(result < 0);

      result = sortPredicate(1000, 10000);
      assert.ok(result < 0);

      result = sortPredicate(-.1, -.01);
      assert.ok(result < 0);
    });

    it('sould return 0 if args are equal', () => {
      /** @type {number} */
      let result;

      result = sortPredicate(1, 1);
      assert.ok(result === 0);

      result = sortPredicate(-9, -9);
      assert.ok(result === 0);

      result = sortPredicate(.1, .1);
      assert.ok(result === 0);
    });

  });

  describe('for both string type params', () => {

    it('sould return positive number if first string is longer', () => {
      /** @type {number} */
      let result;

      result = sortPredicate('abc', 'a');
      assert.ok(result > 0);

      result = sortPredicate('aaaaaaaaaaaaaaaa', 'aaaaaaaaaaaaa');
      assert.ok(result > 0);

      result = sortPredicate('qwert', '');
      assert.ok(result > 0);
    });

    it('sould return negative number if string is longer', () => {
      /** @type {number} */
      let result;

      result = sortPredicate('xy', 'xyz');
      assert.ok(result < 0);

      result = sortPredicate('zaq', 'zaqzaqzaq');
      assert.ok(result < 0);

      result = sortPredicate('0', '-0.1');
      assert.ok(result < 0);
    });

    it('sould return 0 if string have same length', () => {
      /** @type {number} */
      let result;

      result = sortPredicate('a', 'a');
      assert.ok(result === 0);

      result = sortPredicate('abc', 'efg');
      assert.ok(result === 0);

      result = sortPredicate('10', '99');
      assert.ok(result === 0);
    });

  });
});