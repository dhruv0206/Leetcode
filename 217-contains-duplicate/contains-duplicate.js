/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numsMap = new Map()
    for(let num of nums){
        console.log(numsMap.has(num))
        if (numsMap.has(num)){
            let currCount = numsMap.get(num) + 1
            numsMap.set(num, currCount)
            if(numsMap.get(num) > 1){
                return true
            }
        }else{
            numsMap.set(num, 1)
        }

    }
    return false
};