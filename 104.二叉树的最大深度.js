/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  //层序遍历,有一层则加一,FIFO,queue
  if (!root) return 0
  var queue = [root]
  var depth = 0
  while (queue.length) {
    var row = []
    while (queue.length) {
      var curNode = queue.shift()
      curNode.left && row.push(curNode.left)
      curNode.right && row.push(curNode.right)
    }
    depth++
    queue = row
  }
  return depth
}
// @lc code=end
