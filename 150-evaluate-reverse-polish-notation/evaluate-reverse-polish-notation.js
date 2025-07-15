/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (const c of tokens) {
        // const c = s.charAt(0);
        if (c === '+') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a + b);
        } else if (c === '-' && c.length === 1) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a - b);
        } else if (c === '*') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a * b);
        } else if (c === '/') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push((a / b) | 0); // Truncate towards zero
        } else {
            stack.push(parseInt(c));
        }
    }
    return stack[0];
    
    
};