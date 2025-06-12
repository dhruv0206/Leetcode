/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numLen = nums.length
    nums.sort((a,b) => b-a)
    for(let i = 0; i < numLen; i++){
        let diff = numLen - nums[i]
        if(diff !== i){
            return nums[i] + 1
        }
    }

    return 0
    
};