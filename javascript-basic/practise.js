const removeDuplicate = (sentence) => {
    const sentenceSplit = sentence.split(' ')
    const uniqueValue = []
    for (const sent of sentenceSplit) {
        if (uniqueValue.includes(sent) === false) {
            uniqueValue.push(sent)
        }
    }
    console.log(uniqueValue.join(' '))
}


const sentence = 'i was graduated from was international islamic university islamic chittagong in 2015 2015'
const resultRemoveDuplicate = removeDuplicate(sentence)