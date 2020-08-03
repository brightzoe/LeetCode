/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length == 0) {
    return;
  }
  if (lists.length == 1) {
    return lists[0];
	}
	if (lists.length == 2) {
		return merge2lists(lists[0], lists[1])
	}
	let mid = lists.length / 2 
	
};
function merge2lists(l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  let head = new ListNode(0);
  let node = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.val = l1;
      l1 = l1.next;
    } else {
      node.val = l2;
      l2 = l2.next;
    }
    node = node.next;
  }
  node.next = l1 ? l1 : l2;
  return head.next;
}
// @lc code=end
