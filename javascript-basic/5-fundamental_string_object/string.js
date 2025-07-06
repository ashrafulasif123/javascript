let str = `Ahmed`
// console.log(str[2])
// console.log(str.length)

let book = 'Physics'
// console.log(book.toUpperCase())

// string slice
const name = 'Jahangir alim'
const sliceName = name.slice(0, 5)
// console.log(sliceName)

// string split
const address = '1240/6 Fahim Manjil, TMSS Road, West Kazipara, Mirpur, Dhaka';
const addressSplit = address.split(',')
// console.log(addressSplit)
// THEN
// string join
const addressJoin = addressSplit.join('-')
// console.log(addressJoin)

// string concat
const first = 'Md Ashraful Hossain';
const last = 'Asif'
console.log(first)
console.log(last)
// rull 1 concat
// const fullName = first + ',' + last;
// rull 2 concat
const fullName = first.concat(' ').concat(last);
// console.log(fullName) 

const power = 'Dr Younus';
const powerIncludes = power.includes(' y');
// console.log(powerIncludes)



