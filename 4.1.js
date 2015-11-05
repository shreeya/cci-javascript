//Implement a function to check if a binary tree is balanced. For the purposes of this
//question, a balanced tree is defined to be a tree such that the heights of the
//two subtrees of any node never differ by more than one.

var Tree = function(value) {
  this.value = value;
  this.left;
  this.right;

  return this;
}

Tree.prototype.addLeftChild = function(value) {
  this.left = new Tree(value);
}

Tree.prototype.addRightChild = function(value) {
  this.right = new Tree(value);
}

function isBalanced(tree) {
  if (tree === undefined) {
    return true;
  }
  var leftHeight = checkHeight(tree.left);
  var rightHeight = checkHeight(tree.right);
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  } else {
    return isBalanced(tree.left) && isBalanced(tree.right);
  }
}

function checkHeight(node) {
  if (node === undefined) {
    return 0;
  }

  return 1 + Math.max(checkHeight(node.left), checkHeight(node.right));
}
