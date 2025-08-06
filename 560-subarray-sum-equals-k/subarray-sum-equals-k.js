/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    let preSum = 0;
    let count = 0;
    map.set(0, 1);

    for(let i = 0; i < nums.length; i++){
        preSum += nums[i];
        let remove = preSum - k;
        count += (map.get(remove) || 0)
        map.set(preSum, (map.get(preSum) || 0) + 1)
    }

    return count
    
};

// STRIVERS VIDEO
// https://www.youtube.com/watch?v=xvNwoz-ufXA

/*
BRUTE FORCE
 

let cnt = 0
    for(let i = 0; i < nums.length; i++){
        let sum = 0
        for(let j = i; j < nums.length; j++){
            sum += nums[j]

            if(sum === k){
                cnt++
            }
            
        }
    }

    return cnt;

 
 */