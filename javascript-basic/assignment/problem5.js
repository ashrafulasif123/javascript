function waitingTime(times, mySerial) {
    if(Array.isArray(times) !== true || typeof mySerial !== 'number'){
        return 'Invalid Input'
    }
    const completedInterview = times.length      
    if (mySerial > completedInterview) {
        let completedInterviewTotalTime = 0;
        for (const time of times) {
            completedInterviewTotalTime += time
        }
        const averageTime = Math.round(completedInterviewTotalTime / completedInterview)
        const waitingTime = (mySerial - 1 - completedInterview) * averageTime
        return waitingTime
    }
    return 0

        
    
    
}


const times = [ 3, 5, 7, 11, 6 ]
const mySerial = 10
const waitingResult = waitingTime(times, mySerial)
console.log(waitingResult)

