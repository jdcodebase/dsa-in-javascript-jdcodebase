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

  findMiddle() {
    if (!this.head) {
      console.log("List is Empty");
      return;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log("Middle Element ", slow.data);
  }
}

const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);

list.traverse();

console.log("\n--- Problem 2 ---");
list.findMiddle();
