/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {

    // using preorder

    const res = [];

    function preorder(node) {
        if (!node) {
            res.push("N");
            return;
        }
        res.push(node.val.toString());
        preorder(node.left);
        preorder(node.right);
    }

    preorder(root);
    return res.join(",");


        
};

/*

// using queue

if (!root) return "null";
    let q = [root], res = [];
    while (q.length) {
        let node = q.shift();
        if (node) {
            res.push(node.val);
            q.push(node.left);
            q.push(node.right);
        } else {
            res.push("null");
        }
    }
    return res.join(",");

 */



/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

    // using preorder

    const nodeValues = data.split(",");
    let i = 0;

    function buildTree() {
        if (nodeValues[i] === "N") {
            i++;
            return null;
        }
        const node = new TreeNode(parseInt(nodeValues[i]));
        i++;
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }

    return buildTree();
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 /*
 // using queue

 if (data === "null") return null;
    const arr = data.split(",");
    let root = new TreeNode(parseInt(arr[0]));
    let q = [root];
    let i = 1;
    while (q.length) {
        let node = q.shift();
        if (arr[i] !== "null") {
            node.left = new TreeNode(parseInt(arr[i]));
            q.push(node.left);
        }
        i++;
        if (arr[i] !== "null") {
            node.right = new TreeNode(parseInt(arr[i]));
            q.push(node.right);
        }
        i++;
    }
    return root;
 
  */