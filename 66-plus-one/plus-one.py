class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        # result_int = int("".join(map(str, digits)))
        # result_int+=1
        # int_map = [int(digit) for digit in str(result_int)]
        # return int_map
        n = len(digits)
        
        # Start from the rightmost digit
        for i in range(n - 1, -1, -1):
            # If current digit is less than 9, just add 1 and return
            if digits[i] < 9:
                digits[i] += 1
                return digits
            
            # If digit is 9, it becomes 0 and we carry over
            digits[i] = 0
        
        # If we're here, all digits were 9 (e.g., [9,9,9] -> [1,0,0,0])
        return [1] + digits

        
        