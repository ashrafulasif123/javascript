/**
 * With Return
 */
function add(x, y, z) {
    let sum = x + y + z
    return sum // এইভাবেও দেয়া যায় return x + y + z
}

const summation = add(4, 5, 6);
const summation2 = add(1, 7, 10);
const summation3 = console.log('The result of summation is', add(7, 1, 20));
console.log('The result of summation is', summation)
console.log('The result of summation is', summation2)
// console.log('The result of summation is', summation3)
add(1, 1, 1)
const summation5 = add(1, 1, 1)
console.log(summation5)

/**
 * Without Retrun
 */
function add(x, y, z) {
    let sum = x + y + z
    console.log('The result of summation is', sum)

}

add(4, 5, 6);
add(1, 7, 10);
add(7, 1, 20);
