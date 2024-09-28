class Node{
    constructor(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element){
        var newNode = new Node(element);
        if(this.head == null){
            this.head = newNode;
            this.head.prev = null;
        }
        else{
            var current = this.head;
            while(current.next != null){
            current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
        this.size++;
    }

    addAtMiddle(element, index) {
        var newNode = new Node(element);
        if (index < 0 || index > this.size) {
            console.log("invalid index....")
            return;
        }
        if (index === 0) {
            newNode.next = this.head;
            if (this.head !== null) {
                this.head.prev = newNode;
            }
            this.head = newNode;
        } else {
            var next1 = this.head;
            var prev1 = null; // Initialize prev1 to null
            var i = 0;
            while (i < index) {
                prev1 = next1;
                next1 = next1.next;
                i++;
            }
            prev1.next = newNode;
            newNode.prev = prev1;
            newNode.next = next1;
            if (next1 !== null) {
                next1.prev = newNode;
            }
        }
        this.size++;
    }
    
    addAtFirst(element){
        var newNode = new Node(element);
        if(this.head == null){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    delete(){
        var current = this.head;
        var previous = current;

        while(current.next != null){
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size --;
    }
     
    deleteAtFirst(){
        if(this.head == null){
            console.log("list is empty!")
        }else{

            this.head = this.head.next;
        }
    }
  deleteAtIndex(index){
    if(index < 0 || index > this.size){
        return console.log("invalid position!");
    }
      var current = this.head;
      var previous = current;
      var i = 0;
      while(i < index){
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = current.next;
    //   current.next.prev = previous;
    if(current.next){
        current.next.prev = previous;
    }
    this.size--;
  }

  //                ASSIGNMENT
  findAvgAndSum(){
    var current = this.head;
    var sum = 0;
    var avg = 0;

    while(current != null){
        sum +=current.element;
        current = current.next;
    }

    console.log("sum : "+sum);
    avg = sum /this.size;
    console.log("Avearge :"+avg);
  }
  display2ndNode(){
    var current = this.head;
        if(this.head == null){
            console.log("list is empty!");
        }
        current = current.next;
        console.log("second element is : "+current.element);
  }

  displayAlternative(){
    var current = this.head;
    while(current != null){
        if(current.element % 2 == 0){
            console.log(current.element);
        }
        current = current.next;

    }
  }

    display(){
        var current = this.head;
        while(current.next != null){
            console.log(current.element);
            current = current.next;
        }
        console.log(current.element)
    }

    printBackward() {
        let current = this.head;
        while (current !== null && current.next !== null) {
            current = current.next;
        }

        while (current !== null) {
            console.log(current.element);
            current = current.prev;
        }
    }
}
var x = new DoublyLinkedList();
x.add(1)
x.add(2)
x.add(3)
x.add(4)
x.add(5)


// x.display();
// console.log("add At Middle....")
// x.addAtMiddle(10,1);
// x.display()
// console.log("add At Middle....")
// x.addAtMiddle(10,7);
// x.display()
// console.log("adding element in first position ");
// x.addAtFirst(20);
// x.display();
// console.log("printing reverse");
// x.printBackward()
// console.log("deleting element At Last")
// x.delete()
// x.display()

// console.log("deleting element At Last")
// x.deleteAtFirst()
// x.display()

// console.log("deleting element at given position :");
// x.deleteAtIndex(2);
x.display();
// console.log("printing element in reverse order:")
// x.printBackward()

// x.findAvgAndSum(); 

x.display2ndNode();
x.displayAlternative();
total = x.size
console.log("total size is :"+total)


x.printBackward();