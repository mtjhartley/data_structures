//Write code to remove duplicates from an unsorted linked list
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
myLL.addBack(1);
myLL.addBack(2);
myLL.addBack(4);
myLL.addBack(3);
myLL.addBack(2);
myLL.addBack(3);
myLL.addBack(4);

myLL.printList();

//o(n^2) solution
const removeDuplicates = (linkedList) => {
    var current = linkedList.head;
    while (current){
        var runner = current;
        while (runner.next){
            if (runner.next.value == current.value){
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        current = current.next;
    }
    return linkedList;
}

//O(n) solution using hash
const removeDuplicatesUsingHash = (linkedList) => {
    var map = {}
    var current = linkedList.head;
    var previous = null;
    while (current){
        if (map[current.value]){
            previous.next = current.next;
        } else {
            map[current.value] = true;
            previous = current; //previous is always one behind the node (current)
        }
        current = current.next;
    }
    return linkedList;
}

// 1 2 1 3
// current = 1
// previous = null
// map = { 1: true}
// previous = 1
// current = 2
// --------------
// current = 2
// map = {1: true, 2: true}
// previous = 2
// current = 1
// ----------
// current = 1
// if (map{1} true!)
// previous = 2.next = current = 1.next == 3
// 1, 2, 3

// var uniqueLL = removeDuplicates(myLL);
// uniqueLL.printList();


var uniqueLL = removeDuplicatesUsingHash(myLL);
uniqueLL.printList();
