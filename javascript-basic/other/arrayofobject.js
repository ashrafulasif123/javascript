const studentInfo = [
    {
        name: 'Md Ashraful Hossain',
        age: 34,
        address: 'Chattogram',
        favouriteColor: ['black', 'red', 'blue'],
        rollNumber: 'C111026'
    },
    {
        name: 'Zahid Molla',
        age: 25,
        address: 'Khulna',
        favouriteColor: ['green', 'yellow', 'red'],
        rollNumber: 'C111027'
    },
    {
        name: 'Ahmed Zaman',
        age: 42,
        address: 'Dhaka',
        favouriteColor: ['violet', 'pink', 'white'],
        rollNumber: 'C111028'
    }
]

/**
 * 1) Array of Object - loop with for index
 */

/* for (let i = 0; i < studentInfo.length; i++) {
    console.log('object loop with for index')
    console.log(studentInfo[i].favouriteColor)
    console.log(studentInfo[i].favouriteColor[2])
} */

/**
 * 2) Array of Object - loop with for of
 */
console.log('object loop with for of')
for (const student of studentInfo) {
    // console.log(student.favouriteColor[2])
    // console.log(student.favouriteColor)
    // console.log(student)
    for (stud in student) {
        console.log(student[stud])
    }
}
