/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = board.length
    let cols = board[0].length
    
    // Rows validation
    for(let i = 0; i < board.length; i++){
        let temp = new Set()
        for(let j = 0; j < board.length; j++){
            let currVal = board[i][j]
            if(temp.has(currVal)){
                return false;
            }
            if(currVal != "."){
                temp.add(currVal)
            }
            
        }
    }

    // Column validation
    for(let i = 0; i < board.length; i++){
        let temp = new Set()
        for(let j = 0; j < board.length; j++){
            let currVal = board[j][i]
            if(temp.has(currVal)){
                return false;
            }
            if(currVal != "."){
                temp.add(currVal)
            }
        }
    }

    // Boxes validation
    let starts = [[0, 0], [0, 3], [0, 6],
                  [3, 0], [3, 3], [3, 6],
                  [6, 0], [6, 3], [6, 6]];

    for (let [startRow, startCol] of starts) {
        let temp = new Set();
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                let currVal = board[row][col];
                if (currVal !== '.' && temp.has(currVal)) {
                    return false;
                }
                temp.add(currVal);
            }
        }
    }
    return true
};