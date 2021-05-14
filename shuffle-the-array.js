/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let a = [];

    for (i = 0; i < n; i++) {
        a.push(nums[i]);
        a.push(nums[i + n]);
    }

    return a;
};