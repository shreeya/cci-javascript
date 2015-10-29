//Assume you have a method isSubstring which checks if
//one word is a substring of another. Given two strings, 
//s1 and s2, write code to check if s2 is a rotation of s1 using
//only one call to isSubstring (e.g. 'waterbottle' is a rotation 
//of 'erbottlewat');

function isRotation(s1, s2) {
  var doubleS1 = s1 + s1;
  if (doubleS1.indexOf(s2) !== -1) {
    return true;
  } else {
    return false;
  }
}

console.log(isRotation('erbottlewat', 'waterbottle'));
console.log(isRotation('string', 'array'));
