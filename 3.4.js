//In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes
//which can slide onto any tower. The puzzle starts with disks sorted in ascending order
//of size from top to bottom (i.e., each disk sits on top of an even larger one).
//You have the following constraints:
//(1) Only one disk can be moved at a time.
//(2) A disk is slid off the top of one tower onto the next tower.
//(3) A disk can only be placed on top of a larger disk.

//Write a program to move the disks from the first tower to the last using stacks.

function towersOfHanoi(n, tower1, tower2, tower3) {
  if (n <= 0) {
    return;
  }

  //move top n-1 disks from tower1 to tower2 using tower3 as a buffer
  towersOfHanoi(n-1, tower1, tower3, tower2);

  //move nth disk to tower 3
  tower3.push(tower1.pop());

  //move n-1 disks from tower2 to tower3, using tower1 as a buffer
  towersOfHanoi(n-1, tower2, tower1, tower3);
}
