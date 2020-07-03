/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  if (root.children.length) {
    return 1 + Math.max(...root.children.map(maxDepth))
  } else {
    return 1
  }
}
// @lc code=end
