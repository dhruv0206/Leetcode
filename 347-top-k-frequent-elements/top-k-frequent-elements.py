class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Step 1: Create a frequency map (dictionary in Python)
        count_map = {}
        
        # Step 2: Count frequency of each number
        for num in nums:
            count_map[num] = count_map.get(num, 0) + 1
        
        # Step 3: Sort the dictionary items by frequency (descending)
        max_heap = sorted(count_map.items(), key=lambda x: x[1], reverse=True)
        
        # Step 4: Extract the top k elements
        result = []
        for i in range(k):
            result.append(max_heap[i][0])
        
        return result
        