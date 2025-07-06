/* array function */

// Example 1
const numbers = (ages) => ages[1]
const age = [54, 87, 45]
const resultFistIndex = numbers(age)
// console.log(resultFistIndex)

// Example 2
const numbersSum = (num1, num2, num3) => num1 + num2 + num3
const resultSum = numbersSum(25, 48, 14)
// console.log(resultSum)

// Example 3
const getName = () => "Unknown";

// console.log(getName()); 
// Example 4
const quotient = (numQ) => (numQ.num1 + numQ.num2) / 5

const numQ = {
    num1: 50,
    num2: 50
}
const resultQuotient = quotient(numQ)
// console.log(resultQuotient);

// Example 5 Last Index

const lastIndex = (numbers) => {
    const lastIndex = numbers.length - 1
    return numbers[0] + numbers[lastIndex]
}

const numbers2 = [48, 89, 78]
const resultLastIndex = lastIndex(numbers2)
// console.log(resultLastIndex)

// Example 6 Default Value

const defaultValue = (x = 10, y = 5) => x + y
console.log(defaultValue())
console.log(defaultValue(150, 50))






