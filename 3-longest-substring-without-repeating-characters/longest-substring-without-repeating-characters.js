/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let maxLen = 0
    let charMap = new Map()

    for (let right = 0; right < s.length; right++) {
        if (charMap.has(s[right])) { 
            left = Math.max(left, charMap.get(s[right]) + 1); 
            }

        charMap.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen;

};

// claude animation link
// https://claude.ai/artifacts/ca9bb91e-59ab-4ef3-bcdf-6127454f309a

//claude chat link
// https://claude.ai/chat/dbcb5b8d-d211-4beb-97de-fe615bea8d30

// without two loops approach

// var lengthOfLongestSubstring = function(s) {
//     let n = s.length;
//     let maxLength = 0;
//     let lastIndex = new Map();
    
//     let start = 0;
//     for (let end = 0; end < n; end++) {
//         let currentChar = s[end];
//         start = Math.max(start, lastIndex.get(currentChar) + 1 || 0);
//         maxLength = Math.max(maxLength, end - start + 1);
//         lastIndex.set(currentChar, end);
//     }
    
//     return maxLength;
// };