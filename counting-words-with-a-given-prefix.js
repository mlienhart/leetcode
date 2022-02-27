/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let a = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      a++;
    }
  }

  return a;
};
