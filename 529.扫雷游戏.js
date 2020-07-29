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
  if (board[row][col] == "M") {
    board[row][col] = "X";
    return board;
  }
  Spread(board, row, col);
  return board;
};
function Spread(board, i, j) {
  //如果board[i][j]不是M,执行spread,从i,j扩散多少
  if (HowManyMines(board, i, j) === 0 && board[i][j] === "E") {
    board[i][j] = "B";
    //这一行，这一列，四个方向扩散
    for (let m = j + 1; m < board[0].length; m++) {
      //这一行向右
      board[i][m] === "E" && Spread(board, i, m);
    }
    for (let m = j - 1; m >= 0; m--) {
      //这一行向左
      board[i][m] === "E" && Spread(board, i, m);
    }
    for (let n = i + 1; n < board.length; n++) {
      //这一列向下
      board[n][j] === "E" && Spread(board, n, j);
    }
    for (let n = i - 1; n >= 0; n--) {
      //这一列向上
      board[n][j] === "E" && Spread(board, n, j);
    }
  } else if (board[i][j] !== "M") {
    //不是M,不是空
    board[i][j] = String(HowManyMines(board, i, j)); //周围有雷，显示出数量，在此停止了，不再扩散
  }
}
function HowManyMines(board, i, j) {
  let count = 0;
  for (let m = i - 1; m <= i + 1; m++) {
    for (let n = j - 1; n <= j + 1; n++) {
      if (
        m > 0 &&
        m < board.length &&
        n > 0 &&
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

debugger;

updateBoard(
  [
    ["E", "E", "E", "E", "E"],
    ["E", "E", "M", "E", "E"],
    ["E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E"],
  ],
  [3, 0]
);

// @lc code=end
