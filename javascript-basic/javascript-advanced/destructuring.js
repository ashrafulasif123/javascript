/**
 * Destructuring
 */
const studentInfo = {
    studentName: 'Jamal Khondokar',
    age: 18,
    phone: 1748547879,
    id: 'c111026'
}
/**
 * Object Destructuring
 * const studentName = studentInfo.studentName
 * const age = studentInfo.age
 * const phone = tudentInfo.phone
 * const id = studentInfo.id
 * এভাবে যাতে না করতে হয়, সেজন্য Destructuring
 */

const { studentName, age, phone, id } = studentInfo
// console.log(studentInfo);



/**
 * key er nam poriborton
 */
const book = { title: "1984", author: "George Orwell" };

const { title: bookTitle, author: bookAuthor } = book;

// console.log(book)
// console.log(bookTitle);
// console.log(bookAuthor);

/**
 * Array Destructuring
 * const first = numbers[0]
 * const second = numbers[1]
 * এভাবে যাতে না করতে
 */
const numbers = [45, 99];
const [first, second] = numbers;
// console.log(first);
// console.log(second);

/**
 * return destructuring
 */
const doubleThem = (a, b) => [a * 2, b * 2]

const [prothom, diteyo] = doubleThem(12, 15)
// console.log('double value', prothom, 'Abong', diteyo)

/**
 * Default Value 
 */
const person = { name: "Amit", age: 25 };
const { name, telephone = "N/A" } = person;

// console.log(name);
// console.log(telephone);
// console.log(person.telephone);

/**
 * Destructuring in PARAMETERE
 * Object
 */

const destObjPara = ({ name, salary }) => { // destructuring in paramenter
    return `This employee ${name} salary is ${salary} money`
}

const employeeInfr = { name: 'Niloy Kumar', age: 32, salary: 25000 }
const resultEemployee = destObjPara(employeeInfr)
// console.log(resultEemployee)

/**
 * Destructuring in PARAMETERE
 * Array
 */

const destArrPara = ([a, b]) => {
    // console.log(a, b)
}


// const resultNumb = destArrPara([4, 5])

/**
 * destructuring করার সময় কোন মান Skip করতে চাইলে,
 */

const destArrPara2 = ([, b]) => { // এখানে 4 skip করা হয়েছে।
    // console.log(b)
}


const resultNumb2 = destArrPara2([4, 5])

// Practise Task
// 3 
const colors = ['red', 'blue', 'green', 'white']
const [, Sagol] = colors
// console.log(Sagol)

// 5
const numb = [78, 50, 45]
const [prothoma, ditio, triteo] = numb
const seconda = ditio;
// console.log(prothoma)

// 6
function functionMultiply(a, b) {
    return [a * 10, b * 50]

}

const [c, d] = functionMultiply(5, 4)
// console.log(c, d)


const numbs = (ages) => {
    const [a, b, c] = ages
    return Math.abs(c - b);
}

const ages = [45, 78, 26]
const resultAges = numbs(ages)
console.log(resultAges)












