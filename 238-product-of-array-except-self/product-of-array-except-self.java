class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n];

        int prefProd = 1;
        for (int i = 0; i < n; i++) {
            ans[i] = prefProd;
            prefProd *= nums[i];
        }

        int suffProd = 1;
        for (int i = n - 1; i >= 0; i--) {
            ans[i] *= suffProd;
            suffProd *= nums[i];
        }

        return ans;

    }
}