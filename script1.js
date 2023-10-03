

const array = [1, 3, 4, 6, 9];

// Get the last element of the input array.
const getLastEl = array[array.length - 1];

const newArr = [];
let curr = 0;

// Loop from 0 to the last element of the input array.
for (i = 0; i < getLastEl; i++) {
    // Increment the current value
    curr += 1;
    // Push the current value to the newArr array.
    newArr.push(curr);
}

const filter = newArr.filter(i => {
    // Use the elements from newArr that are NOT present in the input array.
    return !array.includes(i)
})

// Log the filter array
console.log(filter);