// Problem 2 Solve
function userDomain(email) {
    if (email.includes('@')) {
        const emailSplit = email.split('@')
        return `${emailSplit[0]} sent you an email from ${emailSplit[1]}`
    }
    else{
        return 'Invalid Email'
    }

}
const email = 'zihad.ph@gmail.com'
const result = userDomain(email)
console.log(result)