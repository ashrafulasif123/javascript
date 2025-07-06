/**
 * inch to feet
 * ধর inchee দেয়া আছে 75, তাহলে Feet কত ?
 * এবং .(দশমিক) এর আগের অংশটি feet এবং পরের অংশটি inch হিসেবে দেখাবে
 */
function feet(inchee) {
    const feet = inchee / 12;
    const feetInteger = parseInt(feet)
    const remainingInch = inchee % 12;
    // console.log(`${inchee} inch is ${feetInteger} feet ${remainingInch} inch`)
    const result = inchee + ' inch is ' + feetInteger + ' feet ' + remainingInch + ' inch'
    return result
}
const inchee = 75;
const result = feet(inchee)
// console.log(result)

/**
 * feet = inch / 12
 * inch = feet * 12
 */

/**
 * feet to inch
 */
/* function inchToFeet(feet) {
    // const feet = inch / 12
    const inch = feet * 12
    return inch
}
console.log(inchToFeet(12)) */

/* function milesToKilometer(miles) {
    const kilometer = miles * 1.61
    console.log(kilometer)
}

const miles = 100;
milesToKilometer(miles) */

// Mile to Goj
function numbers(numb) {
    const mile = numb * 1760;
    return mile
}
const numb = 13
// console.log(numb, 'Mile =', numbers(numb), 'Goj')

// hour to second
function hourToSecond(hourNumb) {
    const hour = hourNumb * 3600;
    return hour
}
const hourNumb = 4;
// console.log(hourNumb, 'hour = ', hourToSecond(hourNumb), 'Second')

// second to hour
function secondToHour(secondNumb) {
    const second = secondNumb / 3600;
    return second
}

const secondNumb = 14400
// console.log(secondNumb, 'second =', secondToHour(secondNumb), 'Hour')

// Sentimiture to Meter
function sentimeterToMeter(sentimeterNumb) {
    const sentemeter = sentimeterNumb / 100
    return sentemeter
}

const sentimeterNumb = 4500
console.log(sentimeterNumb, 'Sentemeter =', sentimeterToMeter(sentimeterNumb), 'Meter')

