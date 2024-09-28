class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    display() {
        if (this.head == null) {
            console.log("linkedlist is empty!");
        } else {
            var temp = this.head;
            console.log("linked list :");
            do {
                console.log(temp.element);
                temp = temp.next;
            } while (temp != null && temp != this.head);
        }
    }


    add(element) {
        var newNode = new Node(element);

        if (this.head == null) {
            this.head = newNode;
            newNode.next = this.head;
        }
        else {
            var temp = this.head;
            while (temp.next != this.head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head;
        }
    }
    addFirst(element) {
        if (this.head == null) {
            console.log("linkedlist is empty");
        }
        else {
            var newNode = new Node(element);
            var temp = this.head;
            while (temp.next != this.head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    addLast(element) {
        if (this.head == null) {
            console.log("list is empty!");
        }
        else {
            var newNode = new Node(element);
            var temp = this.head;
            do {
                temp = temp.next;
            } while (temp.next != this.head);
            temp.next = newNode;
            newNode.next = this.head;
        }
    }

    addAtGivenIndex(index, element) {
        if (this.head == null) {
            console.log("list is empty");
        } else {
            var temp1 = this.head;
            var temp2 = this.head;
            var newNode = new Node(element);
            var i = 0;
            for (i = 0; i < index; i++) {
                temp1 = temp1.next;
            }
            while (temp2.next != temp1) {
                temp2 = temp2.next;
            }
            //    console.log("temp1 :"+temp1.element)
            //    console.log("temp2 :"+temp2.element)
            temp2.next = newNode;
            newNode.next = temp1;
        }
    }

    deleteLast() {
        if (this.head == null) {
            console.log("list is empty!");
        }
        else {
            var temp1 = this.head;
            var temp2 = this.head;
            // do {
            //     temp1 = temp1.next;
            // } while (temp1 != this.head);

            // do {
            //     temp2 = temp2.next;
            // } while (temp2 != temp1);

            while(temp1.next != this.head){
                temp1 = temp1.next;
            }
            while(temp2.next != temp1){
                temp2 = temp2.next;
            }
            // console.log("temp1 :" + temp1.element)
            // console.log("temp2 :" + temp2.element)
            temp2.next = this.head;
        }
    }
     deleteAtFirst(){
        if (this.head == null) {
            console.log("list is empty!");
        }else{
            var temp1 = this.head;
            do{
                temp1 = temp1.next;
            }while(temp1.next != this.head);
           temp1.next = this.head.next;
           this.head = this.head.next;
        }
     }

     deleteAtPosition(pos){
         var temp1 = this.head;
         var temp2 = this.head;
         for(var i = 0; i < pos;i++){
            temp1 = temp1.next;
         }
         while(temp2.next != temp1){
            temp2 = temp2.next;
         }
         temp2.next = temp1.next;

     }
}

var ll = new CircularLinkedList();
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.add(5)
ll.display()
console.log("----Add First------");
ll.addFirst(10);
ll.display();
console.log("---- Add Last------");
ll.addLast(30);
ll.display();
console.log("----Add At Given Index------");
ll.addAtGivenIndex(3, 20);
ll.display()
console.log("----Delete At Last------");
ll.deleteLast()
ll.display()
console.log("----Delete At First------");
ll.deleteAtFirst()
ll.display()
console.log("----Delete At Position------");
ll.deleteAtPosition(2);
ll.display()