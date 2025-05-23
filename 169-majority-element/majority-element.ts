function majorityElement(nums: number[]): number {
    let countMap = new Map()
    const majorityThreshold: number = Math.ceil(nums.length/2)


    for(let num of nums){
        countMap.has(num) ? countMap.set(num, countMap.get(num) + 1) : countMap.set(num, 1)
    }
    for(let [key, value] of countMap){
        if(value >= majorityThreshold){
            return key
        }
    }
    console.log("MAP", countMap)



    return 0
    
};