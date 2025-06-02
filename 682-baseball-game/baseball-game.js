/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let ans = 0
    let ansStack = []
    // ansStack.push(operations[0])
    // const peek = operations[operations.length - 1]
    for(let i = 0; i < operations.length; i++){
        console.log("OP", operations[i])
        
        if(!isNaN(operations[i])){
            console.log(operations[i], "IN")
            ansStack.push(parseInt(operations[i]))
            ans+=parseInt(operations[i])
            console.log("in is nan", ansStack)
        }else if(operations[i] === "+"){
            console.log("PREVIOUS 1 & 2", ansStack[ansStack.length - 1], ansStack[ansStack.length - 2])
            let previousTwoSums = ansStack[ansStack.length - 1] + ansStack[ansStack.length - 2]
            ans+=previousTwoSums
            ansStack.push(previousTwoSums)
            console.log("previousTwoSums",previousTwoSums)
        }else if(operations[i] === "C"){
            ans-=ansStack[ansStack.length - 1]
            ansStack.pop() 
            console.log("IN C", ansStack)      

        }else if(operations[i] === "D"){
            let doubleScore = ansStack[ansStack.length - 1] * 2
            ansStack.push(doubleScore)
            ans+=doubleScore

        }


    }
    console.log("ANSWeR", ans)
    console.log("SSADSASD", ansStack)
    return ans
};

