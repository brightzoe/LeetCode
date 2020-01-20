/*
 * @lc app=leetcode id=1266 lang=javascript
 *
 * [1266] Minimum Time Visiting All Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  //可以向8个方向，每两个点间移动时间为max(x,y)
  //求每两个点间移动时间，相加
  let sum = 0
  for (let i = 0; i < points.length - 1; i++){
    let pertime = Math.max(Math.abs(points[ i + 1 ][ 0 ] - points[ i ][ 0 ]), Math.abs(points[ i + 1 ][ 1 ] - points[ i ][ 1 ]))
    sum += pertime
  }
  return sum
};
// @lc code=end

