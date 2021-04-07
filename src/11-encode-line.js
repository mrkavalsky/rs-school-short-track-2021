/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const obj = {};
  const result = [];
  const index = str.length - 1;
  if (index === -1) return str;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) obj[str[i]] = 1;
    else obj[str[i]]++;
    if ((str[i] !== str[i - 1]) && (i - 1 !== -1)) {
      if (obj[str[i - 1]] === 1) result.push(`${str[i - 1]}`);
      else result.push(`${obj[str[i - 1]]}${str[i - 1]}`);
      obj[str[i - 1]] = 0;
    }
  }
  if (obj[str[index]] === 1) result.push(`${str[index]}`);
  else result.push(`${obj[str[index]]}${str[index]}`);
  return result.join('');
}

module.exports = encodeLine;
