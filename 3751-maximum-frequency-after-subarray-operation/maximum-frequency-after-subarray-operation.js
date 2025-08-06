/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    let ans = 0;
    for (const uniqueVal of freqMap.keys()) {
        let sum = 0;
        for (const num of nums) {
            if (num === uniqueVal) sum++;
            if (num === k) sum--;
            if (sum < 0) sum = 0;
            ans = Math.max(ans, sum);
        }
    }

    return ans + (freqMap.get(k) || 0);
};