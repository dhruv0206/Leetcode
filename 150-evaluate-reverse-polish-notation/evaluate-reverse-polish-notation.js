/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (const c of tokens) {
        if (c === '+') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a + b);
        } else if (c === '-') {
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
            stack.push((a / b) | 0);
        } else {
            stack.push(parseInt(c));
        }
    }
    return stack[0];
    
    
};