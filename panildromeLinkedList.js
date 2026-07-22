class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function createLinkedList(arr) {
    const dummy = new ListNode();
    let current = dummy;

    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
}

/**
 * @param {ListNode} head
 * @returns {boolean}
 */
function isPalindrome(head) {
    const reverseList = (head) => {
        let current = head;
        let later = current.next;
        let prev = null

        while(current){
            current.next = prev;
            prev = current;
            current = later;
            later = later?.next ?? null;
        }

        head = prev;

        return head;
    }

    if(!head.next) return true;

    let slow = head;
    let fast = head.next;

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = fast.next ? reverseList(slow.next.next) : reverseList(slow.next);
    slow.next = null;
    let current = head;

    while(current){
        if(current.val !== second.val) return false;
        current = current.next;
        second = second.next;
    }

    return true;
}

// -------------------- Test Cases --------------------

const testCases = [
    {
        input: [1],
        expected: true,
    },
];

testCases.forEach(({ input, expected }, index) => {
    const head = createLinkedList(input);
    const result = isPalindrome(head);

    console.log(
        `Test ${index + 1}:`,
        result === expected ? "✅ PASS" : "❌ FAIL",
        `| Input: [${input}]`,
        `| Expected: ${expected}`,
        `| Got: ${result}`
    );
});