const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'Higher'
        }
    }
}

// RULL 1-Object এর value Access
/**
 * Object.keys ব্যবহার করে key গুলাকে array তে নেয়া
 * তারপার for of এর মাধ্যমে key গুলাকে variable এর মাধ্যে নেয়া
 * তারপর Object[variable] বসিয়ে key এর value কে Access করা
 */

/* const collegeKey = Object.keys(college)
for (const collegevalue of collegeKey) {
    console.log(college[collegevalue])
} */


// RULL 2-Object এর value Access
/**
 * for in এর মাধ্যমে key গুলাকে variable এর মাধ্যে নেয়া
 * তারপর Object[variable] বসিয়ে key এর value কে Access করা
 */


/* for (const collegeKey in college) {
    console.log(college[collegeKey])
} */

// Task- Loop through an object and print the key - value pairs with their types
let student = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (const stud in student) {
    console.log('Key :', stud, ', value :', student[stud], ', typeof', typeof student[stud]);
}