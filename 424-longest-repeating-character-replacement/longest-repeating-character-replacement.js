/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0, maxCount = 0;
    const freq = new Map();
    let res = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        freq.set(char, (freq.get(char) || 0) + 1);
        maxCount = Math.max(maxCount, freq.get(char));

        if (right - left + 1 - maxCount > k) {
            freq.set(s[left], freq.get(s[left]) - 1);
            left++;
        }
        res = Math.max(res, right - left + 1);
    }

    return res;

};

// claude chat link
// https://claude.ai/chat/50d71e5d-216f-4028-bc01-738567d1283e

// claude animation link
// https://claude.ai/artifacts/70bc2c17-825f-4bf4-a0ce-8e084ccc6a1d