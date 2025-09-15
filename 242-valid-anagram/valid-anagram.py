class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        for i in range(len(s)):
            hit_index = t.find(s[i])
            
            if hit_index == -1:
                return False
            
            t = t[:hit_index] + t[hit_index+1:]
        
        if len(t) != 0:
            return False
        
        return True
        