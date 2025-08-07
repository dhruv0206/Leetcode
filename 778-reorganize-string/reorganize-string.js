/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    // Count character frequencies using Map
    const count = new Map();
    for (const char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }
    
    // Sort characters by frequency (descending)
    const chars = Array.from(count.keys()).sort((a, b) => count.get(b) - count.get(a));
    
    // Check if reorganization is possible
    if (count.get(chars[0]) > Math.ceil(s.length / 2)) return "";
    
    // Place characters at even indices first, then odd
    const result = new Array(s.length);
    let index = 0;
    
    for (const char of chars) {
        for (let i = 0; i < count.get(char); i++) {
            if (index >= s.length) index = 1;
            result[index] = char;
            index += 2;
        }
    }
    
    return result.join('');
};