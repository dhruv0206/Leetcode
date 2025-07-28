/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = findLength(head);
    let i = 0,
        traverseTill = length - n - 1;
    if (traverseTill === -1) return head.next;
    let curr = head;
    while (i < traverseTill) {
        curr = curr.next;
        i++;
    }
    curr.next = curr.next.next;
    return head;

    function findLength(head) {
        let count = 0;
        if (head === null) return count;
        let curr = head;
        while (curr !== null) {
            count++;
            curr = curr.next;
        }
        return count;
    }
};