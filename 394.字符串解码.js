/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let res = ''
  let stack = []

  for (let char of s){
    let str = ''//当前正在重复的字母
    let count = ''//当时chong'fu'd
    if (char!==']') {//没到出栈的时候
      stack.push(char)
      continue
    }
    let curr = stack.pop()
    while (curr !== '[') {
      str = curr+str
    }

  }
};
// @lc code=end

