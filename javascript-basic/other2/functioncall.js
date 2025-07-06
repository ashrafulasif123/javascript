function oddMinusOne(number) {
    const oddNumMinusOne = []
    for (const num of number) {
        if (num % 2 !== 0) {
            const numMinusOne = num - 1
            oddNumMinusOne.push(numMinusOne)
        }
    }
    return oddNumMinusOne
}

function oddNumberFoundOrNot2() {
    return oddMinusOne([16, 99, 75, 35])
}
console.log(oddNumberFoundOrNot2())