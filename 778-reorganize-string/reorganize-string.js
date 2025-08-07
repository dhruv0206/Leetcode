/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    // Count character frequencies
    const count = {};
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    // Sort characters by frequency (descending)
    const chars = Object.keys(count).sort((a, b) => count[b] - count[a]);
    
    // Check if reorganization is possible
    if (count[chars[0]] > Math.ceil(s.length / 2)) return "";
    
    // Place characters at even indices first, then odd
    const result = new Array(s.length);
    let index = 0;
    
    for (const char of chars) {
        for (let i = 0; i < count[char]; i++) {
            if (index >= s.length) index = 1;
            result[index] = char;
            index += 2;
        }
    }
    
    return result.join('');
};