const Node = require('./node').Node;

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
        return this;
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
            //console.log("The top of the stack is " + this.head.getValue());
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

module.exports = {
    Stack: Stack,
    Node: Node    
};