/**
 * spread operator নতুন copy বানায় উভয় কেক্ষেত্রেই Array & Object
 */

// Example 1 
const num1 = [45, 89, 74, 45]
const num2 = num1
num2.push(10, 100)
// console.log(num1) // Output: [ 45, 89, 74, 45, 10, 100 ] এখানে তো num2 তে 10, 100 push করা হয়েছে, তাহলে num1 এ কেন আসল কারন num2, num1 এ reference একই
// console.log(num2) // Same Output: [ 45, 89, 74, 45, 10, 100 ]

// উপরোক্ত সমস্যা সমাধানের জন্য reference তৈরী না হয়ে Copy হবে যার জন্য করতে হবে Spread Operator(...)
const numb1 = [45, 89, 74, 45]
const numb2 = [...numb1] // num2 এর পরিবর্তে numb2
numb2.push(10, 100)
// console.log(numb1) // Output: [ 45, 89, 74, 45 ]
// console.log(numb2) // Output: [ 45, 89, 74, 45, 10, 100 ] 

// Example 2
const ages1 = [54, 12, 36, 78, 45]
const ages2 = [...ages1, 10, 100]
// console.log(ages1) // Output: [ 54, 12, 36, 78, 45 ]
// console.log(ages2) // Output: [54, 12,  36, 78, 45, 10, 100] // Copy হওয়ার সাথে সাথে নতুন সংখ্যা যোগ হয়েছে।

// Example 3
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = [...array1, ...array2];
// console.log(combinedArray); // Output: [1, 2, 3, 4]

// Example 5

const employees1 = { employeeName: 'Md Faruk Hossain', age: 35 }
const emoloyees2 = employees1 // { ...employees1 } এভাব ব্যবহার করলে reference আর থাকবে না, Copy তৈরী হবে।

emoloyees2.experience = 5
// console.log(employees1) // Output: { employeeName: 'Md Faruk Hossain', age: 35, experience: 5 }
// console.log(emoloyees2) // Output: { employeeName: 'Md Faruk Hossain', age: 35, experience: 5 }
// { ...employees1 } এভাব ব্যবহার করলে reference আর থাকবে না, Copy তৈরী হবে।



// Example 5 নতুন প্রোপার্টি যোগ করা

const studentInfo = { stduentName: 'Hasan', age: 25 }
const studentInfo2 = { ...studentInfo, id: 'h111980' }
// console.log(studentInfo)
// console.log(studentInfo2)


// Practise 2 ‍.Spread Operator দিয়ে new Element যোগ করা
const fruits = ['Papaya', 'Orange']
const myfruits = ['Apple', 'Banana', 'Mango', ...fruits]
// console.log(myfruits)

// Practise 4 .Spread Operator দিয়ে new Property যোগ করা

const website = { theme: 'dark' }
const websites = { name: 'My Site', type: 'e-commerce', status: 'active', ...website }
// console.log(websites)

// Practise 5 Country বাদ দিয়ে বাকিগুলো নতুন Object তৈরী করা। // এটা rest এর প্র্যাকটিস
const young = { name: 'Arif', age: 30, country: 'B Baria' }
const { country, ...rest } = young
// console.log(rest)

// Practise 6
const car = { make: 'Toyota', model: 'corolla', year: 2020 }
const withoutCar = { year: 2020, ...otherInfo }










