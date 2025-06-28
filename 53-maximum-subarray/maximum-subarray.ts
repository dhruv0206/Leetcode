//kadane's Algo

function maxSubArray(nums: number[]): number {
    let maxSum = -Infinity
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        maxSum = Math.max(sum, maxSum)

        if(sum < 0){
            sum = 0
        }
    }
    return maxSum
};