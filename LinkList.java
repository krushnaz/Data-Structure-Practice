public class LinkList{
      Node head;
	  private int size;
	 public LinkList(){
		this.size =0;
	  }
	class Node{
        int data;
		Node next;
		public Node(int data){
			this.data = data;
			this.next = null;
			size++;

		}
	}
	public void addfirst(int data){
		Node newNode = new Node(data);

		if(head == null){
			head = newNode;           ///first check head is empty or not
			return;
		}
		Node currNode = head;
		
			while(currNode.next != null){      // go to the till current node next != null

			currNode = currNode.next;   

		}
		currNode.next = newNode;
		

	}

	public void addlast(int data){
		Node newNode = new Node(data);

		if(head == null){
			head = newNode;
			return;
		}
		Node lastNode = head;
		while(lastNode.next != null){
			lastNode = lastNode.next;
		}

		lastNode.next = newNode;
		

	}
    

	public void printlist(){
		// Node newNode = new Node();
        Node currNode = head;
		while(currNode != null){
			System.out.print(currNode.data+" --> ");
			currNode = currNode.next;
		}
		System.out.println("NULL");
	}

	public void deletefirst(){
		if(head == null){
			System.out.println("there is no element to delete ...");
		}
		size--;
		head = head.next;

	}
	public void deletelast(){
		if(head == null){
			System.out.println("there is no element to delete ...");
			return;
			
		}
		size--;
		if(head.next == null){
			System.out.println("list is already empty");
			return;
		}
		Node curNode = head;
		Node lastNode = head.next;
		while(lastNode.next != null){
			curNode = curNode.next;
			lastNode = lastNode.next;
		}
		curNode.next = null;
	}

	public void reverseIterator(){
		if(head == null || head.next == null){
			return;
		}
		Node prevNode = head;
		Node currNode = head.next;
		while(currNode.next != null){
			Node nextNode = currNode.next;
			currNode.next = prevNode;
			prevNode = currNode;
			currNode = nextNode;
		}
		head.next = null;
		head = prevNode;
	}
	public Node recursive(Node head){
          if(head == null || head.next == null){
			return head;
		  }
          Node newNode = recursive(head.next);
		  head.next.next = head;
		  head.next = null;
		  return newNode;
		}
     public int getSize(){
		return size;
	 }

	public static void main(String[] args) {
		LinkList ll = new LinkList();
		ll.addfirst(11);
		ll.addfirst(12);
		ll.addfirst(13);
		ll.addlast(14);
		ll.addlast(15);
		ll.addlast(16);
		// ll.addfirst(10);
		ll.printlist();
		// ll.printlist();
		// ll.deletefirst();
		// ll.printlist();
		// ll.deletefirst();
		// ll.printlist();
		// ll.deletelast();
		// ll.printlist();
		// ll.deletelast();
        // ll.reverseIterator();
		ll.head = ll.recursive(ll.head);
		ll.printlist();

		System.out.println(ll.getSize());


	}
}