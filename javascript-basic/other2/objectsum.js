function numbersSum(numbers) {

    let sum = 0;
    for (const number in numbers) {
        const value = numbers[number]
        sum = sum + value
    }
    return sum
}
const numbers = { a: 10, b: 20, c: 31, d: 40 }
console.log(numbersSum(numbers))