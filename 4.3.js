//Given a sorted (increasing order) array with unique integer elements, 
//write an algorithm to create a binary search tree with minimal height.

//e.g. [1, 2, 3, 4, 5, 6, 7] ->    4
                          //     /   \
                          //   2      6
                          //  / \    / \
                          // 1  3   5   7

var Tree = function(x) {
  this.left;
  this.right;
  this.value = x;
}

function arrayToBst(a) {
  function createTree(a, start, end) {
    if (end < start) {
      return undefined;
    }
    var middle = Math.floor((start+end)/2);
    var node = new Tree(a[middle]);
    node.left = createTree(a, start, middle-1);
    node.right = createTree(a, middle+1, end);
    return node;
  }
  return createTree(a, 0, a.length-1);
}

console.log(arrayToBst([1, 2, 3, 4, 5, 6, 7]));
console.log(arrayToBst([1, 2, 3, 4, 5, 6]));
