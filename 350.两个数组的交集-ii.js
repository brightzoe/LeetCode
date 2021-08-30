/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/** 暴力解法，利用数组的方法，indexOf,splice等
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
// 	let min, max;
// 	if (nums1.length <= nums2.length) {
// 		min = nums1;
// 		max = nums2;
// 	} else {
// 		min = nums2;
// 		max = nums1;
// 	}
// 	let res = [];
// 	for (let i = 0; i < min.length; i++) {
// 		let idx = max.indexOf(min[i]);
// 		if (idx !== -1) {
// 			res.push(min[i]);
// 			max.splice(idx, 1);
// 		}
// 	}
// 	return res;
// };

//使用Map 计数，每个值都出现了几次，值：count
//两个map ,在key 相等的时候读取共有几个count
var intersect = function (nums1, nums2) {
	let mapCount1 = createMapCount(nums1);
	let mapCount2 = createMapCount(nums2);
	let res = [];
	for (let key of mapCount1.keys()) {
		let count1 = mapCount1.get(key);
		let count2 = mapCount2.get(key);
		if (count2) {
			const pushCount = Math.min(count2, count1);
			for (let i = 0; i < pushCount; i++) {
				res.push(key);
			}
		}
	}
	return res;
};

function createMapCount(arr) {
	let res = new Map();
	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];
		if (res.has(item)) {
			res.set(item, res.get(item) + 1);
		} else {
			res.set(item, 1);
		}
	}
	return res;
}

// @lc code=end
