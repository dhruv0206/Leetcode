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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    // if (root === null) {
    //     return null
    // }
    // let temp = root.left
    // root.left = root.right
    // root.right = temp
    // invertTree(root.left)
    // invertTree(root.right)


    // return root
    if (!root) return null; // \U0001f51a Base case

    // \U0001f501 Invert left and right subtrees
    const left = invertTree(root.left);
    const right = invertTree(root.right);

    // \U0001f504 Swap the children
    root.left = right;
    root.right = left;

    return root; // ✅ Return the root of inverted tree

};