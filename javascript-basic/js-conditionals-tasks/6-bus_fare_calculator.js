/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 70;
const isStudent = true;
let ticketPrice = 800;
// const fare = 0; 

ticketPrice = age < 10 ? 0 : isStudent && age < 60 ? ticketPrice - (ticketPrice * 50 / 100) : age >= 60 ? ticketPrice - (ticketPrice * 15 / 100) : ticketPrice;

console.log("tiket fare", ticketPrice, "money" )


