class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      let newNode = new Node(data);
  
      if (this.root === null) {
        this.root = newNode;
        return;
      }
  
      let currentNode = this.root;
      while (true) {
        if (newNode.data < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  
    traverse(callback) {
      if (this.root === null) {
        return;
      }
  
      let currentNode = this.root;
      while (currentNode !== null) {
        callback(currentNode.data);
        if (currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }  
  }

  var x = new BinaryTree();
x.insert(1);
x.insert(2);
x.insert(3);
x.insert(4);
x.insert(5);
x.traverse(data => {
    console.log(data);
});
