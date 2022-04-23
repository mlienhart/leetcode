/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let a = [...nums].sort((a, b) => a - b);
  let b = [...nums].sort((a, b) => b - a);
  let c = a[0];
  let d = b[0];

  for (let i = c; i >= 0; i--) {
    if (c % i === 0 && d % i === 0) {
      return i;
    }
  }
};
