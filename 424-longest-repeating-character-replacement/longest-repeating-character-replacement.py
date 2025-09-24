class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = 0
        max_count = 0
        freq = {}
        res = 0
        
        for right in range(len(s)):
            char = s[right]
            freq[char] = freq.get(char, 0) + 1
            max_count = max(max_count, freq[char])
            
            if right - left + 1 - max_count > k:
                freq[s[left]] = freq[s[left]] - 1
                left += 1
            
            res = max(res, right - left + 1)
        
        return res