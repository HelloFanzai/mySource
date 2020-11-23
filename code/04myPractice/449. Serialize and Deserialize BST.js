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
let serialize = (root, result = []) => {
    if (root) {
        result.push(root.val);
        result.push(...serialize(root.left));
        result.push(...serialize(root.right));
    } else {
        result.push(null);
    }
    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
let deserialize = (data) => {
    let theVal = data.shift();
    if (theVal == null) return null;
    let theNode = new TreeNode(theVal);
    theNode.left = deserialize(data);
    theNode.right = deserialize(data);
    return theNode;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */