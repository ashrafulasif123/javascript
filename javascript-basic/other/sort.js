/**
 *এ বিষয়ে অনেক কিছু বুঝানো হয় নি, যা পরবর্তীতে বুঝানো হবে। 
 */

const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib'];
const sortedPersons = persons.sort();

const numbers = [5, 4, 25, 13, 10, 2, 9, 1];
/* const numbers_asc = numbers.sort(function (a, b) { return a - b })
const numbers_dsc = numbers.sort(function (a, b) { return b - a }) */
const numbers_asc = [...numbers].sort(function (a, b) { return a - b })
const numbers_dsc = [...numbers].sort(function (a, b) { return b - a })
console.log(numbers_asc);
console.log(numbers_dsc);



