class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [1] * n  # Initialize with 1s
        
        # Left pass (prefix products)
        prefProd = 1
        for i in range(n):
            ans[i] = prefProd
            prefProd *= nums[i]
        
        # Right pass (suffix products)
        suffixProd = 1
        for i in range(n - 1, -1, -1):  # Iterate backwards
            ans[i] *= suffixProd
            suffixProd *= nums[i]
        
        return ans