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
    let count = ''//当时重复的次数
    if (char!==']') {//没到出栈的时候,全入栈
      stack.push(char)
      continue
    }

    let curr = stack.pop()
    while (curr !== '[') {
      str = curr + str//保证当前重复字母的顺序
      curr = stack.pop()//接着出栈
    }
    //curr为'['
    curr = stack.pop()//数字
    while (!isNaN(curr)) {
      count = curr + count//数字字符在左边拼接
      curr = stack.pop()
    }
    stack.push(curr)
    stack.push(str.repeat(count))
  }
  return stack.join('')
};
// @lc code=end

