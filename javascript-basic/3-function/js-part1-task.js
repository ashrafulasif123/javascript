// # js-problems-part1-practice-tasks

// ### Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// SOLVING Task 1
/**
 * F = (C * 9/5) + 32 //Celcius to farenheight
 */

/* function celToFar(cel) {
    return far = (cel * 9 / 5) + 32
}

const farResult = celToFar(50)
console.log('50f is', farResult, 'C') */


// ### Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input:
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// <br/>

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

// SOLVING TASK 2
/* function count_num(numbers, num) {
    const totalCount = []
    for (const number of numbers) {
        if (number === num) {
            totalCount.push(number)
        }
    }
    return totalCount.length
}
const numbers = [5, 6, 11, 12, 98, 5, 98, 98]

console.log(count_num(numbers, 98)) */

// ### Task-3:
// Write a function to count the number of vowels in a string.

// SOLVING TASK 3
// RULL Myne
function vowelCheck(versity) {
    const versityLower = versity.toLowerCase()
    const totalVowel = [];
    for (const ver of versityLower) {
        if (ver === 'a' || ver === 'e' || ver === 'i' || ver === 'o' || ver === 'u') {
            totalVowel.push(ver)
        }
    }
    return {
        vowel: totalVowel,
        length: totalVowel.length
    }
}
const versity = 'International Islamic University Chittagong'
// console.log(vowelCheck(versity))

// RULE Chatgpt
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
// console.log(vowelCheckHouse(house))

// RULL 3 Without Empty Array && Only Count
function vowelCheckHouse2(versity3) {
    const totalVowel2 = 'aeiouAEIOU'
    let count = 0;
    for (const hs of versity3) {
        if (totalVowel2.includes(hs)) {
            count++;
        }
    }
    return count
}
const versity3 = 'zmndrabbbbbbaaaeeeeeeee'
// console.log(vowelCheckHouse2(versity3))

// ### Task-4:
// Write a function to find the longest word in a given string.
function longestWord(sentence) {
    let longWord = ''
    const sentenceSplit = sentence.split(' ')
    for (let word of sentenceSplit) {
        if (word.length > longWord.length) {
            longWord = word
        }
    }
    return longWord
}
const sentence = 'I have the most poweful pc'
// console.log(longestWord(sentence))
// For Number
function longestNumber(number) {
    let longNumber = number[0]
    for (let num of number) {
        if (num < longNumber) {
            longNumber = num
        }
    }
    return longNumber
}
const number = [4, 8, 30, 20, 2, 6]
console.log(longestNumber(number))

// sample-input:
// I am learning Programming to become a programmer

// sample-output: Programming

// ----
// ### Task-5:
// Generate a random number between 10 to 20.


function generateNumber() {
    let numb;
    // while (numb !== 15) {
    numb = Math.round(Math.random() * (20 - 10)) + 10
    // if (numb === 15) {
    //     break;
    // }
    // console.log(numb)
    // }
}
generateNumber()





