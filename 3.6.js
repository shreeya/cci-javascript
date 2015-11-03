//Write a program to sort a stack in ascending order (with biggest items on top). You may
//use at most one additional stack to hold items, but you may not copy the elements into
//any other data structure (such as an array). The stack supports the following operations:
//push, pop, peek, and isEmpty.

function sortStack(unsortedStack) {
  var sortedStack = [];
  while (unsortedStack.length > 0) {
    console.log(sortedStack);
    var next = unsortedStack.pop();
    if (sortedStack.length !== 0) {
      while (next < sortedStack[sortedStack.length - 1]) {
        unsortedStack.push(sortedStack.pop());
      }
    }
    sortedStack.push(next);
  }
  console.log(sortedStack);
  return sortedStack;
}
