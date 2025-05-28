/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let sum = 0
    let i = 0;
    let n = s.length

    while (i < n) {
        console.log("S", romanMap[s[i]])
        if (i < n - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            sum += romanMap[s[i + 1]] - romanMap[s[i]]
            i += 2
        } else {
            sum += romanMap[s[i]]
            i += 1
        }
    }

    return sum;

};