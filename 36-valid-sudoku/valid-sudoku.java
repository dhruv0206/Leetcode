class Solution {
    public boolean isValidSudoku(char[][] board) {
        // Row validation
    for (int i = 0; i < board.length; i++) {
        Set<Character> temp = new HashSet<>();
        for (int j = 0; j < board.length; j++) {
            char currVal = board[i][j];
            if (temp.contains(currVal)) {
                return false;
            }
            if (currVal != '.') {
                temp.add(currVal);
            }
        }
    }
    
    // Column validation
    for (int i = 0; i < board.length; i++) {
        Set<Character> temp = new HashSet<>();
        for (int j = 0; j < board.length; j++) {
            char currVal = board[j][i];
            if (temp.contains(currVal)) {
                return false;
            }
            if (currVal != '.') {
                temp.add(currVal);
            }
        }
    }
    
    // Boxes validation
    int[][] starts = {
        {0, 0}, {0, 3}, {0, 6},
        {3, 0}, {3, 3}, {3, 6},
        {6, 0}, {6, 3}, {6, 6}
    };
    
    for (int[] start : starts) {
        int startRow = start[0];
        int startCol = start[1];
        Set<Character> temp = new HashSet<>();
        
        for (int row = startRow; row < startRow + 3; row++) {
            for (int col = startCol; col < startCol + 3; col++) {
                char currVal = board[row][col];
                if (temp.contains(currVal)) {
                    return false;
                }
                if (currVal != '.') {
                    temp.add(currVal);
                }
            }
        }
    }
    
    return true;
        
    }
}