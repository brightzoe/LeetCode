/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let ary = Array(n)
  for (let i = 0; i < n; i++){
    ary[i] = Array(n)
  }//先创建一个n*n的矩阵结构
  for (let i = 0; i < n; i++){
    ary[1][i] = i + 1
  }
};

// @lc code=end
