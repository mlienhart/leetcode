/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  return date
    .split("-")
    .map((x) => (+x).toString(2))
    .join("-");
};
