class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        result_int = int("".join(map(str, digits)))
        result_int+=1
        print(result_int)
        int_map = [int(digit) for digit in str(result_int)]
        return int_map
        # digit_list = [int(digit) for digit in str(num)]
        # print(digit_list)
        