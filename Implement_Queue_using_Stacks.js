/*
Leetcode: https://leetcode.com/problems/implement-queue-using-stacks/
*/

var MyQueue = function() {
  this.firstStack = [];
  this.secondStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.firstStack.push(x);      
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  const size = this.secondStack.length;
  if (size === 0) {
    while (this.firstStack.length > 0) {
      this.secondStack.push(this.firstStack.pop());   
    }
  }
  return this.secondStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  const size = this.secondStack.length;
  if (size === 0) {
    while (this.firstStack.length > 0) {
      this.secondStack.push(this.firstStack.pop());   
    }
  }
  return this.secondStack[this.secondStack.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.firstStack.length === 0 && this.secondStack.length === 0;      
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
