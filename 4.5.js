//Implement a function to check if a binary tree is a binary search tree

var Tree = function(val) {
  this.left;
  this.right;
  this.value = val;
}

function checkBST(root) {
  function checkNodeValidity(node, min, max) {
    if (node === undefined) {
      return true;
    }
    if ((min === undefined) && (node.value > max)) { //checking a left child
      return false;
    } else if ((max === undefined) && (node.value <= min)) { //checking a right child
      return false;
    }
    return checkNodeValidity(node.left, undefined, node.value) && checkNodeValidity(node.right, node.value, undefined);
  }
  //root is always valid, so start with its children
  return checkNodeValidity(root.left, undefined, root.value) && checkNodeValidity(root.right, root.value, undefined);
}

//valid bst
var t = new Tree(6);
t.left = new Tree(3);
t.right = new Tree(8);
t.left.left = new Tree(1);
t.right.left = new Tree(7);
// t.left.right = new Tree(5);
// t.right.left = new Tree(6);
// t.right.right = new Tree(7);

//not a valid bst
var t2 = new Tree(1);
t2.left = new Tree(2);
t2.right = new Tree(3);
t2.left.left = new Tree(4);
t2.left.right = new Tree(5);
t2.right.left = new Tree(6);
t2.right.right = new Tree(7);

console.log(checkBST(t));

console.log(checkBST(t2));
