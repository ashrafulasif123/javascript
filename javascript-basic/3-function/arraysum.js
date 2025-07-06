/**
 * Array Sum
 */

function summation(numbersSum) {
    let sum = 0;
    for (const num of numbersSum) {
        sum = sum + num
    }
    return sum
}
const numbers = [54, 12, 12, 78, 2]
const sumArray = summation(numbers)
console.log(sumArray)
