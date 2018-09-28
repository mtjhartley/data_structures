const bstNode = require('./bstNode').bstNode;

class BST{
    constructor(){
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    printInOrder(node = this.root){
        if (node != null){
            this.printInOrder(node.left);
            console.log(node.value);
            this.printInOrder(node.right);
        }
    }

    printPreOrder(node = this.root){
        if (node != null){
            console.log(node.value);
            this.printPreOrder(node.left);
            this.printPreOrder(node.right);
        }
    }

    add(value){
        var newNode = new bstNode(value);

        if (this.isEmpty()){
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (current){
            if (value <= current.value) {
                if (!current.left){
                    current.left = newNode;
                    break;
                } else {
                    current = current.left
                }
            } else {
                if (!current.right) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
        return this;
    }
}


var binarySearchTree = new BST();

var rootNode = new bstNode(100);

binarySearchTree.root = rootNode;

binarySearchTree.printInOrder();

binarySearchTree.add(50);
binarySearchTree.add(150);
binarySearchTree.printInOrder();


binarySearchTree.add(25);
binarySearchTree.add(75);
binarySearchTree.add(125);
binarySearchTree.add(175);
//console.log("*************")
//Expecting 25, 50, 100, 125, 150, 175
//binarySearchTree.printInOrder();


// console.log("*************")
//Expecting 100, 50, 25, 125, 150, 175
//binarySearchTree.printPreOrder();

