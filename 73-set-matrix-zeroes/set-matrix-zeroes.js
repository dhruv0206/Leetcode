/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let row = matrix.length
    let col = matrix[0].length
    let zeroes = []

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 0) {
                zeroes.push([i, j])
            }
        }
    }

    for (let i = 0; i < zeroes.length; i++) {
        for (let j = 0; j < col; j++) {
            let row = zeroes[i][0]
            // console.log("S", row)
            matrix[row][j] = 0
        }
        for (let j = 0; j < row; j++) {
            let col = zeroes[i][1]
            console.log("col", col)
            matrix[j][col] = 0
        }
    }

    // for (let i = 0; i < zeroes.length; i++) {
    //     for (let j = 0; j < col; j++) {
    //         matrix[i][1] = 0
    //     }
    //     // matrix[i]
    // }
    // console.log("ZEROES", zeros[0][0], zeros[0][1])

    return matrix

};