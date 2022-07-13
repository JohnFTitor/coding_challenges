/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const result = new ListNode('head');
    let current = result;
    let extra = 0;
    
    while (true) {
        
        if (!l1) {
            current.next = l2;
            break;
        }
        
        if (!l2) {
            current.next = l1;
            break;
        }
        
        let num = l1.val + l2.val + extra;
        l1 = l1.next;
        l2 = l2.next;
        
        if (num >= 10) {
            const numString = num.toString();
            num = parseInt(numString[1]);
            extra = parseInt(numString[0]);
        } else {
            extra = 0;
        }
        
        current.next = new ListNode(num);
        current = current.next;
    }
    
    while (extra !== 0) {
        if (current.next) {
            current.next.val += extra;            
        } else {
            current.next = new ListNode(extra);
        }
        
        if (current.next.val >= 10) {
            const numString = current.next.val.toString();
            current.next.val = parseInt(numString[1]);
            extra = parseInt(numString[0]);
        } else {
            extra = 0;
        }
        
        current = current.next;
    }
    
    return result.next;
};