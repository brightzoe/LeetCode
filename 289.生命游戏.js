/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
	//创建了新数组，没有在原地修改，比较笨拙
  let row = board.length;
  let col = board[0].length;
  let res = new Array(row).fill(0).map((_) => new Array(col).fill(0)); //先全部置0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let count = countSurrounding(board, i, j); //周围有几个活的1
      if (board[i][j] === 0 && count === 3) {
        res[i][j] = 1;
      } else if (board[i][j] === 1 && (count === 2 || count === 3)) {
        res[i][j] = 1;
      }
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      board[i][j] = res[i][j];
    }
  }
  return board;
};

function countSurrounding(board, i, j) {
  let count = 0;
  for (let m = i - 1; m <= i + 1; m++) {
    for (let n = j - 1; n <= j + 1; n++) {
      if (
        m >= 0 &&
        m <= board.length - 1 &&
        n >= 0 &&
        n <= board[0].length - 1 &&
        !(m === i && n === j)
      ) {
        count += board[m][n];
      }
    }
  }
  return count;
}

// @lc code=end
