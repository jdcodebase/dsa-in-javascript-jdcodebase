class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  findLength() {
    let count = 0;

    let current = this.head;

    while (current !== null) {
      count++;
      current = current.next;
    }

    console.log(`Length of Linked List ${count}`);
  }
}

// ------------------------------
// Test the LinkedList
// ------------------------------

const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);

console.log("Linked List Elements:");
list.traverse();

console.log("\n--- Problem 1 ---");
list.findLength();
