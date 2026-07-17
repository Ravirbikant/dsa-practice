function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getIntersectionNode(headA, headB) {
    let currentA = headA;
    let currentB = headB;

    while (currentA !== currentB){
        currentA = currentA === null ? headB : currentA.next;
        currentB = currentB === null ? headA : currentB.next;
    }

    return currentA;
}