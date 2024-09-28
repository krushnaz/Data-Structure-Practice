class Node{
    constructor(element){
      this.element = element;
      this.next = null;
    }
}

class queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(element){
        var newNode = new Node(element);
        if(this.first == null && this.last == null){
            this.first = newNode;
            this.last = this.first;
        }else{
            while(this.last.next != null){
                this.last = this.last.next;
            }
            this.last.next = newNode;
            newNode = this.last;
        }
        this.size++;
    }

    isEmpty(){
        if(this.first == null && this.last == null){
            console.log("queue is empty!");
        }
    }


    dequeue(){
        this.isEmpty();
        this.first = this.first.next;
        this.size--;

    }

    sizeOf(){
        console.log(" the total size of queue is :"+ this.size);
    }

    peek(){
        this.isEmpty();
        console.log("peek element is :"+this.first.element)
    }

    display(){
        if(this.first == null && this.last == null){
            console.log("queue is empty!");
        }else{
            var temp = this.first;
            while(temp != null){
                console.log(temp.element);
                temp = temp.next;
            }
        }
    }
}

var x = new queue();
x.enqueue(1)
x.enqueue(2)
x.enqueue(3)
x.enqueue(4)
x.enqueue(5)
x.display()
x.peek()
x.sizeOf()
x.dequeue()
console.log("dequeue operation...")
x.display()

// x.dequeue()
// console.log("dequeue operation...")
// x.display()

// x.dequeue()
// console.log("dequeue operation...")
// x.display()
x.peek()
x.sizeOf()




