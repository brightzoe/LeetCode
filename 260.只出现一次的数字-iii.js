/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let set = new Set();
  for (let num of nums) {
    set.has(num) ? set.delete(num) : set.add(num);
  }
  return Array.from(set);
};
// @lc code=end
