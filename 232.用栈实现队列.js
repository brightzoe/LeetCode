/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class MyStack {
	//JS没有栈，先用数组实现一个栈
	constructor() {
		this.stack = [];
	}
	push(x) {
		this.stack.push(x);
	}
	peek() {
		if (this.stack.length !== 0) {
			return this.stack[this.stack.length - 1];
		}
	}
	pop() {
		if (this.stack.length !== 0) {
			return this.stack.pop();
		}
	}
	empty() {
		return this.stack.length === 0;
	}
}
var MyQueue = function () {
	this.stack = new MyStack();
	this.helper = new MyStack();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	//弹出第一个元素
	while (!this.stack.empty()) {
		this.helper.push(this.stack.pop());
	}
	let res = this.helper.pop();
	while (!this.helper.empty()) {
		this.stack.push(this.helper.pop());
	}
	return res;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	while (!this.stack.empty()) {
		this.helper.push(this.stack.pop());
	}
	let res = this.helper.peek();
	while (!this.helper.empty()) {
		this.stack.push(this.helper.pop());
	}
	return res;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	return this.stack.empty();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
