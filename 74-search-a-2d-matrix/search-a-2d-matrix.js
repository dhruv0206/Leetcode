/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length // row
    let n = matrix[0].length // col
    let low = 0
    let high = (m * n) - 1

    while(low<= high){
        let mid = Math.floor((low+high)/2)
        let row = Math.floor(mid/n)
        let col = Math.floor(mid%n)

        if(target === matrix[row][col]) return true
        else if(target < matrix[row][col]) high = mid - 1
        else low = mid + 1
    }
    
    return false
};