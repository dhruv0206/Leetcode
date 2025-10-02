import math
import heapq

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []

        for i in range(len(points)):
            print(points[i][0], points[i][1])
            ans = points[i][0]**2 + points[i][1]**2
            heapq.heappush(heap, (ans, points[i]))

        print(heap)

        smallest_tuples = heapq.nsmallest(k, heap)
        result = [value for key, value in smallest_tuples]
        return result


    
    
    # def euclidean_dist(d1, d2):
    #     origin
    #     x_sq = (d1[0] - d2[0]) ** 2
    #     y_sq = (d1[1] - d2[1]) ** 2
        
    #     ans = math.sqrt(x_s1 + y_s1)

    #     return ans
        