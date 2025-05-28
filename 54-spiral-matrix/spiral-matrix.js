/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let ans = []
    let isColsStatic = false
    
    let isColIncrementing = true
    let isRowIncrementing = true
    const rowsLen = matrix.length
    const colsLen = matrix[0].length
    if(colsLen === 1){
        isColsStatic = true
    }
    let visitedMatrix = createVisitedMatrix(rowsLen, colsLen)
    //console.log("ROWS LEN, COLS LEN", rowsLen, colsLen)
    const totalLen = rowsLen * colsLen
    let row = 0, col = 0;
    for (let i = 0; i < totalLen; i++) {
        if (isColsStatic) {
            //console.log(row, col, "ROW, COL, IN COLSTATIC")
            //console.log("ans[i]", ans)
            ans[i] = matrix[row][col]
            visitedMatrix[row][col] = 111

            if (isRowIncrementing == true) {
                if (row < rowsLen - 1) {
                    if (visitedMatrix[row+1][col] !== 111) {
                        row++
                    } else {
                        isColsStatic = false
                        isRowIncrementing = false
                        if (isColIncrementing) {
                            col++
                        } else {
                            col--
                        }
                    }
                }
                if (row === rowsLen - 1) {
                    isColsStatic = false
                    isRowIncrementing = false
                }
            } else {
                if (row > 0) {
                    if (visitedMatrix[row-1][col] !== 111) {
                        row--
                    } else {
                        isColsStatic = false
                        isRowIncrementing = true
                        if (isColIncrementing) {
                            col++
                        } else {
                            col--
                        }
                    }
                }
                if (row === 0) {
                    isColsStatic = false
                    isRowIncrementing = true
                }


            }


        } else {
            ans[i] = matrix[row][col]
            visitedMatrix[row][col] = 111

            if (isColIncrementing == true) {
                if (col < colsLen - 1) {
                    if (visitedMatrix[row][col+1] !== 111) {
                        col++
                    } else {
                        isColsStatic = true
                        isColIncrementing = false
                        if (isRowIncrementing) {
                            row++
                        } else {
                            row--
                        }
                    }
                }
                if (col === colsLen - 1) {
                    isColsStatic = true
                    isColIncrementing = false
                }
            } else {
                if (col > 0) {
                    if (visitedMatrix[row][col - 1] !== 111) {
                        col--
                    } else {
                        isColsStatic = true
                        isColIncrementing = true
                        if (isRowIncrementing) {
                            row++
                        } else {
                            row--
                        }
                    }
                }
                if (col === 0) {
                    isColsStatic = true
                    isColIncrementing = true
                }
            }

        }


    }
    //console.log("ANS::", ans)
    //console.log("VISITED MAT::", visitedMatrix)

    return ans

};

const createVisitedMatrix = (rowsLength, colsLength) => {
    const my2DArray = [];

    for (let i = 0; i < rowsLength; i++) {
        my2DArray[i] = [];
        for (let j = 0; j < colsLength; j++) {
            my2DArray[i][j] = 110;
        }
    }

    return my2DArray;
}


// Another easy solution

// var spiralOrder = function(matrix) {
//     let res = [];
//     let top = 0, bottom = matrix.length - 1;
//     let left = 0, right = matrix[0].length - 1;

//     while (top <= bottom && left <= right) {
//         // Top row
//         for (let i = left; i <= right; i++) {
//             res.push(matrix[top][i]);
//         }
//         top++;

//         // Right column
//         for (let i = top; i <= bottom; i++) {
//             res.push(matrix[i][right]);
//         }
//         right--;

//         if (top <= bottom) {
//             // Bottom row
//             for (let i = right; i >= left; i--) {
//                 res.push(matrix[bottom][i]);
//             }
//             bottom--;
//         }

//         if (left <= right) {
//             // Left column
//             for (let i = bottom; i >= top; i--) {
//                 res.push(matrix[i][left]);
//             }
//             left++;
//         }
//     }
//     return res;
// };