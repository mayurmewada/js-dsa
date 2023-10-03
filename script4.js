// Write a function to find the maximum element in an array of integers

// [3, 7, 1, 9, 5] // 9

const largestInt = (param) => {
    let num = 0
    for (let i=0; i < param.length; i++) {
        if (num < param[i]) {
            num = param[i]
        }
    }
    console.log(num);
}

largestInt([3, 7, 1, 25, 9, 5])