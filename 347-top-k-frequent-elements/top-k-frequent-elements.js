/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let countMap = new Map()

    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    const maxHeap = [...countMap.entries()].sort((a, b) => b[1] - a[1]);
    
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(maxHeap[i][0]);
    }

    return result;
};