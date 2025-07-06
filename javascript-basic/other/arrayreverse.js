/**
 * RULE 1 Reverse Array
 * numbers & reverse একই মেমোরী তে জায়গা দখল করে
 */
/* 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const reverse = numbers.reverse(); // numbers & reverse একই মেমোরী তে জায়গা দখল করে
for (const number of reverse) {
    console.log(number)
} 
*/
/**
 * RULE 2 Reverse Array(Mannual Reverse)
 * empty array নিতে হবে,
 * => একটি উপায়, for of then unshift
 * => দ্বিতীয় উপায়, incremental then unshift
 * => তৃতীয় উপায়, decremental then push 
 * অর্থাৎ reverse হয়ে যায়
 */
const numbers = [1, 2, 3, 4, 5, 6, 7]
const ref_number = [];
// with for of
for (const num of numbers) {
    // ref_number.unshift(num)
}
// incremental Reverse
for (let i = 0; i < numbers.length; i++) {
    // ref_number.unshift(numbers[i])
}
// Decremental Reverse
for (let i = numbers.length - 1; i >= 0; i--) {
    // ref_number.push(numbers[i])
}

// console.log('Reversed Array', ref_number)
