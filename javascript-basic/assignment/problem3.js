// Problem 3 Solved
function checkDigit(passport) {
    const newArray = []


    if (typeof passport !== 'string') {
        return 'Invalid Input'
    }
    for (const chr of passport) {
        if (chr >= '0' && chr <= '9') {
            // return true
            newArray.push(chr)
           
        }
    }
    
    return newArray.length !== 0 ? newArray : 'There is no number in that string' 
    // if (newArray.length === 0) {
    //     return 'There is no number in that string'
    // }
    // else {
    //     return newArray
    // }

}
const passport = 'hasanhaf78fsandg'
const resultNumber = checkDigit(passport)
console.log(resultNumber)
