class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        if len(nums) == 1:
            return 1
        
        nums.sort()
        maxCount = 1  # Initialize to 1 instead of 0
        currCount = 1
        
        for i in range(len(nums) - 1):
            if nums[i] + 1 == nums[i + 1]:
                currCount += 1
                maxCount = max(maxCount, currCount)
            elif nums[i] == nums[i + 1]:
                continue  # Skip duplicates
            else:
                currCount = 1
                # No need to update maxCount here
        
        return maxCount
        