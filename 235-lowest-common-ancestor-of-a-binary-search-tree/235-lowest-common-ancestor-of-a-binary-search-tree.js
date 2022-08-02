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
    const [max, min] = p.val > q.val ? [p, q] : [q, p];
    
    if (root === max || root === min) return root;
    
    if (max.val > root.val && min.val < root.val) return root;
    
    if (max.val < root.val) return lowestCommonAncestor(root.left, p, q);
    
    return lowestCommonAncestor(root.right, p, q);
};