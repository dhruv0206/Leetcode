class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        max_len = 0
        charmap = {}

        for right in range(len(s)):
            if s[right] in charmap:
                left = max(left,charmap.get(s[right]) + 1)
            charmap[s[right]] = right
            max_len = max(max_len, right - left + 1)
        
        return max_len