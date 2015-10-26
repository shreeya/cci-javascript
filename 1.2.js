//Implement a function reverse, which reverses a string

function reverse(string) {
  var reversed = [];
  for (var i = 0; i < string.length; i++) {
    reversed.unshift(string[i]);
  }
  return reversed.join('');
}

console.log(reverse('hello'));
console.log(reverse('h'));
