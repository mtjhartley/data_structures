const Stack = require('./stack').Stack;

var myStack = new Stack();



class QueueUsingStacks{
    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    enqueue(value){
        this.s1.push(value);
    }

    dequeue(){
        if (this.s1.isEmpty() && this.s2.isEmpty()){
            console.log("Queue is empty");
            return this;
        }

        //if stack 2 is empty, move elements from stack 1
        if (this.s2.isEmpty()){
            while (!this.s1.isEmpty()){
                this.s2.push(this.s1.pop().value)
            }
        }

        let ret = this.s2.peek();
        this.s2.pop();
        return ret;
    }
}

var myQueueUsingStacks = new QueueUsingStacks();
myQueueUsingStacks.enqueue(1);
myQueueUsingStacks.enqueue(2);
myQueueUsingStacks.enqueue(3);

let ret = myQueueUsingStacks.dequeue();
console.log(ret);

let ret2 = myQueueUsingStacks.dequeue();
console.log(ret2);