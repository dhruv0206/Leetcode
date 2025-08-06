/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxIndex = 0
    if(nums.length === 1 && nums[0] === 0){
        return true
    }
    for(let i = 0; i < nums.length; i++){
        if(i > maxIndex) return false
        maxIndex = Math.max(maxIndex, i + nums[i])
    }
    return maxIndex
};