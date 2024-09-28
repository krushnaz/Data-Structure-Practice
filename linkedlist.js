class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        var newNode = new Node(element);
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    deleteAt(index) {
        if (index < 0 || index > this.size) {
         return console.log("invalid size");
        } else {
            var current = this.head;
            var previous = current;
            var i = 1;
            if (index == 0) {
                this.head = this.head.next;
            }
            else {
                while (i < index) {
                    i++;
                    previous = current;
                    current = current.next;
                }
                // console.log("current is :" + current.element);
                // console.log("previous is :" + previous.element);
                previous.next = current.next;
            }

        }
    }

    deleteByElement(element){
        var current = this.head;
        var previous = null;

        while(current != null){
            if(current.element === element){
                if(previous == null){
                    this.head = current.next;
                }else{
                    previous.next = current.next;
                }
                this.size --;
            return current.element;
            }
            previous = current;
            current = current.next;

        }
    }

    display() {
        var current = this.head;
        var str = " ";
        while (current) {
            str += current.element + " ";
            current = current.next;
        }
        console.log(str);
    }
}

var x = new LinkedList();
x.add(10);
x.add(20);
x.add(30);
x.add(40);
x.add(50);

x.display();

x.deleteAt(3)

console.log("printing list after delete a node");
x.display()
console.log("printing list after delete element by element");
x.deleteByElement(10);
x.display()
