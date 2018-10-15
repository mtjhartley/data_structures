const bstNode = require('./bstNode').bstNode;

class BST{
    constructor(){
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    //MOVING LEFT TO RIGHT THROUGH A TREE
    printInOrder(node = this.root){
        if (node != null){
            this.printInOrder(node.left);
            console.log(node.value);
            this.printInOrder(node.right);
        }
    }

    getInOrder(node = this.root, memo = []){
        if (node != null){
            this.getInOrder(node.left, memo);
            memo.push(node.value);
            this.getInOrder(node.right, memo);
        }
        return memo;
    }

    //CREATING A COPY OF THE TREE
    printPreOrder(node = this.root){
        if (node != null){
            console.log(node.value);
            this.printPreOrder(node.left);
            this.printPreOrder(node.right);
        }
    }

    getPreOrder(node = this.root, memo = []){
        if (node != null){
            memo.push(node.value);
            this.getPreOrder(node.left, memo);
            this.getPreOrder(node.right, memo);
        }
        return memo;
    }


    //REMOVAL OF NODES FROM THE TREE
    printPostOrder(node = this.root){
        if (node != null){
            this.printPostOrder(node.left);
            this.printPostOrder(node.right);
            console.log(node.value);
        }
    }

    getPostOrder(node = this.root, memo = []){
        if (node != null){
            this.getPostOrder(node.left, memo);
            this.getPostOrder(node.right, memo)
            memo.push(node.value);
        }
        return memo;
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

    lowestCommonAncestor(node = this.root, value1, value2){
        while (node){
            if (node.value > value1 && node.value > value2){
                node = node.left;
            } else if (node.value < value1 && node.value < value2){
                node = node.right
            } else {
                break;
            }
        }
        return node;
    }

    lowestCommonAncestorRecursive(node = this.root, value1, value2){
        if (!node) return null;

        if (node.value > value1 && node.value > value2){
            return this.lowestCommonAncestorRecursive(node.left, value1, value2);
        }
        if (node.value < value1 && node.value < value2){
            return this.lowestCommonAncestorRecursive(node.right, value1, value2)
        }
        return node;
    }

//     struct node *lca(struct node* root, int n1, int n2) 
// { 
//     if (root == NULL) return NULL; 
  
//     // If both n1 and n2 are smaller than root, then LCA lies in left 
//     if (root->data > n1 && root->data > n2) 
//         return lca(root->left, n1, n2); 
  
//     // If both n1 and n2 are greater than root, then LCA lies in right 
//     if (root->data < n1 && root->data < n2) 
//         return lca(root->right, n1, n2); 
  
//     return root; 
// } 

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
// binarySearchTree.printInOrder();
// binarySearchTree.remove(100);
console.log("*************")
// binarySearchTree.printInOrder();
console.log(binarySearchTree.lowestCommonAncestor(rootNode, 75, 125));
console.log(binarySearchTree.lowestCommonAncestorRecursive(rootNode, 75, 125)); //O(height), plus O(height) space for the callstack
// console.log("*************")
//Expecting 100, 50, 25, 125, 150, 175
//binarySearchTree.printPreOrder();



binarySearchTree.printInOrder();

var inOrderArray = binarySearchTree.getInOrder();
console.log(inOrderArray);

var preOrderArray = binarySearchTree.getPreOrder();
console.log(preOrderArray);

var newTree = new BST();
newTree.root = new bstNode(preOrderArray[0]);
for (var i = 1; i < preOrderArray.length; i++){
    newTree.add(preOrderArray[i]);
}

console.log(newTree.getPreOrder());
// console.log(newTree.getPostOrder());
