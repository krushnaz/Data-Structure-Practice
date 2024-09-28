public class practice {
    Node head;
    class Node{
        int data;
        Node next;
       public Node(int data){
            this.data = data;
            this.next = null;
        }
    }
    public void addfirst(int data){
        Node newNode = new Node(data);
        if(head == null){
            head = newNode;
            return;
        }
        Node currNode = head;
        while(currNode.next != null){
            currNode = currNode.next;
        }
        currNode.next =  newNode;
    }
    
    public void addlast(int data){
       Node newNode = new Node(data);
       if(head == null){
        head = newNode;
       }
       Node lasNode = head;
       while(lasNode.next != null){
          lasNode = lasNode.next;
       }
       lasNode.next = newNode;
    }
    public void printlist(){
        if(head == null){
            System.out.println("No element in this list...");
        }
        Node currNode = head;
        while(currNode != null){
            System.out.print(currNode.data+"-->");
            currNode = currNode.next;
        }
        System.out.println("null");

    }
    public void deletefirst(){
        if(head == null){
            System.out.println("list is already null");
        }
        head = head.next;
    }

    public void deletelast(){
        if(head == null){
            System.out.println("list is already null");
        }
        if(head.next == null){
			System.out.println("list is already empty");
			return;
		}
        Node currNode = head;
        Node lastNode = head.next;
        while(lastNode.next != null){
            currNode = currNode.next;
            lastNode = lastNode.next;
            
        }
        currNode.next = null;
    }
    public static void main(String[] args) {
        practice p1 = new practice();
        p1.addfirst(10);
        p1.addlast(11);
        p1.addfirst(12);
        p1.addfirst(13);
        p1.addlast(14);
        p1.addlast(15);
        p1.printlist();
        p1.deletefirst();
        p1.printlist();
        p1.deletelast();
        p1.printlist();

    }
}
