class deletion_circularList{
    Node head;
    Node tail;
    class Node{
        int data;
        Node next;
       
        Node(int data){
            this.data = data;
            this.next = null;
        }
    }

    public void insertion(int data){
        Node newNode = new Node(data);
         
        if(head == null){
           head= tail = newNode;
            // tail.next = head;
        }
        else{
            while(tail.next != null){
                tail = tail.next;
            }
            tail.next = newNode;
            tail = newNode;
            
        }
        
        System.out.println(head.data+" head");
        System.out.println(tail.data+" tail");
    }



    public void addNode(int value) {
        Node newNode = new Node(value);
    
        if (head == null) {
            head = newNode;
        } else {
            tail.next = newNode;
        }
    
        tail = newNode;
        tail.next = head;
    }

    public void printList(){
        if(head == null){
            System.out.println("list is empty!!!");
        }else{
            Node temp ;
            temp = tail.next;
            while( temp.next != tail.next){
                System.out.print(temp.data+" --> ");
                temp = temp.next;
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        deletion_circularList list = new deletion_circularList();
        // list.insertion(1);
        // list.insertion(2);
        // list.insertion(3);
        // list.insertion(4);
        // list.insertion(5);

        list.addNode(1);
        list.addNode(2);
        list.addNode(3);
        list.addNode(4);
        list.addNode(5);
        list.printList();
    }
}