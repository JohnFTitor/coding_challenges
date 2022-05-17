/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 
 https://leetcode.com/problems/linked-list-cycle/submissions/
 
 */
var hasCycle = function(head) {
  const values = new Map();
  let current = head;
  while (current !== null) {
    values.set(current, true);
    if (values.has(current.next)) {
      return true;
    }
    current = current.next;
  }
  return false;
};
