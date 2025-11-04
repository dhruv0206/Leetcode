class Solution:
    def checkValidString(self, s: str) -> bool:
        minOpen = 0  # minimum possible open parentheses
        maxOpen = 0  # maximum possible open parentheses
        
        for char in s:
            if char == '(':
                minOpen += 1
                maxOpen += 1
            elif char == ')':
                minOpen -= 1
                maxOpen -= 1
            else:  # char == '*'
                minOpen -= 1  # treat as ')' or empty
                maxOpen += 1  # treat as '('
            
            # Too many ')' - can't be balanced
            if maxOpen < 0:
                return False
            
            # Keep minOpen non-negative (use '*' as empty string)
            minOpen = max(minOpen, 0)
        
        # All '(' must be matched
        return minOpen == 0