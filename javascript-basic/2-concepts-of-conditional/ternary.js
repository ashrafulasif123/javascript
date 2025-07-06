/**
 * ifelse
 * ternary-> condition ?(if) কি হবে :(else) না হইলে।
 * Nested ifelse
 * ternary-> condition ? condition ? কি হবে : না হইলে : না হইলে। 
 * Nested বা else if ternary এর সময় কোন ব্র্যাকেটের() প্রয়োজন নেই
 */

// EXAMPLE 1
/* let age = 14;

age >= 15 ? console.log('You can visit the website') : age >= 13 ?  console.log('You are eliagible to visit kids website') : console.log('You arent eligiable to visit the website') */

// EXAMPLE 2 
let price = 1400;
const leader = true;
// এই মানটি নিচের কাজ গুলোর জন্য
// Normal ifelse statement


// if(leader === true){
//     price = 0;
// }

// else{
//     price += 100;
// }
// console.log(price)

// SYSTEM-1 Convert EXAMPLE 2 to ternary

 /* leader === true ? console.log(price) : console.log(price) ; */

// SYSTEM-2 Convert EXAMPLE 2 to ternary
/* price = leader == true ? 0 : price + 100;
console.log(price); */

// EXAMPLE 3
// Normal Nested ifelse Statement

/* if(leader === true){
    if(price >= 1000){
        price = price / 2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 100;
}

console.log(price) */
// Nested ifelse
/* leader === true ? price >= 1000 ? price = price / 2 : 0 : price = price + 100;
console.log(price) */

// Nested ifelse & elseif
/* leader === true ? price >= 1000 && price <= 1300 ? price = price / 2 : price >= 1400 ? price = price / 3 : price = 0  : price = price + 100;
console.log(Number(price.toFixed(2))) */


