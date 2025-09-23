class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(len(board)):
            temp = set()
            for j in range(len(board)):
                currVal = board[i][j]
                if currVal in temp:
                    return False
                if currVal != ".":
                    temp.add(currVal)

        for i in range(len(board)):
            temp = set()
            for j in range(len(board)):
                currVal = board[j][i]
                if currVal in temp:
                    return False
                if currVal != ".":
                    temp.add(currVal)
        
        starts = [
            [0, 0], [0, 3], [0, 6],
            [3, 0], [3, 3], [3, 6],
            [6, 0], [6, 3], [6, 6],
        ]

        for start in starts:
            startRow = start[0]
            startCol = start[1]
            temp = set()
            for i in range(startRow, startRow+3):
                for j in range(startCol, startCol+3):
                    currVal = board[i][j]
                    if currVal in temp:
                        return False
                    if currVal != ".":
                        temp.add(currVal)                   
                    
    
        return True