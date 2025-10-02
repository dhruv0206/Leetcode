import math
import heapq

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []
        
        for (x, y) in points:
            dist = -(x*x + y*y)
            if len(heap) == k:
                heapq.heappushpop(heap, (dist, x, y))
            else:
                heapq.heappush(heap, (dist, x, y))
        
        return [(x,y) for (dist,x, y) in heap]


        # heap = []

        # for i in range(len(points)):
        #     print(points[i][0], points[i][1])
        #     ans = points[i][0]**2 + points[i][1]**2
        #     heapq.heappush(heap, (ans, points[i]))

        # smallest_tuples = heapq.nsmallest(k, heap)
        # result = [value for key, value in smallest_tuples]
        # return result
        