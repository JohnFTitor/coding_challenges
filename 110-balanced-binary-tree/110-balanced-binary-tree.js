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
 * @return {boolean}
 */

const getBalanced = (node, count, state) => {
    if (node === null) {
        return [count, state];
    }
    
    const initialValue = count + 1;
    let leftCount;
    let rightCount;
    let newState = state;
    
    if (newState) {
        [leftCount, newState] = getBalanced(node.left, initialValue, newState);  
    }
    
    if (newState) {
        [rightCount, newState] = getBalanced(node.right, initialValue, newState);
    }
    
    const difference = Math.abs(rightCount - leftCount);
    
    if (difference > 1) {
        newState = false;
    }
    
    return [Math.max(leftCount, rightCount), newState];
}

var isBalanced = function(root) {
    const state = getBalanced(root, 0, true)[1];
    return state;
};