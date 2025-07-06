/**
 * Create function that will return only the even numbers
 */
function even(numbers) {
    const evenNumbers = []
    for (const num of numbers) {
        if (num % 2 === 0) {
            evenNumbers.push(num)
        }
    }
    return evenNumbers
}

const numbers = [4, 5, 7, 9, 12, 10]
// console.log(even(numbers))

/**
 * Return the sum of even numbers
 */
function evenSum(ages) {
    let sum = 0;
    for (const age of ages) {
        if (age % 2 === 0) {
            sum = sum + age

        }
    }
    return sum
}
const ages = [2, 4, 7, 6, 11, 2]
const evenSumResult = evenSum(ages)
console.log(evenSumResult)

/**
 * retrun object for even and odd number 
 */

/* function evenOrOdd(evenandodd) {
    const evennumbers = []
    const oddnumbers = []
    for (const evodd of evenandodd) {
        if (evodd % 2 === 0) {
            evennumbers.push(evodd)
        }
        else {
            oddnumbers.push(evodd)
        }
    }
    return {
        even: evennumbers,
        odd: oddnumbers
    };


}

const evenandodd = [1, 2, 3, 4, 5, 6]
const evenOdd = evenOrOdd(evenandodd)
const evenOnly = evenOdd.even
const oddOnly = evenOdd.odd
for (const even of evenOnly) {
    console.log(even)
}
for (const odd of oddOnly) {
    console.log(odd)
} */

/**
 * retrun without object for even and odd number 
 */

/* function evenOrOdd(evenandodd) {
    const evennumbers = []
    const oddnumbers = []
    for (const evodd of evenandodd) {
        if (evodd % 2 === 0) {
            evennumbers.push(evodd)
        }
        else {
            oddnumbers.push(evodd)
        }
    }
    // Even Number
    console.log('even numbers are')
    for (const evennumber of evennumbers) {
        console.log(evennumber)
    }

    // Odd Number
    console.log('Odd numbers are')
    for (const oddnumber of oddnumbers) {
        console.log(oddnumber)
    }

}

const evenandodd = [1, 2, 3, 4, 5, 6]
const evenOdd = evenOrOdd(evenandodd) */
