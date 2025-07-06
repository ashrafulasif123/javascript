/* let a = 8
let b = 10
a = b
b = a
console.log(a, b) // Output: a = 10, b = 10 */
/**
 * RULE 1
 * b এর মান যদি ‍a হতে হয় তাহলে a এর মানে temp এ রাখতে হবে  
 */
/* let a = 8
let b = 10
let temp = a
a = b
b = temp
console.log(a, b) // Output: a = 10, b = 8 */

/**
 * RULE 2
 */
let x = 5;
let y = 10;

[x, y] = [y, x];
console.log(x, y)