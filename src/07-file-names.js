/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [...names];
  for (let i = 0; i < result.length; i++) {
    let count = 0;
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] === result[j]) {
        count++;
        result[j] = `${result[j]}(${count})`;
      }
    }
  }
  return result;
}

module.exports = renameFiles;
