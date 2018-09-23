//implement a binary tree 

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BT{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insertLeft(value){
        let newNode = new Node(value);
        if (this.isEmpty()){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (current.left){
            current = current.left;
        }
        current.left = newNode;
        return this;
    }

    insertRight(value){
        let newNode = new Node(value);
        if (this.isEmpty()){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (current.right){
            current = current.right;
        }
        current.right = newNode;
        return this;
    }

    printInOrder(root = this.root){
        if (root){
            this.printInOrder(root.left);
            console.log(root.value);
            this.printInOrder(root.right);
        }
    }

    printPreOrder(root = this.root){
        if (root){
            console.log(root.value);
            this.printPreOrder(root.left);
            this.printPreOrder(root.right);
        }
    }

    printPostOrder(root = this.root){
        if (root){
            this.printPostOrder(root.left);
            this.printPostOrder(root.right);
            console.log(root.value);
        }
    }
}

let root = new Node(1);
let leftNode = new Node(2);
let rightNode = new Node(3);

const bt = new BT();

bt.insertLeft(1);
bt.insertLeft(2);
bt.insertRight(3);

// bt.printInOrder();

// bt.printPreOrder();

bt.printPostOrder();
