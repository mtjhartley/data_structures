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
        this.printList();
        return true;
    }



    //removeAtIndex

    //removeValue
}


const myList = new SingleLinkedList();
myList.printList();
myList.size();

myList.addFront(0);
myList.printList();
myList.size();

myList.addBack(3);
myList.printList();
myList.size();

myList.addFront(1);
myList.printList();
myList.size();
myList.findValue(3);
myList.findValue(4);
myList.printList();
myList.removeAtIndex(2);

