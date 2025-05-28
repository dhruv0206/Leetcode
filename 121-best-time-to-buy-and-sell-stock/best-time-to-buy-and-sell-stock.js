/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxp = 0
    let minp = Infinity

    for (let price of prices) {
        if (price < minp) {
            minp = price
        }

        let profit = price - minp
        if (profit > maxp) {
            maxp = profit
        }
    }

    return maxp

};