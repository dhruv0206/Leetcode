/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    const row = new Array(n).fill(0);
    const col = new Array(m).fill(0);

    // First pass: mark the rows and columns
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }

    // Second pass: update the matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] === 1 || col[j] === 1) {
                matrix[i][j] = 0;
            }
        }
    }
};

/*

// my bruteforce

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
            matrix[row][j] = 0
        }
        for (let j = 0; j < row; j++) {
            let col = zeroes[i][1]
            matrix[j][col] = 0
        }
    }

    return matrix

};
 */