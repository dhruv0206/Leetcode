class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(start, target, path):
            if target == 0:
                result.append(path)
                return
            if target < 0:
                return
            
            for i in range(start, len(candidates)):
                # Skip duplicates at the same recursion level
                if i > start and candidates[i] == candidates[i-1]:
                    continue
                
                # Use i+1 instead of i to ensure each element is used only once
                backtrack(i + 1, target - candidates[i], path + [candidates[i]])

        result = []
        candidates.sort()  # Sorting is crucial for duplicate detection
        backtrack(0, target, [])
        return result
        