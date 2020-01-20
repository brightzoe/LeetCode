/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 *
 * https://leetcode.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (78.28%)
 * Likes:    388
 * Dislikes: 1301
 * Total Accepted:    174.6K
 * Total Submissions: 222.9K
 * Testcase Example:  '"Hello"'
 *
 * Implement function ToLowerCase() that has a string parameter str, and
 * returns the same string in lowercase.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "Hello"
 * Output: "hello"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "here"
 * Output: "here"
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "LOVELY"
 * Output: "lovely"
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  for (let i = 0; i < str.length; i++){
    if (str[ i ].charCodeAt(0) >= 65 && str[ i ].charCodeAt(0) <= 91) {
      str.replace(str[i],String.fromCharCode(i + 32))
    }
  }
  return str
};
debugger;
toLowerCase("HEllo")
// @lc code=end

