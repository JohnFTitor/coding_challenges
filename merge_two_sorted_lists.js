function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}

let mySolution = function(list1, list2) {
  let head1 = list1;
  let head2 = list2;
  let headResult = list1;
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }
  
  let temp = head2.next;
  // First Lesser Value
  if (head2.val <= head1.val) {
      head2.next = head1;
      head1 = head2;
      headResult = head2;
      head2 = temp;
  }
  
  while(head2) {
    const nextNode = head1.next;
    temp = head2.next;
    
    if (nextNode) {
     if (head2.val > head1.val && head2.val > nextNode.val) {
      head1 = head1.next; 
      console.log(headResult); 
      continue;
      }
      head1.next = head2;
      head2.next = nextNode;
      head2 = temp;
      continue;
    }
    head1.next = head2;
    break;
  }
  return headResult;
}


var mergeTwoLists = function(list1, list2) {
  let resultList = new ListNode('head');
  let tail = resultList;
  
  while (true) {
    
    if (!list1) {
      tail.next = list2;
      break;
    }
    if (!list2) {
      tail.next = list1;
      break;
    }
    
    
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
  
    tail = tail.next;
  }
  
  return resultList.next;
};
