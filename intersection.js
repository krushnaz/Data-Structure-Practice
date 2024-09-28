class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to find the intersection point of two linked lists
  function getIntersectionNode(headA, headB) {
    // Step 1: Find the lengths of both linked lists
    let lenA = 0;
    let lenB = 0;
    let currA = headA;
    let currB = headB;
  
    while (currA) {
      lenA++;
      currA = currA.next;
    }
  
    while (currB) {
      lenB++;
      currB = currB.next;
    }
  
    // Step 2: Determine the difference in lengths
    let diff = Math.abs(lenA - lenB);
  
    // Step 3: Move the pointer of the longer list ahead
    currA = headA;
    currB = headB;
  
    if (lenA > lenB) {
      for (let i = 0; i < diff; i++) {
        currA = currA.next;
      }
    } else {
      for (let i = 0; i < diff; i++) {
        currB = currB.next;
      }
    }
  
    // Step 4: Traverse both lists together to find the intersection
    while (currA !== currB) {
      currA = currA.next;
      currB = currB.next;
    }
  
    // Step 5: Return the intersection node (or null if there's no intersection)
    return currA;
  }
  
  // Create two linked lists with a common intersection point
  const intersectionNode = new ListNode(8);
  const listA = new ListNode(4);
  listA.next = new ListNode(1);
  listA.next.next = intersectionNode;
  
  const listB = new ListNode(5);
  listB.next = new ListNode(6);
  listB.next.next = new ListNode(1);
  listB.next.next.next = intersectionNode;
  
  // Call the function to find the intersection point
  const result = getIntersectionNode(listA, listB);
  
  if (result) {
    console.log("Intersection found at node with value:", result.value);
  } else {
    console.log("No intersection found.");
  }
  