
// write a function which takes an string and returns count of each character in string

const charCount = (str) => {
//   create empty object for storing character one by one later  return in console
  let counts = {};

  // loop through the characters from str
  for ( let i = 0; i < str.length; i++) {
    // on every count increment of i we're using i as index and getting value from str and storing it to char variable
    const char = str[i];
    // create condition 1. for empty space to not store in counts obj 2. for checking is current char is available in count obj then add +1 to variable 3. is not available then create a key as char and assign value = 1
    if ( char == " ") {
      // do nothing
    } else if ( counts[char] !== undefined) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }

  return console.log(counts);
};

charCount("Your encrypted user id is @1b2c3d4e5f6#$9");
