class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element){
        var newNode = new Node(element);
        if(this.head == null){
            this.head = newNode;
        }
        else{
            var temp = this.head;
            while(temp.next != null){
               temp = temp.next;
            }

            temp.next = newNode;
        }  
        this.size ++;
    }

    insertAtindex(element,index){
      var newNode = new Node(element);
      if(this.head == null){
        var newNode = new Node()
        this.head = newNode;
      }
      else if(index == 1){
           newNode.next = this.head;
           this.head = newNode;
      }
      else{
        var temp = this.head;
        var curr = this.head;
        var i = 1;
        while(i < index){
            temp = temp.next;
            curr = temp.next;
            i++;
        }
        // console.log(temp.element);
        // console.log(curr.element);
        temp.next = newNode;
        newNode.next = curr;

      }
    }

    findMax(){
        if(this.head == null){
            console.log("list is empty!");
        }else{
            var current = this.head;
            var maxValue = this.head.element;
            while(current != null){

                if(current.element > maxValue){
                    maxValue = current.element;
                }
                 current = current.next;

                }
                console.log("Max value is :"+maxValue);
        }
    }


    findMin(){
        if(this.head == null){
            console.log("list is empty!");
        }else{
            var current = this.head;
            var minValue = this.head.element;

            while(current != null){

                if(current.element < minValue){
                    minValue = current.element;
                }
                 current = current.next;

                }
                console.log("MIN value is :"+minValue);
        }  
    }

    findSum(){
        if(this.head == null){
            console.log("list is empty!");
        }else{
            var temp = this.head;
            var sum = 0;
            while(temp != null){
                sum += temp.element;
                temp = temp.next;
            }
            console.log("the sum of all element is :"+sum)
        }
    }

    findAvg(){
        if(this.head == null){
            console.log("list is empty!");
        }else{
            var temp = this.head;
            var sum = 0;
            var avg = 0;
            while(temp != null){
                sum += temp.element;
                temp = temp.next;
            }
            avg = sum /this.size;
            console.log("the Average of all element is :"+avg)
        }
    }

    display(){
        var temp = this.head;
        while(temp != null){
            console.log(temp.element);
            temp = temp.next;
        }
     
    }
}

var x = new Linkedlist();
x.add(12);
x.add(23);
x.add(3);
x.add(45);
x.add(15);
x.display();

x.findMax();
x.findMin();
x.findSum();
x.findAvg();

