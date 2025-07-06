// Example-1
// const subjects = ['HTML', 'CSS', 'Javascript', 'Node', 'Mongodb'];

// console.log(subjects)

// for(i = 0; i < subjects.length; i++){
//     console.log(subjects[i])
// }

// Example-2

// let number;
// while (number !== 7) {
//     number = Math.floor(Math.random() * 10);
//     console.log(number);
// }

// for(let number; number !== 7;){
//     number = Math.floor(Math.random() * 10);
//     console.log(number);
// }


// const numbers = [5, 5, 10, 12]
// let sum = 0;
// let total = 0;
// sum = total;
// // let sum = total;

// for(i = 0; i < numbers.length; i++){
//    total = sum + numbers[i];
//    sum = total;
//    console.log(total)
// }
// console.log('Result summation', total)

// const numbers = [58, 21, 47, 36]
// let sum = 0;

// for(i = 0; i < numbers.length; i++){
//     sum = sum + numbers[i];
//     console.log(sum)
// }
// console.log(sum)

// const numbers = [40, 50, 60, 90]
// let sum = 0;
// for(const num of numbers){
//     sum = sum + num;
// }
// console.log('For of Summation', sum)

// let sum = 52;
// total = sum;

// sum = 65;
// console.log(total)

// While Loop
// const numbers = [2, 2, 3, 5, 540, 795, 579, 969]

/* let sum = 0;
let i = 0;
while(i < numbers.length){
    sum = sum + numbers[i];
    i++
}
console.log(sum) */

/**
 * For Loop Task
 */

// let number = 40;
// while(number <= 80 ){
//     if(number % 5 == 0 && number % 7 == 0 ){
//         console.log('Devided by 5 & 7', number)
//     }
//     number++;
// }

/* let number = 1;
let sum = 0;
while(number <= 40){

    if(number % 13 == 0){
        sum = sum + number;
        console.log(sum)

    }
    else{
        // console.log('Cannot Devide by 13', number)
    }

    number++;
}
console.log('devided by 13 summation', sum)
 */


/* for(number = 1; number <= 50; number = number + 4){
    console.log(number)
} */

/* let sum = 0;
for(number = 1; number <= 50; number++){
    if(number % 3 == 0 && number % 4 == 0){
        sum = sum + number;
        console.log(sum)
    }
}
console.log(sum) */

/*
Prompt for a number each time
Keep adding to the total
Stop when the sum is more t
han 100
Then print the total
*/

/* let number;
let sum = 0;

while (true) {
    number = Math.floor(Math.random() * 10);
    if (sum + number >= 100) {
        break;
    }
    sum = sum + number;
}
console.log(sum) */

/* let number;
let sum = 0;
while (true) {
    number = Math.floor(Math.random() * 10);
    if (sum + number > 100) {
        break
    }
    sum = sum + number;
}
console.log(sum, 'is less than or equel 100') */

// typeof
/* let sum;
let number = 0;
const total = sum + number;
console.log(total) // NaN
console.log(typeof total)// number */








