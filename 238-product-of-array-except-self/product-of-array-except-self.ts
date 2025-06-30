function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const ans = new Array(n).fill(0);

    let prefProd = 1;
    for (let i = 0; i < n; i++) {
        ans[i] = prefProd;
        prefProd *= nums[i];
    }

    let suffProd = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= suffProd;
        suffProd *= nums[i];
    }

    return ans;
}


// ANOTHER BRUTE FORCE APPROACH

/*
var productExceptSelf = function(nums) {
    let ans = []
    let product = 1
    // for(let i=0; i<nums.length ; i++ ){
    //     let product = 1
    //     for(let j = 0; j< nums.length; j++){
    //         if(i!==j){
    //             product *= nums[j]
    //         }    
    //     }
    //     ans[i] = product
    // }
    let hasZero = false
    for(let i = 0; i< nums.length; i++){
        if(nums[i] !== 0){
            product *= nums[i]
        }
        if(nums[i] === 0){
            if(hasZero){
                product = 0
            }
            hasZero = true
        }
    }

    for(let j = 0; j<nums.length; j++){
        // console.log(product)
        // console.log(nums[j])
        if(nums[j] === 0){
            ans[j] = product
        } else{
            if(hasZero){
                ans[j] = 0
            }else{
                ans[j] = product/nums[j]

            }

        }
        // ans[j] = product/nums[j]
        // if (product !== 0){
        // }
        // console.log("AN", product/nums[j])
    }
    return ans
    
};
*/