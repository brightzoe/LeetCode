/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  var i = num1.length - 1
  var j = num2.length - 1
  var carry = 0
  var result = ''
  while (i >= 0 || j >= 0) {
    sum = (num1[ i-- ] | 0) + (num2[ j-- ] | 0) + carry
    //一个精髓的位运算，有值返回它本身。undefined返回0
    var digit = sum % 10
    result = digit + result
    if (sum > 9) {
      carry = 1
    } else {
      carry = 0
    }
  }
  if (carry) {
    return carry +result
  }
  return result

};
// @lc code=end

