/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    matrix = matrix.flat();
    console.log("matrix", matrix)

    let start = 0
    let end = matrix.length-1

    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(matrix[mid] === target){
            return true
        }else if(matrix[mid] < target){
            start = mid + 1
        }else{
            end = mid - 1 
        }
    }
    return false
    
};