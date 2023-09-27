const array = [1, 3, 4, 6, 9];

const getLastEl = array[array.length - 1];

const newArr = [];
let curr = 0;

for (i = 0; i < getLastEl; i++) {
    curr += 1;
    newArr.push(curr);
}

const filter = newArr.filter(i => {
    // console.log(i);
    return !array.includes(i)
})

console.log(filter);