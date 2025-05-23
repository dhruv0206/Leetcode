function twoSum(nums: number[], target: number): number[] {
    const sumMap = new Map()
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i]

        if(sumMap.has(diff)){
            return [i, sumMap.get(diff)]
        }

        sumMap.set(nums[i], i)
    }
    
};