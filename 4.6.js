//Write an algorithm to find the 'next' node (i.e., in-order successor) of a given node
//in a binary search tree. You may assume each node has a link to its parent.

//if it doesn't have a right subtree, and it is a left child, then it must be its parent

//if it doesn't have a right subtree, and it is a right child, then it must be its first ancestor that is a left child

//if it does have a right subtree, it must be the left most child of its right subtree

var Tree = function(value) {
  this.parent;
  this.left;
  this.right;
  this.value = value;
}

Tree.prototype.addLeft = function(value) {
  var left = new Tree(value);
  this.left = left;
  left.parent = this;
}

Tree.prototype.addRight = function(value) {
  var right = new Tree(value);
  this.right = right;
  right.parent = this;
}

function findSuccessor(node) {
  if (node.right === undefined) {
    //either it is a left child
    if (node.parent.left === node) {
      return node.parent;
    } else { //or it is a right child
      if ((node.parent.parent === undefined) || (node.parent === undefined)) {
        return null;
      }
      //keep going up until a left child is found
      while (node.parent.parent.left !== node.parent) {
        //if you run out of nodes to go up, there is no successor
        if ((node.parent.parent === undefined) || (node.parent === undefined)) {
          return null;
        }
        node = node.parent;
      }
      return node.parent;
    }
  } else {
    var successor = node.right;
    while (successor.left !== undefined) {
      successor = successor.left;
    }
    return successor;
  }
}

var t = new Tree(11);

t.addLeft(5);

t.addRight(15);

t.left.addLeft(2);

t.left.addRight(8);

t.left.right.addLeft(6);

t.left.right.addRight(9);

console.log(findSuccessor(t.right)); //should be null

console.log(findSuccessor(t.left)); //should be 6

console.log(findSuccessor(t.left.left)); //should be 5

console.log(findSuccessor(t.left.right.right)); //should be 11


