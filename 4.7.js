//Design an algorithm and write code to find the first common ancestor
//of two nodes in a binary tree. Avoid storing additional nodes in a 
//data structure. NOTE: This is not necessarily a binary search tree.

var Tree = function(value) {
  this.left;
  this.right;
  this.value = value;
}

function findCommonAncestor(root, nodeA, nodeB) {
  if (doesPathExist(root.left, nodeA) && doesPathExist(root.left, nodeB)) {
    //they are both on the left side -> look on the left side
    return findCommonAncestor(root.left, nodeA, nodeB);
  } else if (doesPathExist(root.right, nodeA) && doesPathExist(root.right, nodeB)) {
    //they are both on the right side -> look on the right side
    return findCommonAncestor(root.right, nodeA, nodeB);
  } else {
    //they are on opposite sides -> this is the common ancestor
    return root;
  }
}

function doesPathExist(parent, node) {
  if (parent === undefined) {
    return false;
  } else {
    if (parent === node) {
      return true;
    } else {
      return doesPathExist(parent.left, node) || doesPathExist(parent.right, node);
    }
  }
}

var t = new Tree(1);
t.left = new Tree(2);
t.right = new Tree(3);
t.left.left = new Tree(4);
t.left.right = new Tree(5);
t.right.left = new Tree(6);
t.right.right = new Tree(7);

console.log(findCommonAncestor(t, t.left.left, t.right));
