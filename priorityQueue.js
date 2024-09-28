class Node {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
        this.next = null;
    }
}

class queue {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    enqueue(element, priority) {
        var newNode = new Node(element, priority);
        if(priority <=0){
            return;
        }
        if (this.head == null || priority < this.head.priority) {
            newNode.next = this.head;
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next && priority >= current.next.priority){
                current = current.next;
            }
            console.log("current :"+current.element)
                newNode.next = current.next;
                current.next = newNode;
        }
    }

    printQueue(){
        if(!this.head){
            console.log("queue is empty!");
        }else{
            var current = this.head;
            let result = "";
            while(current){
                result+=current.element+" ";
                current = current.next;
            }
            console.log(result);
        }
    }
}
var x = new queue();
x.enqueue("task1",1);
x.enqueue("task2",2);
x.enqueue("task3",3);
x.enqueue("task4",4);
x.enqueue("task5",5);
x.enqueue("task6",6);

x.printQueue()