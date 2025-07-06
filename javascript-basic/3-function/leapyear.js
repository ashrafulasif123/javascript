/**
 * A leapyear is true on not
 */

function leapyear(year) {
    if (year % 100 !== 0) {
        if (year % 4 === 0) {
            return true
        }
        else {
            return false
        }
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true
    }
    else {
        return false
    }
}
const leapYear = leapyear(4005)
console.log(leapYear)

/**
 * Array leapyear
 */

/* function leapyear(years) {
    const leapYears = []
    for (const year of years) {
        if (year % 100 !== 0 && year % 4 === 0) {
            leapYears.push(year)
        }
        else if (year % 100 === 0 && year % 400 === 0) {
            leapYears.push(year)
        }
    }
    return leapYears
}
const leapYears = leapyear([204, 203, 100, 1004])
for (const leapyear of leapYears) {
    console.log(leapyear)
} */