//Write a method to replace all spaces in a string with '%20'.
//You may assume that the string has sufficient space at the end of the string
//to hold the additional characters, and that you are given the "true"
//length of the string. 

function replaceSpaces(a) {
  var words = a.split(' ');
  var replaced = words.join('%20');
  return replaced;
}

console.log(replaceSpaces('Mr. John Smith'));
