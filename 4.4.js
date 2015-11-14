//Given a binary tree, design an algorithm which creates a linked list of all
//the nodes at each depth (e.g. if you have a tree with depth D, you'll have D
//linked lists).

var Tree = function(value) {
  this.left;
  this.right;
  this.value = value;
}

var LinkedList = function() {
  this.head;
  this.tail;
}

LinkedList.prototype.append = function(value) {
  var newNode = new llNode(value);
  //if the linked list has no nodes
  if (this.head === undefined) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

var llNode = function(value) {
  this.value = value;
  this.next = undefined;
}

function generateLinkedLists(root) {
  var linkedLists = [];
  var rootLL = new LinkedList();
  rootLL.append(root);
  linkedLists.push(rootLL);
  while(linkedLists[linkedLists.length-1].head !== undefined) {
    var childrensLL = new LinkedList();
    var lastLL = linkedLists[linkedLists.length-1];
    var lastLLPointer = lastLL.head;
    while (lastLLPointer !== undefined) {
      if (lastLLPointer.value.left !== undefined) {
        childrensLL.append(lastLLPointer.value.left);
      }
      if (lastLLPointer.value.right !== undefined) {
        childrensLL.append(lastLLPointer.value.right);
      }
      lastLLPointer = lastLLPointer.next;
    }
    linkedLists.push(childrensLL);
  }
  //remove the last linkedlist, it is empty
  linkedLists.pop();
  return linkedLists;
}

var t = new Tree(1);
t.left = new Tree(2);
t.right = new Tree(3);
t.left.left = new Tree(4);
// t.left.right = new Tree(5);
t.right.left = new Tree(6);
t.right.right = new Tree(7);

console.log(generateLinkedLists(t));

