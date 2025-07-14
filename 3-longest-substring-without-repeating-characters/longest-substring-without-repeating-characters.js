/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let maxLen = 0
    let charSet = new Set()

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++
        }

        charSet.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen;

};

// claude animation link
// https://claude.ai/artifacts/ca9bb91e-59ab-4ef3-bcdf-6127454f309a

//claude chat link
// https://claude.ai/share/f1121c78-8884-4887-8f22-2252746475ee