from collections import Counter
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        m = defaultdict(int)
        
        for num in nums:
            m[num] += 1
        
        n = len(nums) // 2
        for key, value in m.items():
            if value > n:
                return key
        
        return 0

        # nums.sort()
        # n = len(nums)
        # return nums[n//2]