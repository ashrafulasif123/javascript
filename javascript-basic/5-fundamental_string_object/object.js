const student = {
    name : 'Md. Amirul Hossain Amit',
    age: 20,
    height: 6.20,
    subjectChoise: ['HRM', 'Management', 'Marketing', 'Hospitalized & Torisum'],
    subjectChoiseNumbering : {
        hrm : 1,
        management: 2,
        marketing: 3,
        hospitalizedAndTourisum : 4
    },
    'fav food' : ['Chicken', 'Mutton', 'Egg']
}
/**
 * Object এর Property গুলোকে কি কি উপায়ে access করতে পারি
 */
/* console.log('Type 1', student.age) // type 1
console.log('Type 2', student['age']) // type 2
const age = student.age;
console.log('Type 3', age) // type 3
const studentAge = 'age';
console.log('Type 4', student[studentAge])
console.log('Type 5', student['fav food']) // type 5 */

/**
 * Value Change
 */

/* // Type 1
student.age = 25;
console.log('Type 1', student.age)
// Type 2
student['age'] = 50;
console.log('Type 2', student['age'])

// Type 3
const studentAge = 'age';
student[studentAge] = 90;
console.log('Type 4', student[studentAge])
console.log(student) */














