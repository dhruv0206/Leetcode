class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        sum_map = {}
        for i in range(len(nums)):
            diff = target - nums[i]

            if diff in sum_map:
                return[i, sum_map[diff]]
            
            sum_map[nums[i]] = i
        