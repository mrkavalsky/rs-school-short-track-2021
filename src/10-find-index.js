/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((array.length - 1) / 2);
  while (array[mid] !== value) {
    if (array[mid] > value) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }
  return mid;
}

module.exports = findIndex;
