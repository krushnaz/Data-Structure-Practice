class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class Stack{
    constructor(){
       this.item = [];
        this.size = 0;
    }

    push(element){
        this.item.push(element); 
}

    pop(){
      
        if(this.item.length == 0){
            return "stack is empty!";
        }
        else{
        
            return this.item.pop();

        }
    }


    print(){
        if(this.item.length == 0){
            return "stack is empty!";
        }
        else{
            for(var i=0;i<this.item.length;i++){
                console.log(this.item[i])
            }
        }
    }
}

var s = new Stack();
var str = "SIMCA";
var splited  = str.split("");
var len = splited.length;
// console.log(len)
// console.log(splited)

for(var i=0;i<len;i++){
    s.push(splited[i]);
}

// s.push(1);
// s.push(2);
// s.push(3);
// s.push(4);
// s.push(5);
// s.print();
var reverse = "";
for(var i=0;i<len;i++){
    reverse = reverse + s.pop();
}
console.log(reverse)
s.pop()



