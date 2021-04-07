/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let values = [];
  const obj = {};
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  for (let i = 0; i < arr1.length; i++) {
    const lengthArr1 = arr1.filter((elem1) => elem1 === arr1[i]);
    const lengthArr2 = arr2.filter((elem2) => elem2 === arr1[i]);
    if (obj[arr1[i]] === undefined) obj[arr1[i]] = Math.min(lengthArr1.length, lengthArr2.length);
  }
  values = Object.values(obj);
  result = values.reduce((sum, current) => sum + current, 0);
  return result;
}

module.exports = getCommonCharacterCount;
