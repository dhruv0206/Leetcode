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