/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let low = 0, high = Math.max(...piles), ans = Infinity

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let totalHours = calculateTotalHours(piles, mid)
        if (totalHours <= h){
             high = mid - 1
             ans = mid
        }else {
            low = mid + 1
        }
    }

    return ans;


};

const calculateTotalHours = (arr, hourly) => {
    let totalHours = 0
    for (let num of arr) {
        totalHours += Math.ceil(num / hourly)
    }
    return totalHours;

}

// claude chat link
// https://claude.ai/chat/9dfc5571-206f-49f8-914b-30f030d026f6