const today = new Date();
// console.log(today)
const date = new Date('2062-10-19')
// console.log(date)
/* console.log(date.getMonth()) // Output: 9, 0 index থেকে শুরু করে
console.log(date.getDay()) // সপ্তাহের কোন বার হিসাব করে, 0 index থেকে শুরু করে
console.log(date.getDate()) // Output: 19, index অনুযায়ী কাজ করে না
console.log(date.getFullYear()) // Output: 2062, index অনুযায়ী কাজ করে না */

const specificDate = new Date(2091, 0, 26)
/* console.log(specificDate) // Output: 2091-01-25T18:00:00.000Z
console.log(specificDate.toLocaleString()) // Output: 1/26/2091, 12:00:00 AM // USA System
console.log(specificDate.toLocaleString('en-CA')) // Output: 2091-01-26, 12:00:00 a.m. // Canada System
console.log(specificDate.toLocaleString('en-GB')) // Output: 26/01/2091, 00:00:00 //  */

const dateLocal = specificDate.getMonth()
console.log(dateLocal)
