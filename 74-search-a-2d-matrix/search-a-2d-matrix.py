class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rowsLen = len(matrix)
        colsLen = len(matrix[0])
        low = 0
        high = (rowsLen * colsLen) - 1

        while low <= high:
            mid = int((low+high)//2)
            row = int(mid/colsLen)
            col = int(mid%colsLen)
            if(target == matrix[row][col]): 
                return True
            elif(target < matrix[row][col]): 
                high = mid - 1
            else: 
                low = mid + 1

        return False
        