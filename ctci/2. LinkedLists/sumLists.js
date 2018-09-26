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

let firstValue = new SingleLinkedList();
let secondValue = new SingleLinkedList();
firstValue.addFront(6);
firstValue.addFront(1);
firstValue.addFront(7);
firstValue.printList();

secondValue.addFront(2);
secondValue.addFront(9);
secondValue.addFront(5);
secondValue.printList();

//617 + 295

const addLists = (firstList, secondList) => {
    firstListCurrent = firstList.head;
    secondListCurrent = secondList.head;
    thirdList = new SingleLinkedList()
    thirdList.head = new Node(null);
    thirdListCurrent = thirdList.head;
    let carry = false;
    while (firstListCurrent && secondListCurrent){
        let value = firstListCurrent.value + secondListCurrent.value;
        if (carry) value++;

        if (value >= 10) {
            carry = true;
            value = value % 10;
        }
        console.log('value: ', value)
        thirdListCurrent.next = new Node(value);
        thirdListCurrent = thirdListCurrent.next;
        firstListCurrent = firstListCurrent.next;
        secondListCurrent = secondListCurrent.next;
    }
    thirdList.removeAtIndex(0);
    return thirdList;
}

thirdList = addLists(firstValue, secondValue);

thirdList.printList();

