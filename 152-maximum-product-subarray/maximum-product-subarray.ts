//  BRUTE FORCE METHOD TO SOLVE

function maxProduct(nums: number[]): number {
    if(nums.length === 1){
        return nums[0]
    }
    let maxProd = 0
    for (let i = 0; i < nums.length; i++) {
        let product = 1
        for (let j = i; j < nums.length; j++) {
            product *= nums[j]
            maxProd = Math.max(product, maxProd)
        }
    }

    return maxProd


};