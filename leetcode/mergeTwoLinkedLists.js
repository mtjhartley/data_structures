// function mergeTwoLists(l1, l2) {
//     let l = new ListNode(null);
//     const preHead = l;
  
//     while (l1 && l2) {
//       if (l1.val < l2.val) {
//         l.next = l1;
//         l1 = l1.next;
//       } else {
//         l.next = l2;
//         l2 = l2.next;
//       }
  
//       l = l.next;
//     }
  
//     l.next = l1 || l2;
  
//     return preHead.next;
//   }

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const mergeTwoLists = (l1, l2) => {
    let list3 = new ListNode(null);
    const fakeStart = list3;

    while (l1 && l2){
        if (l1.val < l2.val){
            list3.next = l1;
            l1 = l1.next;
        } else {
            list3.next = l2;
            l2=l2.next;
        }
        list3 = list3.next;
    }
    list3.next = l1 || l2;

    return fakeStart.next;
}

