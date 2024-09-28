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
        this.size  = 0;
    }

    add(element){
        var newNode = new Node(element);
        if(this.first == null && this.last == null){
            this.first = newNode;
            this.last = this.first;
        }
        else{
            while(this.last.next != null){
                this.last = this.last.next;
            }
            this.last.next = newNode;
             newNode = this.last;
        }
    }

        
    display(){
        if(this.first == null && this.last == null){
            console.log("queue is empty!");
        }
        else{
            var temp = this.first;
            while(temp != null){
                console.log(temp.element);
                temp = temp.next;
            }
        }
    }
}

var x = new queue();
x.add(1)
x.add(2)
x.add(3)
x.add(4)
x.add(5)
x.display()
