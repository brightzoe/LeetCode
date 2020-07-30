/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  let row = click[0];
  let col = click[1];
  if (board[row][col] === "M") {
    board[row][col] = "X";
    return board;
  }
  Spread(board, row, col);
  return board;
};
function Spread(board, i, j) {
  //如果board[i][j]在范围内，而且是E 才执行spread,从i,j扩散多少
  let flag =
    i >= 0 &&
    j >= 0 &&
    i < board.length &&
    j < board[0].length &&
    board[i][j] === "E"
      ? 1
      : 0;
  if (flag) {
    if (HowManyMines(board, i, j) !== 0) {
      board[i][j] = String(HowManyMines(board, i, j)); //周围有雷，显示出数量，在此停止了，不再扩散
    } else {
      //周边是空，改他自己
      board[i][j] = "B";
      //这一行，这一列，加对角线八个方向扩散
      for (let m = j + 1; m < board[0].length; m++) {
        //这一行向右
        Spread(board, i, m);
        if (HowManyMines(board, i, m) !== 0) {
          //这个很重要，如果不是空，在这一步，不能向该行或该列再扩散了。
          break;
        }
      }
      for (let m = j - 1; m >= 0; m--) {
        //这一行向左
        Spread(board, i, m);
        if (HowManyMines(board, i, m) !== 0) {
          break;
        }
      }
      for (let n = i + 1; n < board.length; n++) {
        //这一列向下
        Spread(board, n, j);
        if (HowManyMines(board, n, j) !== 0) {
          break;
        }
      }
      for (let n = i - 1; n >= 0; n--) {
        //这一列向上
        Spread(board, n, j);
        if (HowManyMines(board, n, j) !== 0) {
          break;
        }
      }
      for (let n = i - 1, m = j - 1; n >= 0, m >= 0; n--, i--) {
        Spread(board, n, m);
        if (HowManyMines(board, n, m) !== 0) {
          break;
        }
      }
      for (let n = i - 1, m = j + 1; n >= 0, m < board[0].length; n--, m++) {
        Spread(board, n, m);
        if (HowManyMines(board, n, m) !== 0) {
          break;
        }
      }
      for (let n = i + 1, m = j - 1; n < board.length, m >= 0; n++, m--) {
        Spread(board, n, m);
        if (HowManyMines(board, n, m) !== 0) {
          break;
        }
      }
      for (
        let n = i + 1, m = j + 1;
        n < board.length, m < board[0].length;
        n++, m++
      ) {
        Spread(board, n, m);
        if (HowManyMines(board, n, m) !== 0) {
          break;
        }
      }
    }
  }
}
function HowManyMines(board, i, j) {
  let count = 0;
  for (let m = i - 1; m <= i + 1; m++) {
    for (let n = j - 1; n <= j + 1; n++) {
      if (
        m >= 0 &&
        m < board.length &&
        n >= 0 &&
        n < board[0].length &&
        !(m === i && n === j) &&
        board[m][n] === "M"
      ) {
        count++;
      }
    }
  }
  return count;
}
let a = updateBoard(
  [
    ["E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "M"],
    ["E", "E", "M", "E", "E", "E", "E", "E"],
    ["M", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "M", "M", "E", "E", "E", "E"],
  ],
  [0, 0]
);
console.log(a);
// @lc code=end
