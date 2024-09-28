class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}
class Deque {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    
    enqueueFront(element) {
        var newNode = new Node(element);
        if (this.front == null && this.rear == null) {
            this.front = this.rear = newNode;
        }
        else {
            this.front.prev = newNode;
            newNode.next = this.front;
            this.front = newNode;

        }
        this.size++;
    }

    enqueueRear(element) {
        var newNode = new Node(element);
        if (this.front == null && this.rear == null) {
            this.front = this.rear = newNode;
        }
        else {
            newNode.prev = this.rear;
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }
    
    dequeueFront(){
        if (this.front == null && this.rear == null) {
            console.log("queue is empty!");
        }else{
           this.front = this.front.next;
           this.front.prev = null;
        }
        this.size--;

    }

    dequeueRear(){
        if (this.front == null && this.rear == null) {
            console.log("queue is empty!");
        }else{
            this.rear = this.rear.prev;
            this.rear.next = null;
        }
        this.size--;
    }

    peekFront(){
        if (this.front == null && this.rear == null) {
            console.log("queue is empty!");
        }else{
            console.log("front peek :"+this.front.element);
        }
    }

    peekRear(){
        if (this.front == null && this.rear == null) {
            console.log("queue is empty!");
        }else{
            console.log("rear peek :"+this.rear.element);
        }
    }


    printQueue() {
        if (this.front == null && this.rear == null) {
            console.log("queue is empty!");
        }
        else {
            let current = this.front;
            let result = "";
            while (current) {
                result += current.element + "->";
                current = current.next;
            }
            console.log(result + "null");

        }
    }

    totalSize(){
        if (this.front == null && this.rear == null) {
            console.log("queue is empty!");
        }else{
            console.log("the total size of :"+this.size);
        }
    }
}

var x = new Deque();
x.enqueueFront(1);
x.enqueueRear(2);
x.enqueueRear(3);
x.enqueueRear(4);
x.enqueueRear(5);
x.enqueueRear(6);
x.printQueue();
x.enqueueFront(10);
x.printQueue()
x.enqueueFront(20)
x.enqueueRear(70);
x.printQueue();
x.dequeueFront();
x.printQueue();
x.dequeueRear();
x.printQueue();
x.peekFront();
x.peekRear();
x.totalSize();
