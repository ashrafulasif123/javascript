// function calculateFinalScore(examResult){
//     if(typeof examResult.name === 'string' && typeof examResult.testScore === 'number' && typeof examResult.schoolGrade === 'number' && typeof examResult.isFarmer === 'boolean'){
//         if(examResult.isFarmer){
//             const score = examResult.testScore + examResult.schoolGrade + 20
//             if(score >= 80){
//                 return true
//             }
//             else{
//                 return false
//             }
//         }
//         else if(examResult.isFarmer === false){
//             const score = examResult.testScore + examResult.schoolGrade
//             if(score >= 80){
//                 return true
//             }
//             else{
//                 return false
//             }
//         }
//         else{
//             return 'Invalid Input'
//         }


//     }
//     else{
//         return 'Invalid Input'
//     }

// }
// const examResult =  {
//     name : 'Rajib',
//     testScore : 50,
//     schoolGrade : 29,
//     isFarmer : false
// }

// const result = calculateFinalScore(examResult)
// console.log(result)

/* function calculateFinalScore(examResult) {
    if (typeof examResult.name === 'string' && typeof examResult.testScore === 'number' && typeof examResult.schoolGrade === 'number' && typeof examResult.isFarmer === 'boolean') {
        
            const score = examResult.testScore + examResult.schoolGrade + (examResult.isFarmer ? 20 : null)
            if (score >= 80) {
                return true
            }
            else {
                return false
            }
       
        
    }
    else {
        return 'Invalid Input'
    }

}

const examResult = {
    name: 'Rajib',
    testScore: 50,
    schoolGrade: 39,
    isFarmer: true
}

const result = calculateFinalScore(examResult)
console.log(result) */

function calculateFinalScore(candidate) {
    // ✅ Step 1: Input validation
    if (
        typeof candidate !== 'object' || candidate === null ||
        typeof candidate.name !== 'string' ||
        typeof candidate.testScore !== 'number' ||
        typeof candidate.schoolGrade !== 'number' ||
        typeof candidate.isFarmer !== 'boolean'
    ) {
        return "Invalid Input";
    }

    // ✅ Step 3: Calculate final score
    /* const extraPoints = candidate.isFFamily ? 20 : 0; */
    // OR
    let extraPoints = 0;
    if (candidate.isFarmer) {
        extraPoints = 20
    }
    // else {
    //     extraPoints = 0
    // }

    const finalScore = candidate.testScore + candidate.schoolGrade + extraPoints;

    // ✅ Step 4: Return admission eligibility
    return finalScore >= 80;
}

const examResult = {
    name: 'Rajib',
    testScore: 50,
    schoolGrade: 29,
    isFarmer: true
}

const result = calculateFinalScore(examResult)
console.log(result)