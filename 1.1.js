//Implement an algorithm to determine if a string has 
//all unique characters. What if you cannot use additional 
//data structures?

function allUnique(string) {
  for (var i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) !== -1) {
      return false;
    }
  }
  return true;
}
