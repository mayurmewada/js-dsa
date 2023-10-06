// "Write a function which accepts two array called validAnagram to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed as iceman.";

// Define a function called validAnagram that takes two arrays as input arguments.
const validAnagram = (arr1, arr2) => {
  // Check if the lengths of the two arrays are not equal.
  if ( arr1.length !== arr2.length) {
    // If they are not equal, return false, indicating that arr2 is not an anagram of arr1.
    return console.log(false);
  }
  // Create an empty array called stringToArr to store arr2 elements.
  let stringToArr = [];
  // Copy elements from arr2 to stringToArr.
  for ( let j = 0; j < arr2.length; j++) {
    stringToArr[j] = arr2[j];
  }
  // Iterate through each element in arr1.
  for ( let i = 0; i < arr1.length; i++) {
    // Get the current letter from arr1.
    const currLetter = arr1[i];
    // Find the index of the current letter in stringToArr.
    const findIdx = stringToArr.indexOf(currLetter);
    // If the index is greater than -1 (i.e., the letter is found in stringToArr):
    if ( findIdx > -1) {
      // Remove the letter from stringToArr using splice.
      stringToArr.splice(findIdx, 1);
    } else {
      // If the letter is not found in stringToArr, return false, as it's not an anagram.
      return console.log(false);
    }
  }
  // If we have iterated through all letters in arr1 without returning false, then arr2 is an anagram of arr1.
  // Return true to indicate that arr2 is a valid anagram.
  return console.log(true);
};

validAnagram("", ""); // true
validAnagram("aiaz", "ziza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
