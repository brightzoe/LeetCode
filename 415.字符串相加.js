/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let idx1 = num1.length - 1;
  let idx2 = num2.length - 1;
  let res = "";
  let curry = 0;
  while (idx1 >= 0 || idx2 >= 0) {
    let digit = (num1[idx1] | 0) + (num2[idx2] | 0)+curry;
    res = (digit) % 10  + res;
    if (digit > 9) {
      curry = 1;
    } else {
      curry = 0;
    }
    idx1--;
    idx2--;
  }
  if (curry) {
    return curry + res;
  } else {
    return res;
  }
};

// @lc code=end
