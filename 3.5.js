//Implement a MyQueue class which implements a queue using two stacks.

var Queue = function() {
  this.stack1 = [];
  this.stack2 = [];
}

Queue.prototype.enqueue = function(value) {
  this.stack1.push(value);
}

Queue.prototype.dequeue = function() {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
}
