class tree {
  constructor(element) {
    this.element = element;
    this.children = [];
  }

  addNode(element) {
    this.children[this.children.length] = element;
  }

  display(node) {
    console.log(node.element);
    for (const child of node.children) {
      this.display(child);
    }
  }
}

const root = new tree("root");
const child1 = new tree("child1");
const child2 = new tree("child2");

root.addNode(child1);
root.addNode(child2);

console.log("-------- Tree Structure --------");
root.display(root);

const subChild1 = new tree("sub child1");
const subChild2 = new tree("sub child2");

console.log("-------- Updated Tree Structure --------");
root.addNode(subChild1);
root.addNode(subChild2);
root.display(root);
