/**
 * string কে দুটি উপায়ে reverse করা যায়,
 * একটি ‍string কে array আকারে(split এর মাধ্যমে) নিয়ে, index ব্যবহার করে reverse করা যায়
 * আর split ছাড়াও করা যায়
 * Example: best of luck
 * input: best of luck
 * output: kcul fo tseb
 * EXAMPLE: BELOW
 */
// With split//
/* const para = 'best of luck';
const summation = para.split(''); // যদি প্রতিটি letter কে একটি index(Array) আকারে নিতে হয়।
console.log(summation)
let sum = '';
for (let i = summation.length - 1; i >= 0; i--) {
    sum = sum + summation[i]
}
console.log(sum) */

//Without split//
/* const para2 = 'best of luck';
let sum2 = '';
for (let i2 = para2.length - 1; i2 >= 0; i2--) {
    sum2 = sum2 + para2[i2]
}
console.log(sum2) */

/**
 * যেটা split ছাড়া হবে না
 * input: best of luck
 * output: luck of best
 * Example: BELOW
 */

/* const wish = 'best of luck';
const wishSplit = wish.split(' '); // এখানে একটি space আছে।

let reversed = '';
for (let i = wishSplit.length - 1; i >= 0; i--) {

    reversed = reversed + wishSplit[i];
    if (i != 0) {
        reversed = reversed + ' ';
    }
    // reversed = reversed + wishSplit[i];

}
console.log(reversed) */

/**
 => string reversing and space হবে না last string এ(with ternary method)
 */
/* const wish = 'best of luck';
const wishSplit = wish.split(' '); // এখানে একটি space আছে।

let reversed = '';
for (let i = wishSplit.length - 1; i >= 0; i--) {
    reversed = reversed + (i === wishSplit.length - 1 ? '' : ' ') + wishSplit[i];
}
console.log(reversed)
 */






