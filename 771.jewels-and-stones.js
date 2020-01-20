/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let count = 0
  for (let i = 0; i < J.length; i++){
    for (let j = 0; j < S.length; j++){
      if (S[ j ] == J[ i ]) {
        count++
      }
    }
  }
  return count
};
// @lc code=end

