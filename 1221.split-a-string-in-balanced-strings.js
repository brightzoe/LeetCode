/*
 * @lc app=leetcode id=1221 lang=javascript
 *
 * [1221] Split a String in Balanced Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let stack = 0
  let result = 0
  for (let i = 0; i < s.length; i++){
    if (s[ i ] == "R") {
      stack++
    } else {
    stack--
      
    }
    if (stack == 0) {
      result++
    }
  }
  return result
};
// @lc code=end

