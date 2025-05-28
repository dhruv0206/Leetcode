/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let maxNum = -Infinity
    for(let i =0; i <arr.length; i++){
        maxNum = Math.max(arr[i], maxNum)
    }
    return arr.indexOf(maxNum)
    
    
};