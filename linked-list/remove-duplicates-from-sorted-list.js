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
    // if(head){
    //     return null;
    // }
    const dummy=new ListNode(head?.val);
    let current=dummy;
    while(head!==null){
                    console.log("out",head);
        if(current.val==head.val){
            head=head.next;
               console.log("if",head);

        }else{
            current.next=head;
            head=head.next;
            current=current.next;
         console.log("else",head);
        }
    }

    current.next=null;
    return dummy;
};