/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let countMap = new Map()

    for (let char of s1) {
        countMap.set(char, (countMap.get(char) || 0) + 1)
    }

    let start = 0; let windowSize = s1.length; let counter = countMap.size

    for (let end = 0; end < s2.length; end++) {
        let char = s2[end]
        if (countMap.has(char)) {
            countMap.set(char, countMap.get(char) - 1)
        }
        if (countMap.get(char) === 0) {
            counter--;
        }

        while (counter === 0) {
            if (end - start + 1 === windowSize) return true;
            if (countMap.has(s2[start])) {
                countMap.set(s2[start], countMap.get(s2[start]) + 1)
            }
            if (countMap.get(s2[start]) === 1) {
                counter++;
            }

            start++;

        }
    }



    return false
};