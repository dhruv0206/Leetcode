class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums1 = nums1 + nums2
        nums1.sort()
        n = len(nums1)
        if n % 2 == 1:  # Odd length
            median = nums1[n // 2]
        else:  # Even length
            middle1 = nums1[n // 2 - 1]
            middle2 = nums1[n // 2]
            median = (middle1 + middle2) / 2
        return median
        