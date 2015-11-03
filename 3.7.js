//An animal shelter holds only dogs and cats, and operates on a strictly "first in, first out"
//basis. People must adopt either the "oldest" (based on arrival time) of all animals at the
//shelter, or they can select whether they would prefer a dog or a cat (and will receive the 
//oldest animal of that type). They cannot select which specific animal they would like.
//Create the data structures to maintain this system and implement operations such as enqueue,
//dequeueAny, dequeueDog, dequeueCat. You may use the built-in LinkedList data structure.

var ShelterQueue = function() {
  this.queue = [];
}

ShelterQueue.prototype.enqueue = function(animal) {
  this.queue.push(animal);
}

ShelterQueue.prototype.dequeueAny = function() {
  return this.queue.shift();
}

ShelterQueue.prototype.dequeueDog = function() {
  if (this.queue.length === 0) {
    console.log('no animals in the shelter');
    return;
  }
  var nextAnimal = this.queue.shift();
  var holdingQueue = [];
  while (nextAnimal.slice(-3) !== 'dog') {
    holdingQueue.push(nextAnimal);
    if (this.queue.length === 0) {
      console.log('no dogs in the shelter');
      return;
    }
    nextAnimal = this.queue.shift();
  }
  while (holdingQueue.length > 0) {
    this.queue.unshift(holdingQueue.pop());
  }
  return nextAnimal;
}

ShelterQueue.prototype.dequeueCat = function() {
  if (this.queue.length === 0) {
    console.log('no animals in the shelter');
    return;
  }
  var nextAnimal = this.queue.shift();
  var holdingQueue = [];
  while (nextAnimal.slice(-3) !== 'cat') {
    holdingQueue.push(nextAnimal);
    if (this.queue.length === 0) {
      console.log('no cats in the shelter');
      return;
    }
    nextAnimal = this.queue.shift();
  }
  while (holdingQueue.length > 0) {
    this.queue.unshift(holdingQueue.pop());
  }
  return nextAnimal;
}
