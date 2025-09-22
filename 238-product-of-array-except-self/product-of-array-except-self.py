class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [1] * n

        prefProd = 1
        for i in range(n):
            ans[i] = prefProd
            prefProd *= nums[i]
        
        suffixProd = 1
        for i in range(n-1, -1, -1):
            ans[i] *= suffixProd
            suffixProd *= nums[i]
        
        return ans