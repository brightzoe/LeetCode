/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (!timeSeries.length) {
    return 0;
  }
  let count = duration;
  for (let i = 1; i < timeSeries.length; i++) {
		let diff = timeSeries[i] - timeSeries[i - 1];
		//diff大的话，提前刷新冷却
    count += diff >= duration ? duration : diff;
	}
	return count
};
// @lc code=end
