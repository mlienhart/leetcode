/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  return Math.abs(
    nums.reduce((a, b) => a + b, 0) -
      nums
        .join("")
        .split("")
        .reduce((a, b) => +a + +b, 0)
  );
};
