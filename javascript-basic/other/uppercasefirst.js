const firsUpperCase = (statement) => {
    const statementSplit = statement.split(' ')

    let stringSum = ''
    for (let i = 0; i < statementSplit.length; i++) {
        const word = statementSplit[i]
        stringSum = stringSum +  (i === 0 ? '' : ' ')  + word[0].toUpperCase() + word.slice(1)
        
    }
    return stringSum
}







const statement = 'I am a hard working person'
const result = firsUpperCase(statement)
console.log(result)