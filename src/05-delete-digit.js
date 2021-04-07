/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = `${n}`;
  const arr = string.split('');
  let result = [];
  let pos = 0;
  for (let i = 0; i <= 9; i++) {
    if (arr.find((elem) => i === +elem)) {
      pos = arr.findIndex((item) => i === +item);
      break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (i !== pos) result.push(arr[i]);
  }
  result = result.join('');
  return +result;
}

module.exports = deleteDigit;
