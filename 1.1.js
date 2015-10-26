//Implement an algorithm to determine if a string has 
//all unique characters. What if you cannot use additional 
//data structures?

function allUnique(string) {
  var uniques = {};
  for (var i = 0; i < string.length; i++) {
    if (string[i] in uniques) {
      return false;
    } else {
      uniques[string[i]] = true;
    }
  }
  return true;
}

console.log(allUnique("star"));
console.log(allUnique("sister"));
