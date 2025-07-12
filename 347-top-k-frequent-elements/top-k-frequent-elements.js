/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let countMap = new Map()
    const res = []

    for (let i = 0; i < nums.length; i++) {
        if (countMap.has(nums[i])) {
            countMap.set(nums[i], countMap.get(nums[i]) + 1)
        } else {
            countMap.set(nums[i], 1)
        }
    }

    for (let [key, value] of countMap) {
        res.push([key, value]); //! we will add the number and its frequency
    }

    res.sort((a,b) => b[1]-a[1])

    return res.slice(0,k).map((x) => x[0])
};