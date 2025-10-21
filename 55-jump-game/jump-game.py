class Solution:
    def canJump(self, nums: List[int]) -> bool:
        maxIdx = 0
        for i in range(0, len(nums)):
            if i > maxIdx:
                return False
            maxIdx = max(maxIdx, i + nums[i])
        
        return True
        