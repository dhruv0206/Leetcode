class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        num1 = nums1 + nums2
        num1.sort()
        n = len(num1)
        if n % 2 == 1:  # Odd length
            median = num1[n // 2]
        else:  # Even length
            middle1 = num1[n // 2 - 1]
            middle2 = num1[n // 2]
            median = (middle1 + middle2) / 2
        return median
        