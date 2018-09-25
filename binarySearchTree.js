    // function to be implemented 
    // insert(data) 
    // remove(data) 
                  
  
    // Helper function 
    // findMinNode() 
    // getRootNode() 
    // inorder(node) 
    // preorder(node)                
    // postorder(node) 
    // search(node, data) 

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
        this.size = 0;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        let newNode = new Node(value);

        if (this.isEmpty()){
            this.root = newNode;
            this.size++;
            return this;
        }
        let current = this.root;

        while (current){
            if (value < current.value){
                if (!current.left){
                    current.left = newNode;
                    this.size++;
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if (!current.right){
                    current.right = newNode;
                    this.size++;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
        return this;
    }

    findMin(node = this.root){
        if (!node){
            return false;
        }
        if (node.left){
            return this.findMin(node.left);
        }
        return node.value;
    }

    findMax(node = this.root){
        if (!node){
            return false;
        }
        if (node.right){
            return this.findMax(node.right);
        }
        return node.value;
    }

    height(node = this.root){
        if (!node){
            return 0;
        }
        var leftHeight = this.height(node.left);
        var rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    lowestCommonAncestor(root = this.root, p, q){
        if (!root || root === p || root === q){
            console.log("in hte top fail")
            return root;
        }
        const left = this.lowestCommonAncestor(root.left, p, q);
        const right = this.lowestCommonAncestor(root.right, p, q);
        if (!left){
            console.log("in the !left")
            return right;
        }
        if (!right){
            console.log("in the !right")

            return left;
        }
        console.log('in the bottom return');
        return root;
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

    printToArray(root = this.root, array = []){
        if (root){
            array.push(root.value);
            this.printToArray(root.left, array);
            this.printToArray(root.right, array);
        } 
        if (array.length === this.size){
            console.log(array);
        }

    }
}

let bst = new BinarySearchTree();
bst.insert(3);
// bst.printInOrder();

bst.insert(1);


bst.insert(5);

bst.insert(4);
bst.insert(6);

bst.insert(.5);
bst.insert(2);
bst.insert(.25);
bst.insert(.75);
bst.insert(.375);


// bst.printInOrder();
bst.printPreOrder();
bst.printToArray();

// console.log(bst.findMin());
// console.log(bst.height());

var oneNode = new Node(1);
var twoNode = new Node(5);
console.log(bst.lowestCommonAncestor(.375, .5)
);

const inorderTraversal = root => {
    if (!root) return [];
    
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
  };