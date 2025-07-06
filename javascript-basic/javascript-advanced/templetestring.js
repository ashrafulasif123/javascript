const a = 52
const b = 10

// const result = 'The value is ' + a + ' and ' + b + '. The summation is ' + (a + b) + ' total.';
const result = `The value is ${a} and ${b}. The summation is ${a + b} total `;
// console.log(result);

/**
 * function call যোগ করা
 */

// RULE 1
const getName = () => 'Shourav'
const resultName = `ok i will give you the ${getName()}`
// console.log(resultName)

// RULE 2
const fathersName = (name) => `My father name is ${name}`

const name = 'Md Ismail Hossain Sumon';
const resultFatherName = fathersName(name)
// console.log(resultFatherName)

/**
 * শর্ত যোগ করা
 */

/**
 * WITH BACKTICK
 */
const adultMinor = (age) => `You are  ${age >= 18 ? 'Adult' : 'Minor'} Person`

/**
 * WITHOUT BACKTICK
 */
const adultMinor2 = (age2) => 'You are ' + (age2 >= 18 ? 'Adult' : 'Minor') + ' Person'


const age = 14
const age2 = 25
const resultAdultMinor = adultMinor(age)
const resultAdultMinor2 = adultMinor2(age2)
// console.log(resultAdultMinor)
// console.log(resultAdultMinor2)

/**
 * String Object property যোগ করা
 */

const objectCondition = (student) => {
    const info = `The student name is ${student.studentName} and her age is ${student.age}`
    return info
}

const student = { studentName: 'Masud Kamal', age: 18 }
const resultObjecCondition = objectCondition(student)
// console.log(resultObjecCondition)

/**
 * Array এর সাথে কাজ
 */
const fruitsSweet = (fruits) => {
    const single = `My favroutie fruit is ${fruits[1]}`
    const plural = `My favourite fruits are ${fruits.join(', ')}`
    // return { fruit: single, fruits: plural } // result in Object
    return [single, plural] // result in Array
}

const fruits = ['Apple', 'Mango', 'Pinaple']
const resultFruits = fruitsSweet(fruits)
// console.log(resultFruits[1])

/**
 * Template String দিয়ে HTML তৈরী করা 
 */

const html = (title, body) => {
    const html = `<div>
        <h1>${title}</h1>
        <p>${body}</p>
    </div>`

    return html
}


const title = 'Welcome';
const body = 'This is a dynamic Template'
const resultHtml = html(title, body)
// console.log(resultHtml)
/**
 * হিসাব
 */

const hishabTemplate = () => {
    const total = num1 + num2
    const result = `The round number is ${parseFloat(total.toFixed(2))}`
    return result
}

num1 = 45.56
num2 = 152.487
const resultHishab = hishabTemplate(num1, num2)
// console.log(resultHishab)

/**
 * Practise 
*/

// 1
const minus = (num1, num2) => Math.abs(num1 - num2)
const resultMinus = minus(32, 52)
// console.log(resultMinus)

// 2
const employeeInfo = () => `Employee name is ${employee.name} age is ${employee.age}. His salary is ${employee.salary}`



const employee = {
    name: 'Masud Kamal',
    age: 25,
    salary: 25000
}
const resultEmployeeInfo = employeeInfo()
// console.log(resultEmployeeInfo)

// 3
const fruite = (fruits) => fruits[3]

const resultFavouriteFruit = `My favrout food is ${fruite(['Apple', 'Jackfruit', 'Mango', 'Strawbery'])}`
// console.log(resultFavouriteFruit)

// 4 and Last
const exam = (studentInfo) => {
    const studentName = studentInfo.studentName;
    let resultSum = 0
    for (const mark of studentInfo.results) {
        resultSum = resultSum + mark
    }

    const totalSubject = studentInfo.results.length
    const averageResult = resultSum / totalSubject
    return `Student name is ${studentName} his average mark is ${Math.round(averageResult)}`
}


const studentInfo = { studentName: 'Jashim Uddin', age: 20, results: [87, 99, 59] }
const resultExam = exam(studentInfo)
console.log(resultExam)




