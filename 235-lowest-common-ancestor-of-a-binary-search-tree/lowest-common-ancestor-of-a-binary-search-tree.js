/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while (root !== null) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left; // Go left
        } else if (p.val > root.val && q.val > root.val) {
            root = root.right; // Go right
        } else {
            return root; // Found split point (LCA)
        }
    }
    return null;
    
};