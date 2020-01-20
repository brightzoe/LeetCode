/*
 * @lc app=leetcode id=1281 lang=javascript
 *
 * [1281] Subtract the Product and Sum of Digits of an Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let s = 1
  let c = 0
  while (n > 0) {
    let digit = n % 10
    n = (n - digit) / 10
    s *= digit
    c += digit
  }
  return s - c
};
// @lc code=end

