const numbers = [12, 98, 5, 41, 23, 78, '46'];
for (const number of numbers) {
    if (typeof number === 'number' && number % 2 === 0) {
        console.log(number)
    }
}