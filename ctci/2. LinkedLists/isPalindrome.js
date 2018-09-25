//Write code to find the kth to last element of a singly linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    getValue() {
        return this.value;
    }

    getNext() {
        return this.next;   
    }

    setValue(value) {
        this.value = value;
    }
    
    setNext(next) {
        this.next = next;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    addFront(value){
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            return true;
        } else {
            newNode.setNext(this.head);
            this.head = newNode;
            return true;
        }       
    }

    printList(value){
        let strList = "["
        let current = this.head
        while (current) {
            strList += current.getValue();
            if (current.getNext()){
                strList += ", "
            }
            current = current.getNext();
        }
        strList += "]"
        console.log(strList);
    }

    addBack(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            return true;
        }
        let current = this.head;
        while (current.getNext()) {
            current = current.getNext();
        }
        current.setNext(newNode);
    }

    size(){
        if (this.isEmpty()){
            console.log("The size of the list is: " + 0);
            return 0;
        }
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.getNext();
        }
        console.log("The size of the list is: " + count);
        return count;
    }

    findValue(targetValue){
        if (this.isEmpty()){
            return false;
        }
        let index = 0;
        let current = this.head;
        while (current){
            if (current.getValue() == targetValue){
                console.log("found ya")
                return index;
            }
            index++;
            current = current.getNext();
        }
        return false;
    }

    removeAtIndex(targetIndex){
        if (this.isEmpty() || targetIndex > this.size()-1) {
            return false;
        }
        if (targetIndex == 0){
            this.head = this.head.next;
            this.printList();
            return true;
        }

        let current = this.head;
        let previous = current;
        let index = 0;
        while (index < targetIndex){
            previous = current;
            current = current.getNext();
            index++;
        }
        previous.setNext(current.getNext());
        current.setNext(null);
        return true;
    }

    removeValue(targetValue){
        if (this.isEmpty()|| !this.findValue(targetValue)){
            return false;
        }
        return this.removeAtIndex(this.findValue(targetValue));
    }
}


var myLL = new SingleLinkedList();

myLL.addBack(1);
myLL.addBack(2);
myLL.addBack(3);
myLL.addBack(2);
myLL.addBack(1);

myLL.printList();

const isPalindrome = (linkedList) => {
    var fast = linkedList.head;
    var slow = linkedList.head;

    var stack = [];

    //Push the first half of the linkedlist to the stack, when fast reaches the end
    //we know slow is in the middle
    while (fast && fast.next){
        stack.push(slow.value);
        slow = slow.next;
        fast = fast.next.next;
    }

    //odd number of elements, skip the middle element.
    if (fast){
        slow = slow.next;
    }

    while (slow){
        var top = stack.pop();
    
        if (top != slow.value){
            return false;
        }
        slow = slow.next;
    }   
    return true;
}

console.log(isPalindrome(myLL));