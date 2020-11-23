/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
/**
* Recursive Solution
*/
var isSameTree = function(p, q) {
	// if both are null end is found
    if(!p && !q) return true;
	// if any one is null, tree is not same
    if (!p || !q) return false;
	// if values do not match, tree is not same
    if(p.val !== q.val) return false;
    // check both branches (left & right)
   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};