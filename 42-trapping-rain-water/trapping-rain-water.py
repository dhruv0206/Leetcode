class Solution:
    def trap(self, height: List[int]) -> int:
        total = 0
        left = 0
        right = len(height) - 1
        lmax = 0
        rmax = height[right]

        while left < right:
            if height[left] <= height[right]:
                if height[left] < lmax:
                    total += lmax - height[left]
                else:
                    lmax = height[left]
                left +=1
            else:
                if height[right] < rmax:
                    total += rmax - height[right]
                else:
                    rmax = height[right]
                right -=1
        
        return total

        
        