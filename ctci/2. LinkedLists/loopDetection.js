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

var A = new Node("A");
var B = new Node("B");
var C = new Node("C");
var D = new Node("D");
var E = new Node("E");

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = C;

var loopedList = new SingleLinkedList();
loopedList.head = A;

//loopedList.printList();

const findBeginningOfLoop = (head) => {
    let slow = head;
    let fast = head;


    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        console.log("value of slow: " + slow.getValue() + " fast: " + fast.getValue())
        if (slow == fast){
            break;
        }
    }

    if (fast == null || fast.next == null){
        return null;
    }

    slow = head;
    //when we move slow to the front, and keep fast at the meeting point, they are both
    //k amount of steps away from loop start. moving at teh same pace, they will meet there.
    while (slow != fast){
        slow = slow.next;
        fast = fast.next;
    }

    return fast;
}

var loopBegin = findBeginningOfLoop(loopedList.head);
console.log(loopBegin.getValue());