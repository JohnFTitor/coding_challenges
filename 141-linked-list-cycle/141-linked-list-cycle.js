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
 */
var hasCycle = function(head) {
    let current = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        current = current.next;
        if (fast === current) return true
    }
    return false;
};