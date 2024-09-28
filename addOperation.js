class Node{

    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){

        this.head = null;
        this.size = 0;

    }

    add(element){
        var NewNode = new Node(element);
        var current;
        if(this.head == null){
            this.head = NewNode;
        }else{
            current = this.head;
            while(current.next){
              current = current.next;
            }
            current.next = NewNode;
        }
        this.size++;
    }
    displaySize(){
        console.log(" this size of linked list is :"+this.size);
    }
    display(){
        var temp;
        temp =this.head;
        while(temp.next != null){
            console.log(temp.element)
            temp = temp.next;
        }
        console.log(temp.element)
        
    }
    delete(){
         var t1,t2;
         t1 = this.head;
         t2 = this.head;

         while(t1.next != null){
            t1 = t1.next;
         }
         while(t2.next != t1){
            t2 = t2.next;
         }
         t2.next = null;

    }
    deleteAtSecLast(){
        if(this.head == null){
            console.log("this linkedlist is empty");
            return;
        }
        if(this.head.next == null){
            console.log("there is only one node available");
            return;
        }
        var t1,t2,t3;
        t1 = t2 = t3 = this.head;
       while(t1.next != null){
        t1 = t1.next;
       }
       while(t2.next != t1){
        t2 = t2.next;
       }
       while(t3.next != t2){
        t3 = t3.next;
       }
       t3.next = t2.next;
    }

    deleteAtThirdLast(){
        var t1,t2,t3,t4;
        t1 = t2 = t3 = t4 = this.head;
        if(this.head == null){
            console.log("linked list is empty");
            return;
        }
        if(this.head.next == null){
            console.log("there is only one element available in linked list");
        }
        while(t1.next != null){
         t1 = t1.next;
        }
        while(t2.next != t1){
            t2 = t2.next;
        }
        while(t3.next != t2){
            t3 = t3.next;
        }
        while(t4.next != t3){
            t4 = t4.next;
        }
        t4.next = t3.next;
        this.size--;
    }
}
var ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

// ll.display();
// ll.delete()
// ll.display()
// console.log("-----------------")
// ll.deleteAtSecLast()
// ll.display()
ll.displaySize()
console.log("-----------------")
ll.deleteAtThirdLast()
ll.display()

ll.displaySize()