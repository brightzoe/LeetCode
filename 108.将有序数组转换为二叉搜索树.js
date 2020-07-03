/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length) {
    var midIdx = Math.floor(nums.length /2)
    var root = new TreeNode(nums[midIdx])
    root.left = sortedArrayToBST(nums.slice(0,midIdx))
    root.right = sortedArrayToBST(nums.slice(1+midIdx))
    return root
  }
};
// @lc code=end

