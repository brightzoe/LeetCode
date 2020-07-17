/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  //O(n)要求一遍遍历
  var a = -Infinity;
  var b = a;
  var c = a;
  //abc是数组里最大的三个数，第一第二第三
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > a) {
      [a, b, c] = [nums[i], a, b];
    } else if (nums[i] > b && nums[i] != a) {
      [b, c] = [nums[i], b];
    } else if (nums[i] > c && nums[i] != a && nums[i] != b) {
      c = nums[i];
    }
  }
  return c == -Infinity ? a : c; //确定第三大的数是否存在
};

// @lc code=end
