/*
 * @lc app=leetcode.cn id=1299 lang=javascript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
	//*从前向后会做很多重复的比较，从后向前维护一个最大值。从后向前会覆盖当前值，用变量记下来
	//*从arr[len-2]开始，最后一个元素最后再换，不要忘记
	let len = arr.length;
	let max = arr[len - 1]; //初始最大值
	for (let i = len - 2; i >= 0; i--) {
		let temp = arr[i];
		arr[i] = max;
		max = temp > max ? temp : max;
	}
	arr[len - 1] = -1;
	return arr;
};
// @lc code=end
