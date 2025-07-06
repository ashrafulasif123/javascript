function vowelCount(versity, vowel){
    const totalVowel = {};
    const versityLowerCase = versity.toLowerCase()
    for(const ver of versityLowerCase){
        if(vowel.includes(ver)){
            if(totalVowel[ver]){
                totalVowel[ver] = totalVowel[ver] + 1
            }
            else{
                totalVowel[ver] = 1
            }
        }
    }
    return totalVowel;

}

const vowel = 'aeiou'
const versity = 'International Islamic University Chittagong'
const versity2 = 'You are the most powerful' 
console.log(vowelCount(versity, vowel))
console.log(vowelCount(versity2, vowel))