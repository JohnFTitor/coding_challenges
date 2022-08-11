/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let result: ListNode = new ListNode(0);
    const resultHead: ListNode = result;
    
    while (true){
        if (!list1) {
            result.next = list2;
            break;
        }
        
        if (!list2) {
            result.next = list1;
            break;
        }
        
        if (list1.val <= list2.val) {
            result.next = list1;
            list1 = list1.next;
        } else {
            result.next = list2;
            list2 = list2.next;
        }
        
        result = result.next;
    } 
    
    return resultHead.next;
};