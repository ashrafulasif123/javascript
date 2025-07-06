// You are given an array of numbers. Count how many times the a number is repeated in the array.
function removeDuplicate(numbers) {
    const uniqueNumber = [];
    for (const numb of numbers) {
        if (uniqueNumber.includes(numb) === false) {
            uniqueNumber.push(numb)
        }
    }
    return uniqueNumber
}
const numbers = [9, 0, 12, 9, 12, 52, 10, 9];
// console.log(removeDuplicate(numbers))

// You are given an array of numbers. Count how many times the numbers is repeated show in object.
function repeatedNumberCount(marks) {
    const repeteadNumber = {}
    for (const mark of marks) {
        if (repeteadNumber[mark]) {
            repeteadNumber[mark] += 1
        }
        else {
            repeteadNumber[mark] = 1
        }
    }
    return repeteadNumber
}
const mark = [9, 12, 9, 12, 52, 10, 9, 0];
// console.log(repeatedNumberCount(mark))
// how many vowel are found
function vowelCheckHouse(house) {
    const totalVowel2 = 'aeiouAEIOU'
    const vowel2 = [];
    for (const hs of house) {
        if (totalVowel2.includes(hs)) {
            vowel2.push(hs)
        }
    }
    return {
        vowel2: vowel2,
        lengthVowel: vowel2.length
    }
}
const house = 'International Islamic University Chittagong'
console.log(vowelCheckHouse(house))

// Task 1 কতগুলা ‍a আছে
