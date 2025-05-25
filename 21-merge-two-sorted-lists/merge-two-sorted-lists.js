/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if(list1 === null){
        return list2
    }else if(list2===null){
        return list1
    }


    let curr1 = null, curr2 = null
    if (list1.val <= list2.val) {
        curr1 = list1
        curr2 = list2
    } else {
        curr1 = list2
        curr2 = list1
    }

    let newHead = curr1
    console.log("CURR LIST BEFORE", curr1, curr2)
    // console.log("CURR LIST NEXt", curr1Next, curr2Next)
    while (curr1 && curr2  ) {
        if (curr2.val >= curr1.val  ) {
            if(curr1.next!=null && curr2.val > curr1.next.val){
                curr1 = curr1.next
                continue
            }
            let curr1Next = curr1.next
            let curr2Next = curr2.next
            console.log("CURR LIST NEXt", curr1Next, curr2Next)

            curr1.next = curr2
            curr2.next = curr1Next
            // curr2 = curr2Next
            console.log("CURR LISTc before moving eahd", curr1, curr2)
            curr1 = curr1.next
            curr2 = curr2Next
            console.log("CURR LIST", curr1, curr2)
            console.log("My return list", newHead)

        }else{
            curr1 = curr1.next
        }

    }
    return newHead
};