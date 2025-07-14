/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // let total = 0;
    // let l = 0, r = height.length - 1;
    // let lmax = 0, rmax = height[r];

    // while (l < r) {
    //     if (height[l] <= height[r]) {
    //         if (height[l] < lmax) {
    //             total += lmax - height[l]
    //         } else {
    //             lmax = height[l]
    //         }
    //         l++
    //     }else{
    //         if(height[r] < rmax){
    //             total+=rmax - height[r]
    //         }else{
    //             rmax = height[r]
    //         }
    //         r--
    //     }
        
    // }
    // return total;

    let i = 0;
        let left_max = height[0];
        let sum = 0;
        let j = height.length - 1;
        let right_max = height[j];
        while (i < j) {
            if (left_max <= right_max) {
                sum += left_max - height[i];
                i++;
                left_max = Math.max(left_max, height[i]);
            } else {
                sum += right_max - height[j];
                j--;
                right_max = Math.max(right_max, height[j]);
            }
        }
        return sum;

};