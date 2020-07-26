/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 *
 * https://leetcode-cn.com/problems/maximum-product-of-three-numbers/description/


// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  //按414的思路，维护三个最大的数，两个最小的数,最大的数可以相等，最小的数也是
  let min1 = 1001,
    min2 = 1001;
  let max1 = -1001,
    max2 = -1001,
    max3 = -1001;
  for (let num of nums) {
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
		}
		if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }
  }
  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
debugger;maximumProduct([1,2,3])
// @lc code=end

var maximumProduct = function (nums) {
  //三个正数或者两个负数一个正数
  nums.sort((a, b) => a - b);
  var len = nums.length;
  return Math.max(
    nums[0] * nums[1] * nums[len - 1],
    nums[len - 1] * nums[len - 2] * nums[len - 3]
  );
};
