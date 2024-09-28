class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class binaryTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
            this.size++;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left == null) {
                    current.left = newNode;
                    this.size++;
                    return;
                }
                current = current.left;
            }
            else {
                if (value > current.value) {
                    if (current.right == null) {
                        current.right = newNode;
                        this.size++;
                        return;
                    }
                }
                current = current.right;
            }
        }
        
    }


    inorderTraversal(){
         this.inorderTraversalRecurcive(this.root);
    }

    inorderTraversalRecurcive(node){
         if(node !== null){
            this.inorderTraversalRecurcive(node.left);
            console.log(node.value)
            this.inorderTraversalRecurcive(node.right);
         }
    }

    preoderTraversal(){
        this.preoderTraversalRecursion(this.root);
    }
    preoderTraversalRecursion(node){
        if(node !== null){
            console.log(node.value);
            this.preoderTraversalRecursion(node.left)
            this.preoderTraversalRecursion(node.right)
        }
    }

    postoderTraversal(){
        this.postoderTraversalRecursion(this.root);
    }
    postoderTraversalRecursion(node){
        if(node !== null){
            this.postoderTraversalRecursion(node.left)
            this.postoderTraversalRecursion(node.right)
            console.log(node.value);
        }
    }

    totalSize(){
        console.log("total size is :"+this.size);
    }



    search(value){
         function searchRecursive(node,target){
            if(node == null){
                return false;
            }

            if(node.value == target){
               return true; 
            }

            if(target < node.value){
                return searchRecursive(node.left, target);
            }
            if(target > node.value){
                return searchRecursive(node.right,target);
            }
        }
        return searchRecursive(this.root,value);
        }
    }

var x = new binaryTree();
x.insert(12)
x.insert(23)
x.insert(45)
x.insert(25)
x.insert(9)
x.insert(3)
// x.inorderTraverse((value) => {  
//     console.log(value);
// })
console.log("Inoder Traversal")
x.inorderTraversal();
x.totalSize();
console.log("Preoder Traversal")
x.preoderTraversal();
x.totalSize();

console.log("Postoder Traversal")
x.postoderTraversal();
x.totalSize();

console.log(x.search(3));
console.log(x.search(17));



