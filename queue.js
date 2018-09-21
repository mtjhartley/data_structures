class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }

    getValue(){
        return this.value;
    }

    getNext(){
        return this.next;
    }

    setValue(value){
        this.value = value;
    }

    setNext(next) {
        this.next = next;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.head === null;
    }

    //implement enqueue, dequeue, size
    enqueue(value){
        let newNode = new Node(value);
        this.size++;
        if (this.tail){
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (this.isEmpty()){
            this.head = newNode;
            return this;
        }
    }

    dequeue(){
        if (this.head){
            let ret = this.head;
            this.head = this.head.getNext();
            if (this.tail == ret){
                this.tail == null;
            }
            return ret;
        } else {
            console.log("can't dequeue");
        }
    }

    print(value){
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

    getSize() {
        console.log(this.size);
        return this.size;
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.print();
myQueue.enqueue(2);
myQueue.print();
myQueue.enqueue(3);
myQueue.print();
myQueue.getSize();
myQueue.dequeue();
myQueue.print();

myQueue.dequeue();
myQueue.print();

myQueue.dequeue();
myQueue.print();
myQueue.dequeue();


