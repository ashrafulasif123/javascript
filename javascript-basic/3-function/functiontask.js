// Task 2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function number(num) {
    if (num % 2 !== 0) {
        return num * 2;
    }
    return num / 2
}
// console.log(number(2))

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(num) {
    const numLength = num.length;
    let sum = 0;
    for (let i = 0; i < numLength; i++) {
        sum = sum + num[i]
    }
    return sum / numLength
}

const run = [2, 202, 12, 54]
// console.log(make_avg(run))

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

/**
 * RULE 1 With count++ find total '0'
 */
/* function zero_string(binaryString) {
    let count = 0;
    for (const bString of binaryString) {
        if (bString === '0') {
            count = count + 1
        }
    }
    return count
}
console.log(zero_string('000000011')) */

/**
 * RULE 2 With summation to find total '0'
 */
/* function zero_string(binaryString) {
    let sum = '';
    for (const bString of binaryString) {
        if (bString === '0') {
            sum = sum + bString
        }
    }
    return sum.length
}
console.log(zero_string('00011')) */


/**
 * RULE 3 With push to find total '0'
 */
/* function zero_string(binaryString) {
    let sum = [];
    for (const bString of binaryString) {
        if (bString === '0') {
            sum.push(bString)
        }
    }
    return sum.length
}

const binaryString0 = '0000000000011'
console.log(zero_string(binaryString0)) */
