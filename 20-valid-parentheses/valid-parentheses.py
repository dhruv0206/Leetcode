class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        char_map = {
            ")":"(",
            "}":"{",
            "]":"["
        }
        
        for char in s:
            if char in char_map:
                if len(stack) > 0 and stack[-1] == char_map.get(char):
                    stack.pop()
                else:
                    return False
            else:
                stack.append(char)
        
        return len(stack) == 0