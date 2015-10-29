//Implement a method to perform basic string compression using the counts of
//repeated characters. For example, the string aabcccccaaa would become
//a2b1c5a3. If the "compressed" string would not become smaller than the 
//original string, your method should return the original string. You
//can assume the string has only upper and lower case letters (a-z).

function compressString(input) {
  var compressed = [];
  var current = input[0];
  var count = 1;
  for (var i = 1; i < input.length; i++) {
    if (input[i] === current) {
      count++;
      if (i === input.length - 1) {
        compressed.push(current);
        compressed.push(count);
      }
    } else {
      compressed.push(current);
      compressed.push(count);
      current = input[i];
      count = 1;
    }
  }
  compressedString = compressed.join('');
  if (compressedString.length > input.length) {
    return input;
  } else {
    return compressedString;
  }
}

console.log(compressString('aabcccccaaa'));
console.log(compressString('abcde'));
