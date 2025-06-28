//  USING PREFIX AND SUFFIX

function maxProduct(nums: number[]): number {
    let max = 0
    let prefix = 1
    let suffix = 1
    let n = nums.length

    if(nums.length === 1){
        return nums[0]
    }

    for(let i = 0 ; i < nums.length; i++){
        if(prefix == 0){
            prefix = 1
        }
        if(suffix == 0){
            suffix = 1
        }

        prefix *= nums[i]
        suffix *= nums[n-i-1]

        max = Math.max(max, Math.max(prefix, suffix))
    }

    return max
};




//  BRUTE FORCE METHOD TO SOLVE

// function maxProduct(nums: number[]): number {
//     if(nums.length === 1){
//         return nums[0]
//     }
//     let maxProd = -1
//     for (let i = 0; i < nums.length; i++) {
//         let product = 1
//         for (let j = i; j < nums.length; j++) {
//             product *= nums[j]
//             maxProd = Math.max(product, maxProd)
//         }
//     }

//     return maxProd


// };