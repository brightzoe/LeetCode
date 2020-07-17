/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  
// @lc code=end


var findMaxConsecutiveOnes = function (nums) {
  var dp = new Array(nums.length); //用dp的最大值来记录最大1的连续个数，连续个数增加，dp中后一个数是前一个数＋1
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 1) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = 0;
    }
  }
  return Math.max(...dp);
};