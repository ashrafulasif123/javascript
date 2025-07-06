// Use a for...of loop to concatenate all the elements of an array into a single string.
const cats = ['Tom', 'Tim', 'Tin', 'Tik']

let sentence = '';
for (const cat of cats) {
    sentence = cat + sentence
}
// console.log(sentence)

// Task 4 (Hard) Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person'

// RULE 1
/* const spiltStatement = statement.split(' ')
const statementReverse = spiltStatement.reverse()

let make = '';
for (let i = 0; i < statementReverse.length; i++) {
    make = make + (i === 0 ? '' : ' ') + statementReverse[i];
}
console.log(make) */

// RULE 2

/* const sentenceReverse = statement.split(' ').reverse().join(' ');
console.log(sentenceReverse) */

