class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
                # Step 1: Build frequency map of s1
        count_map = {}
        for char in s1:
            count_map[char] = count_map.get(char, 0) + 1
        
        # Step 2: Initialize variables
        start = 0
        window_size = len(s1)
        counter = len(count_map)  # Number of unique characters to match
        
        # Step 3: Sliding window
        for end in range(len(s2)):
            char = s2[end]
            
            # Expand window (add character at 'end')
            if char in count_map:
                count_map[char] -= 1
                if count_map[char] == 0:
                    counter -= 1
            
            # Check if we found a valid permutation
            while counter == 0:
                if end - start + 1 == window_size:
                    return True
                
                # Shrink window (remove character at 'start')
                left_char = s2[start]
                if left_char in count_map:
                    count_map[left_char] += 1
                    if count_map[left_char] == 1:
                        counter += 1
                
                start += 1
        
        return False
        