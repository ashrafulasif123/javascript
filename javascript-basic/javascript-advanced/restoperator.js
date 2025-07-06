
/* * rest হচ্ছে ‍array বা object এর এক বা একাধিক উপাদান বা property কে আলাদা করে বাকি গুলোকে array বা Object হিসেবে রাখা
*/

// Example 1 For Object
// const product = { name: 'Laptop', price: '50000', brand: 'dell' }
const { name, ...others } = { name: 'Laptop', price: '50000', brand: 'dell' }
// const { name, ...others } = product
// console.log(name)
// console.log(others)

// Example 2 For Array 
const [first, second, ...rest] = [10, 20, 30, 40, 50];
// console.log(first);
// console.log(second);
// console.log(rest);

// Example 3 rest summation argument as array
function turnPlus(numbers) {
    const [first, second, ...details] = numbers
    const found = [...details];

    let sum = 0;
    for (const num of found) {
        sum = sum + num
    }
    return sum
}

const resultRestSumArray = turnPlus([6, 5, 45, 90, 34])
// console.log(resultRestSumArray)


// Example 3 rest summation argument as many argument
function turnPlus(a, b, ...others) {
    let sum = 0;
    for (const num of others) {
        sum += num;
    }
    return sum;
}

const resultRestSumArgument = turnPlus(6, 5, 45, 90, 34);
// console.log(resultRestSumArgument);

// Example 4 একটি function এ সব প্যারামিটার গুলো একটি array তে রেখে তারপর আর্গুমেন্টগুলো যোগ করে, গড় রিটার্ন করবে।
const restAllParameter = (...numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number
    }
    return sum / numbers.length
}

const results = restAllParameter(10, 20, 30, 40)
// console.log(results)



