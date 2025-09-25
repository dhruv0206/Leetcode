import math

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        low = 1
        high = max(piles)
        ans = float('inf')

        while low <= high:
            mid = (low + high) // 2
            # total_hours = sum(math.ceil(pile / mid) for pile in piles)
            total_hours = self.calculate_hours(piles, mid)

            if total_hours <= h:
                high = mid-1
                ans = mid
            else:
                low = mid + 1
                

        return ans
    
    def calculate_hours(self, arr, hourly):
        total_hours = 0
        for num in arr:
            total_hours += math.ceil(num/hourly)
        return total_hours
