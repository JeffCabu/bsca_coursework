const fallArray = [
    'pumpkin',
    'spice',
    'is',
    'very',
    'nice',
    'happy',
    'fall'
]

const halloween=(greatest)=>{

    let greatestLengthSoFar = 0
    let indexOfWord = 0

    for(let i=0; i<greatest.length; i+=1){

        let currentLengthOfWord = greatest[i].length

        if(currentLengthOfWord > greatestLengthSoFar ){
            greatestLengthSoFar = currentLengthOfWord
            indexOfWord = i
        }
        
    }
    return `${greatest[indexOfWord]} has length ${greatestLengthSoFar}`
}
console.log(halloween(fallArray));



