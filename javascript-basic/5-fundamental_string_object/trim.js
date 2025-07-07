const life = 'Quran'
const life2 = '   Quran'

if (life.trim() === life2.trim()) {
    // console.log('Quran is our life');
}
else {
    // console.log('Something is wrong')
}

const removeDuplicate = (sentence) => {
    const sentenceSplit = sentence.split(' ')
    const uniqueValue = []
    for (const sent of sentenceSplit) {
        if (uniqueValue.includes(sent) === false) {
            uniqueValue.push(sent)
        }
    }
    let uniqueSum = ''
    for (const unique of uniqueValue) {
        uniqueSum = uniqueSum + unique + ' '
    }
    // এখানে trim() ব্যবহার করা হয়েছে
    const uniqueSent = `${uniqueSum}      `
    return `${uniqueSent.trim()}<`
}


const sentence = 'i was graduated from was international islamic university islamic chittagong in 2015 2015'
const resultRemoveDuplicate = removeDuplicate(sentence)
// console.log(resultRemoveDuplicate)

// ভিতরের এবং আগের, পরের space remove করার জন্য
const versity = `i was graduated   from international islamic university chittagong in 2015`
const cleaned = versity.trim().split(/\s+/).join(' ')
// console.log(versity)