/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let total = 0;
    let l = 0, r = height.length - 1;
    let lmax = 0, rmax = height[r];

    while (l < r) {
        if (height[l] <= height[r]) {
            if (height[l] < lmax) {
                total += lmax - height[l]
            } else {
                lmax = height[l]
            }
            l++
        } else {
            if (height[r] < rmax) {
                total += rmax - height[r]
            } else {
                rmax = height[r]
            }
            r--
        }

    }
    return total;

};

// claude animation link
// https://claude.ai/artifacts/c1498e1c-187d-4681-9cc9-eab125d8bb9e

//claude chat link
//https://claude.ai/share/4b934750-027e-438a-9c58-2e6de0778cc3