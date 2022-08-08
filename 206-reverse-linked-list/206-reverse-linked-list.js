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

const iterativelySolution = () => {
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
}

const recursiveSolution = (head) => {
    if (!head || !head.next) return [head, head];
    
    const nextNode = head.next;
    head.next = null;
    const [resultNode, resultHead] = recursiveSolution(nextNode);
    resultNode.next = head;
    
    return [resultNode.next, resultHead];
}

var reverseList = function(head) {
    return recursiveSolution(head)[1];
};