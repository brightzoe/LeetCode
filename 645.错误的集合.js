/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

};
// @lc code=end

var findErrorNums = function (nums) {
  //创建一个同等大小的数组，下标0-n-1，值代表每个数出现的次数,类似哈希表。
  let help = Array(nums.length);
  help.fill(0);
  for (let i = 0; i < nums.length; i++) {
    help[nums[i] - 1]++;
  }
  let res = [help.indexOf(2) + 1, help.indexOf(0) + 1];
  return res;
};