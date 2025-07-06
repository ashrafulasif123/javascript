/**
 * Object key/Propepry Name আছে কিনা তা check করা
 */
const studentInfo = {
    id: 'c111026',
    name: 'Md Ashraful Hossain',
    age: 34,
    house: 'bonde ali road, west kazipara'
}

/**
 * RULL 1
 */
const studentInfoObject = Object.keys(studentInfo)
const studentAge = studentInfoObject.includes('age')
console.log(studentAge)

/**
 * RULL 2
 */
if ('ages' in studentInfo) {
    // console.log('age exist')
}
else {

    // console.log('age is not exist')
}

