//Given two strings, write a method to decide if one is 
//a permutation of the other

function isPerm(a, b) {
  var sortedA = a.split('').sort();
  var sortedB = b.split('').sort();
  if (sortedA.length !== sortedB.length) {
    return false;
  }
  for (var i = 0; i < sortedA.length; i++) {
    if (sortedA[i] !== sortedB[i]) {
      return false;
    }
  }
  return true;
}

console.log(isPerm('hell', 'lehl'));
console.log(isPerm('he', 'go'));
