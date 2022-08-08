/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const stack = [];
    let current = head;
    const resultHead = new ListNode('Head');
    let result = resultHead;
    
    while (current) {
        const nextNode = current.next;
        current.next = null;
        
        stack.push(current)
        
        current = nextNode;
    }
    
    while (stack.length !== 0) {
        const node = stack.pop();
        result.next = node;
        result = result.next;
    }
    
    return resultHead.next;
};