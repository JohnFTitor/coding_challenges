
var MyQueue = function() {
    this.firstStack = [];
    this.secondStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (this.secondStack.length !== 0) {
        while (this.secondStack.length > 0) {
            const value = this.secondStack.pop();
            this.firstStack.push(value);
        }
    }
    
    this.firstStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.firstStack.length !== 0) {
        while (this.firstStack.length > 0) {
            const value = this.firstStack.pop();
            this.secondStack.push(value);
        }
    }
    
    return this.secondStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.empty = function() {
    return this.firstStack.length === 0 && this.secondStack.length === 0;
};

MyQueue.prototype.peek = function() {
    if (this.firstStack.length !== 0) {
        while (this.firstStack.length > 0) {
            const value = this.firstStack.pop();
            this.secondStack.push(value);
        }
    }
    
    if (!this.empty()) {
        return this.secondStack[this.secondStack.length - 1];  
    }
    return null;
};

/**
 * @return {boolean}
 */

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */