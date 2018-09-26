const Node = require('./node').Node;

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value){
        let newNode = new Node(value);
        this.size++;
        if (this.head == null){
            this.head = newNode;
            this.tail = this.head;
            return this;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            return this;
        }
    }

    dequeue(){
        if (this.head){
            let ret = this.head;
            this.head = this.head.next;
            if (this.tail == ret){
                this.tail = null;
            }
            this.size--;
            return ret;
        } else {
            console.log("Can't dequeue, queue is empty!");
            return this;
        }
    }

    getSize(){
        return this.size;
    }

    peek(){
        if (this.head){
            return this.head.value;
        } else {
            console.log("Empty queue, can't peek!");
        }
    }

    print(){
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
}

// var myqueue = new Queue();
// myqueue.enqueue(1);
// myqueue.dequeue();
// myqueue.dequeue();
// myqueue.peek();
// myqueue.enqueue(2);
// myqueue.enqueue(3);
// myqueue.peek();
// myqueue.print();
// console.log(myqueue.getSize());

module.exports = {
    Queue: Queue
}