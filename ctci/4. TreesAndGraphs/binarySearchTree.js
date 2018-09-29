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

    printPostOrder(node = this.root){
        if (node != null){
            this.printPostOrder(node.left);
            this.printPostOrder(node.right);
            console.log(node.value);
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

    height(node = this.root){
        if (!node){
            return 0;
        }
        var leftHeight = this.height(node.left);
        var rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    contains(value){
        var current = this.root;
        while (current){
            if (value == current.value){
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            }
        }
        return false;
    }

    findMin(){
        if (this.isEmpty()){
            return false;
        }
        var current = this.root;
        while (current.left){
            current = current.left;
        }
        return current;
    }

    remove(value){
        this.root = this._removeInner(value, this.root); 
    }

    _removeInner(value, node){
        if (node){
            if (value < node.value){
                node.left = this._removeInner(value, node.left);
            } else if (value > node.value) {
                node.right = this._removeInner(value, node.right);
            } else if (node.left && node.right){
                node.value = this.findMin(node.right);
                node.right = this._removeInner(node.value, node.right);
            } else {
                node = node.left || node.right;
            }
        }
        return node;
    }

    //delete has 3 cases, delete a leaf, one child, two children
    //deleting a leaf is straight forward
    //deleting a node with one child, just point the parent to the grand child
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
// console.log(binarySearchTree.contains(25))
//console.log("*************")
//Expecting 25, 50, 100, 125, 150, 175
binarySearchTree.printInOrder();
binarySearchTree.remove(100);
console.log("*************")
binarySearchTree.printInOrder();

// console.log("*************")
//Expecting 100, 50, 25, 125, 150, 175
//binarySearchTree.printPreOrder();
