class Node{
    constructor(element){
        this.element = element;
        this.next;
    }
}
class stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(element){
      var newNode = new Node(element);
      var current = this.first;
      if(this.first == null && this.last == null){
        this.first = newNode;
        this.last = newNode;
      }
      else{
       this.last.next = newNode;
       this.last = newNode;
      }
      this.size ++;
    }

    peek(){
        if(this.first == null && this.last ==null){
            console.log("stack is empty!");
        }
        else{
            console.log("peek element is :"+this.last.element);
        }
    }
     pop(){
          if(this.first == null && this.last == null){
            console.log("there is no element for deletion");
          }
          else if(this.first === this.last){
                  this.first = null;
                  this.last = null; 
          }
          else{
            var previous = this.first;
                while(previous.next != this.last){
                    previous = previous.next;
                }
                previous.next = null;
                this.last = previous;
          }
     }

     isEmpty(){
        if(this.first == null && this.last == null){
            console.log("stack is empty!")
        }
     }
    totalElement(){
        console.log("the total size of stack is :"+this.size);
    }
    display(){
        if(this.first == null && this.last == null){
            console.log("stack is empty!");
        }
        else{
            var current = this.first;
            while(current != null){
            console.log(current.element);
                current = current.next;
            }
            // console.log(current.element);

        }
    }
}

var x = new stack();
x.push(1);
x.push(2);
x.push(3);
x.push(4);
x.push(5);
x.push(6);

x.peek();
x.totalElement();
x.pop();
x.display();
