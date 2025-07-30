/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // DFS
    if(root === null) return 0

    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)

    return 1 + Math.max(leftDepth, rightDepth)
};

/*
// BFS
// Non recursive

if (!root) {
        return 0;
    }

    const queue = [];
    queue.push(root);
    let depth = 0;

    while (queue.length > 0) {
        depth++;

        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return depth;    

 */