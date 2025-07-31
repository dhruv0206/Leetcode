/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let index = 0;
    const map = new Map();
    inorder.forEach((val, i) => map.set(val, i));

    function helper(start, end) {
        if (start > end) return null;

        // const rootVal = preorder[index++];
        const rootVal = preorder[index];
        index = index + 1;
        const node = new TreeNode(rootVal);
        const mid = map.get(rootVal);

        node.left = helper(start, mid - 1);
        node.right = helper(mid + 1, end);
        return node;
    }

    return helper(0, inorder.length - 1);

};

/*
O(n2)

if (!preorder.length) return null;
    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);
    let index = inorder.indexOf(rootVal);

    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    return root;
 */