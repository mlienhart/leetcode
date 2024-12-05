/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    result += s[(i + k) % s.length];
  }

  return result;
};
