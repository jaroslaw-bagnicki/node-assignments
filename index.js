const sortPredicate = require('./sortPredicate');

/** @type {(arr: (number | string)[]) => (number | string)[]} */
const sortArray = (arr) => arr.sort(sortPredicate);

const arr = [6, 'a', 1, 'asd', 32];
const sortedArr = arr.sort(sortPredicate);
console.log(sortedArr);

module.exports = {
  sortArray,
};