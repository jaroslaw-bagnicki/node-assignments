/**
 * 
 * @param {[number | string, number | string]} args
 * @returns {number} 
 */
module.exports = function sortPredicate(...args) {
  if (args.length !== 2) {
    throw Error('Invalid args number!');
  }

  const [a, b] = args;

  if ((typeof a !== 'string' && typeof a !== 'number') || (typeof b !== 'string' && typeof b !== 'number')) {
    throw Error('Invalid param type!');
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.length - b.length;
  }

  return (typeof a === 'number') ? -1 : 1;
};