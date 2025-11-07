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

  insertAtEnd(data) {
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

  printLL() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  deleteFromStart() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  deleteFromEnd() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  deleteFromPosition(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let count = 0;

    while (current.next !== null && count < index - 1) {
      current = current.next;
      count++;
    }

    if (current.next === null) {
      console.log("Postion out of range");
      return;
    }

    current.next = current.next.next;
  }
}

const list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);

list.deleteFromStart();
list.deleteFromEnd();

list.insertAtEnd(40);
list.insertAtEnd(50);
list.deleteFromPosition(1);

list.printLL();
