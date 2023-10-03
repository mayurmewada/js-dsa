// write a function called same, accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same

// example and expected output
// same([1, 2, 3], [4, 1, 9]); //true
// same([1, 2, 3], [1, 9]); // false
// same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)

// Define a function called 'same' that takes two arrays as input
const same = (array1, array2) => {
  // Loop through the elements of the first array
  for ( let i = 0; i < array1.length; i++) {
    // Get the current element from the first array
    const curr = array1[i];
    // Calculate the square of the current element
    const sqr = curr ** 2;
    // Find the index of the squared value in the second array
    const idx = array2.indexOf(sqr);

    // If the squared value is found in the second array
    if ( idx > -1) {
      // Remove the squared value from the second array (ensuring frequency matches)
      array2.splice(idx, 1);
    } else {
      // If the squared value is not found in the second array, return false and stop
      return console.log(false);
    }
  }

  // If all elements in the first array have corresponding squared values in the second array,
  // return true
  console.log(true);
};

same([3, 2, 5], [ 25, 9, 4]); // true