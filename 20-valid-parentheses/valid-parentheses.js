/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const bracketMap = new Map([
    [')', '('],
    [']', '['], 
    ['}', '{']
]);

    for (const char of s) {
        if (bracketMap.has(char)) {
            if (stack.length && stack[stack.length - 1] === bracketMap.get(char)) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;

};