// const car = {make : "Toyota", model: "Corolla", year: 2020} এই অবজেক্টের একটি কপি তৈরী কর এবং Year Update করে  2032 করে নতুন অবজেক্ট তৈরী কর

const car = { make: "Toyota", model: "Corolla", year: 2020 }
const { ...newCar } = car;
newCar.year = 2025
console.log(car)
console.log(newCar)

// const car = { make: "Toyota", model: "Corolla", year: 2020 }
// const { ...newCar } = car;
// newCar.year = 2025
// console.log(car)
// console.log(newCar)




