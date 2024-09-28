class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
     
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(element) {
        var newNode = new Node(element);
        if (this.front == null && this.rear == null) {
            this.front = this.rear = newNode;
        }
        else {
             this.rear.next = newNode;
             this.rear = newNode;
        }
        this.size++;
    }
    dequeue(){
        if (this.front == null && this.rear == null) {
            console.log("queue is empty!");
        }else{
            this.front = this.front.next;
            if(this.front == null){
                this.rear = null;
            }
        }
        this.size--;
    }
    peek(){
        if(!this.front){
            console.log("queue is empty!");
        }else{
            console.log("peek :"+this.front.element);
        }
    }

    isEmpty(){
        if (this.front == null && this.rear == null) {
            console.log("queue is empty!");
        }
    }

    printQueue(){
        if (this.front == null && this.rear == null) {
            console.log("queue is empty!");
        }
        else{
            let current = this.front;
            let result = "";
            while(current){
                result += current.element+" ";
                current = current.next;
            }
            console.log(result);
        }
    }

    totalSize(){
        console.log("the total size of the queue is :"+this.size);
    }
}

var x = new Queue();
x.enqueue(10)
x.enqueue(20)
x.enqueue(30)
x.enqueue(40)
x.enqueue(50)
x.printQueue()
console.log("after Dequeue")
x.dequeue();
x.printQueue();
x.peek();
x.totalSize()
x.dequeue()
x.isEmpty();
x.printQueue()
