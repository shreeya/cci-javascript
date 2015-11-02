//Imagine a literal stack of plates. If the stack gets too high
//it might topple. Therefore, in real life, we would likely 
//start a new stack when the previous stack exceeds some threshold.
//Implement a data structure SetOfStacks that mimics this. SetOfStacks
//should be composed of several stacks and should create a new stack 
//once the previous one exceeds capacity. SetOfStacks.push() and
//SetOfStacks.pop() should behave identically to a single stack
//(that is, pop() should return the same values as it would
//if there were just a single stack.)

//Follow up: Implement a function popAt(int index) which performs
//a pop operation on a spcific sub-stack

var SetOfStacks = function(capacity) {
  this.capacity = capacity;
  this.stacks = [];
  var firstStack = [];
  this.stacks.push(firstStack);
  this.currentStack = firstStack;
}

SetOfStacks.prototype.push = function(value) {
  if (this.currentStack.length < this.capacity) {
    //push onto this stack
    this.currentStack.push(value);
  } else {
    //start a new stack, reassign currentStack pointer
    var newStack = [];
    newStack.push(value);
    this.stacks.push(newStack);
    this.currentStack = newStack;
  }
}

SetOfStacks.prototype.pop = function() {
  var popped = this.currentStack.pop();
  //if currentStack is now empty, remove it and reassign pointer *unless it is the last stack left*
  if (this.currentStack.length === 0) {
    if (this.stacks.length !== 1) {
      this.stacks.pop();
      this.currentStack = this.stacks[this.stacks.length - 1];
    }
  }
  return popped;
}

SetOfStacks.prototype.popAt = function(index) {
  if (index < 0 || index >= this.stacks.length) {
    console.log('no stack exists at this index');
    return;
  }
  return this.stacks[index].pop();
}
