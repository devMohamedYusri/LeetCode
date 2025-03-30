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
var deleteDuplicates = function(head) {
    if (!head) return null;
    
    const dummy = new ListNode(0, head);
    let current = dummy;
    
    while (current.next) {
        if (current.next.next && current.next.val === current.next.next.val) {
            let temp = current.next;
            while (temp.next && temp.val === temp.next.val) {
                temp = temp.next;
            }
            current.next = temp.next;
        } else {
            current = current.next;
        }
    }
    
    return dummy.next;
};