class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
        this.size = 0;
    }
    
    insert(value){
       this.root = this.insertRecursive(this.root, value);
    }
    insertRecursive(current,value){
        if(current === null){
            return new TreeNode(value);
        }
        if(value < current.value){
            current.left = this.insertRecursive(current.left,value);
        }else if(value > current.value){
            current.right = this.insertRecursive(current.right,value);
        }
        return current;
    }

    inoderTraversal(){
        this.inoderTraversalRecursive(this.root);
    }

    inoderTraversalRecursive(node){
    if(node !== null){
        this.inoderTraversalRecursive(node.left);
        console.log(node.value);
        this.inoderTraversalRecursive(node.right);
    }
    }

}

var x = new BinaryTree();
x.insert(1)
x.insert(2)
x.insert(3)
x.insert(4)
x.insert(5)
x.inoderTraversal()