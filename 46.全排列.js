/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const res = [];
	const used = {};
	dfs([])

	function dfs(path) {
		if (path.length === nums.length) {
			//这一种情况结束了
			res.push(path.slice());
			return;
		}
		for (let num of nums) {
			if (!used[num]) {
				path.push(num);
				used[num] = true;
				dfs(path);
				path.pop();//回到之前状态
				used[num]=false
			}
		}
	}
		return res;

};
// @lc code=end
