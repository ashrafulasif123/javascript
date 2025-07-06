/**
 * RULL 1
 */
function oddNumberFoundOrNot(numbers) {
    const oddNumber = []
    let sum = 0;
    for (const numb of numbers) {
        if (numb % 2 === 1) {
            oddNumber.push(numb)
        }
    }
    if (oddNumber.length > 0) {
        for (const odd of oddNumber) {
            sum = sum + odd
        }
    }
    else {
        return 'No Odd Number Are Found'
    }
    const average = sum / oddNumber.length
    const averageToFixed = parseFloat(average.toFixed(2))
    return averageToFixed

}
// console.log(oddNumberFoundOrNot([15, 45, 10, 35]))

/**
 * RULE 2
 */

function oddNumberFoundOrNot2(numbers) {
    let count = 0
    let sum = 0;
    for (const numb of numbers) {
        numb % 2 === 1 ? (sum = sum + numb, count++) : null
    }
    const average = count === 0 ? 'No Odd Number are found' : parseFloat((sum / count).toFixed(2))
    return average
}
// console.log(oddNumberFoundOrNot2([16, 99, 75, 35]))