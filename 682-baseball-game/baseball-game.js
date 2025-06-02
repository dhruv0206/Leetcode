/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let ans = 0
    let ansStack = []
    for(let i = 0; i < operations.length; i++){
        
        if(!isNaN(operations[i])){
            ansStack.push(parseInt(operations[i]))
            ans+=parseInt(operations[i])
        }else if(operations[i] === "+"){
            let previousTwoSums = ansStack[ansStack.length - 1] + ansStack[ansStack.length - 2]
            ans+=previousTwoSums
            ansStack.push(previousTwoSums)
        }else if(operations[i] === "C"){
            ans-=ansStack[ansStack.length - 1]
            ansStack.pop()    

        }else if(operations[i] === "D"){
            let doubleScore = ansStack[ansStack.length - 1] * 2
            ansStack.push(doubleScore)
            ans+=doubleScore

        }


    }
    return ans
};

