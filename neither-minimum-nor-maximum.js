/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  return nums.length > 2 ? nums.sort((a, b) => a - b)[1] : -1;
};
