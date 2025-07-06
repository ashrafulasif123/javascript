// Problem 1 Solved


function taxCalculator(income, expense) {
    if (income > 0 && expense > 0 && expense < income) {
        const difference = income - expense
        const tax = (20 / 100) * difference
        return tax
        }
    else{
        return "Invalid Input"
    }

}
const x = 5000;
const y = 3000;
const result = taxCalculator(x, y)
console.log(result)