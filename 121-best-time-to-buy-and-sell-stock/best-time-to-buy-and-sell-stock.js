/**
 * @param {number[]} prices
 * @return {number}
 */

 // My approach


// var maxProfit = function (prices) {
//     let maxp = 0
//     let minp = Infinity

//     for (let price of prices) {
//         if (price < minp) {
//             minp = price
//         }

//         let profit = price - minp
//         if (profit > maxp) {
//             maxp = profit
//         }
//     }

//     return maxp

// };


// Sliding Window

var maxProfit = function (prices) {
    const n = prices.length;
    let maxProfit = 0;
    let i = 0;
    for (let j = 0; j < n; j++) {
        if (prices[j] < prices[i]) {
            i = j;
        }
        else {
            const diff = prices[j] - prices[i];
            maxProfit = maxProfit < diff ? diff : maxProfit;
        }
    }
    return maxProfit;
};



