/* let number = 50;

while(number <= 100){
    console.log(number)
    number++;
} */

/* let number = 5;
let sum = 0;
while(number <= 15 ){
    sum = sum + number;
    console.log(sum)
    number++;
}
 */

/* const rolNumber = [205, 515, 420, 241, 874, 659, 450, 420]
let sum = 0;
let i = 0;
while(i < rolNumber.length){
    sum = sum + rolNumber[i]
    console.log(sum)
    i++
}
console.log('Total Rollnumber Sumation', sum) */


/* let sum = 0;
for(number = 25; number <=75; number++){
    sum = sum + number;
    console.log(sum)
}
console.log('Total summation', sum) */

// for(let i = 0; i <= 15; i++){
//     console.log(i);

//     if(i >= 7){
//         break;
//     }

// }

// for(let i = 0; i <= 15; i++){

//     console.log(i)
//     if(i == 7){
//         continue;
//     }

// }
// let sum = 0

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     else {
//         if (sum + i > 60) {
//             break;
//         }
//         sum = sum + i;

//     }
// }
// console.log(sum)
// const numbers = [2, 4, 6, 20, 7, 10, 50, 78]

// let i = 0
// while (numbers[i] % 2 == 0) {
//     console.log('Even Numbers', numbers[i])
//     i++
// }
// console.log('Wow i find a Odd number', numbers[i])

const numbers = [2, 4, 6, 20, 9, 10, 17, 50, 78]

// let i = 0
// while (numbers[i] % 2 == 0) {
//     console.log('Even Numbers', numbers[i])
//     i++
// }
// console.log('Wow i find a Odd number', numbers[i])

// continue(While) এর পরে কোন কাজ চলে না, তাই তার আগে i++ দিতে হবে।
/* let i = 0;
while (i < numbers.length) {
    if (numbers[i] % 2 != 0) {
        i++;
        continue;
    }
    console.log('Even Numbers', numbers[i])
    i++;
} */

// continue(for)
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        continue;
    }
    console.log('Even Numbers', numbers[i])
}


// SKIP Whis is devided by 7
/* for (let i = 1; i <= 40; i++) {
    if (i % 7 == 0) {
        continue
    }
    console.log(i)
} */

// SKIP 9
/* for (let i = 0; i <= 20; i++) {
    if (i == 9) {
        continue;
    }
    console.log(i)
} */

// SKIP Whis is not devided by 3
/* for (let i = 1; i <= 40; i++) {
    if (i % 3 != 0) {
        continue
    }
    console.log(i)
} */

// break when ১০ দিয়ে ভাগ যায় এমন সংখ্যা   
/* for (i = 90; i <= 120; i++) {
    if (i % 10 != 0) {
        break
    }
    console.log(i)
}
 */





