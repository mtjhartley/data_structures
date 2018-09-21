//push, pop, peek, is empty

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

class Stack{
    constructor(){
        this.head = null;
    }

    isEmpty(){
        return this.head === null;
    }

    push(value){
        let newNode = new Node(value);
        newNode.setNext(this.head);
        this.head = newNode;
    }

    pop(){
        if (this.head){
            let current = this.head;
            this.head = this.head.next;
            return current;
        }
        console.log("empty head can't pop");
    }

    peek(){
        if (this.isEmpty()){
            console.log("can't peek, empty stack");

        } else {
            console.log("The top of the stack is " + this.head.getValue());
            return this.head;
        }
    }

    print(){
        let oppStack = new Stack();
        let current = this.head;
        while (current){
            let value = this.pop().getValue();
            oppStack.push(value);
            console.log(value);
            current = current.getNext();
        }
        let reverseCurrent = oppStack.head;
        while (reverseCurrent){
            this.push(reverseCurrent.getValue());
            reverseCurrent = reverseCurrent.getNext();
        }
        return true;
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.print();
myStack.peek();
// myStack.pop();
// myStack.peek();
// myStack.pop();
// myStack.peek();
// myStack.pop();
// myStack.peek();
// myStack.pop();
