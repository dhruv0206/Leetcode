/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let countMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (countMap.has(nums[i])) {
            countMap.set(nums[i], countMap.get(nums[i]) + 1)
        } else {
            countMap.set(nums[i], 1)
        }
    }

    const maxHeap = [...countMap.entries()].sort((a, b) => b[1] - a[1]);
    
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(maxHeap[i][0]);
    }

    return result;
};