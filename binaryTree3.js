class Node {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    
    insert(value) {
        var newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left == null) {
                        current.left = newNode;
                        return; // Exit the loop after inserting the node
                    }
                    current = current.left;
                } else if (value > current.value) {
                    if (current.right == null) {
                        current.right = newNode;
                        return; // Exit the loop after inserting the node
                    }
                    current = current.right;
                } else {
                    // Handle duplicate values (optional)
                    return; // Exit the loop without inserting if the value is already in the tree
                }
            }
        }
    }
    

    inorderTraversal() {
    this.inorderTraversalRec(this.root);
    }
    inorderTraversalRec(node){
         if(node != null){
            this.inorderTraversalRec(node.left);
            console.log(node.value);
            this.inorderTraversalRec(node.right);
         }
    }
}

var x = new BST();
x.insert(5);
x.insert(3);
x.insert(4);
x.insert(6);
x.insert(7);
x.inorderTraversal();
