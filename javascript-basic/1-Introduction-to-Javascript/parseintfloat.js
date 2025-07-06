// String থেকে Integer Number রুপান্তর
var number = '5';
var number2 = 'five';
var numberInt = parseInt(number)
var numberChr = parseInt(number2)
console.log('String to Int',numberInt) // Output: 5
console.log(numberChr) // Output: NaN

// parseInt এর মত কাজ করে Number
var x = '10';
var num = x;
// var total = num - 20;
// var total = num + 20;
var total = Number(num) + 20; //Number হলো JavaScript-এর একটি বিল্ট-ইন (built-in) ফাংশন/অবজেক্ট,যেটা কোনো ভ্যালুকে (value) সংখ্যায় (number) রূপান্তর (convert) করে।
console.log(total)

// String থেকে Float Number রুপান্তর
var number1 = '5.2';
var number3 = 'five point two';
var numberFloat = parseFloat(number1)
var numberChr2 = parseFloat(number3)
console.log('String to Float',numberFloat) // Output: 5.2
console.log(numberChr2) // Output: NaN
// String থেকে Float Number রুপান্তর