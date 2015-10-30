//How would you design a stack which, in addition to push and pop, 
//also has a function min which returns the minimum element?
//Push, pop, and min should all operate in O(1) time.

var Stack = function() {
  this.storage = [];
  this.mins = [];
};

Stack.prototype.push = function(value) {
  this.storage.push(value);
  if ((this.mins.length === 0) || (value < this.mins[this.mins.length - 1])) {
    this.mins.push(value);
  }
}

Stack.prototype.pop = function() {
  if (this.storage.length === 0) {
    console.log('stack is empty');
    return;
  }
  var popped = this.storage.pop();
  if (popped === this.mins[this.mins.length - 1]) {
    this.mins.pop();
  }
  return popped;
}

Stack.prototype.min = function() {
  if (this.mins.length === 0) {
    console.log('stack is empty');
    return;
  }
  return this.mins[this.mins.length - 1];
}


