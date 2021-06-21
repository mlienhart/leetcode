/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let a = sentence.split(" ");

    for (i = 0; i < a.length; i++) {
        if (a[i].startsWith(searchWord)) {
            return i + 1;
        }
    }

    return -1;
};