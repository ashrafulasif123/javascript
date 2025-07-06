/**
 * 1) Access & Value Change RULE
 * Object = {property = key : value, 
 *    property = key : value} *
 * Property Access:
 * -> porperty.name
 * -> property['name']
 * -> property[name] // name is a variable
 * Changing value
 * -> property.name = ...
 * -> property['name'] = ...
 * -> property[name] = ...

 */

// EXAMPLE Acess
const person = {
    name: 'sodor uddain',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandarban', 'saintmartin', 'kuakata']
};

/* 
console.log(person.age) // Type 1
console.log(person['age']); // Type 2
age = 'age'
console.log(person[age]) // Type 3
console.log(person['fav places']); // Type 4
console.log(person['fav places'][2]) 
*/

// EXAMPLE VALUE CHANGE

person.age = 50;
person['age'] = 60;
age = 'age';
person[age] = 70;
person['fav places'] = ['Nitumba', 'Kalkuta']
person['fav places'][1] = 'Sombo bakula'
console.log(person)

const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
/**
 * Show key in array
 */

/* const collegeKey = Object.keys(college)
console.log(collegeKey.includes('class')) // class include or not in college object  */

/**
 * key is found or not in Object
 */

/* if ("unique" in college) {
    // console.log('unique key found in college')
}
else {
    // console.log('unique key not found in college')
} */

// console.log(collegeKey)

/**
 * Delete class key form College object
 */
/* delete college.class
console.log(college) */









