//Given two strings, write a function to determine if the second string is an anagram
//of the first.

//An anagram is a word, phrase, or name formed by rearranging the letters of another,
//such as cinema, formed from iceman.

// Time complexity - O(n)
function validAnagram(stringA, stringB) {
  if (stringA.length != stringB.length) {
    console.log(false);
  } else {
    cleanString(stringA, stringB);
  }
}

function cleanString(stringA, stringB) {
  newStringA = stringA.split("").sort().join("");
  newStringB = stringB.split("").sort().join("");
  if (newStringA === newStringB) {
    console.log(true);
  } else {
    console.log(false);
  }
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
