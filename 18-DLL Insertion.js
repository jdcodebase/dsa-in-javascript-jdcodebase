class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtStart(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
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
    newNode.prev = current;
  }

  insertAtPosition(data, index) {
    if (index == 0) {
      this.insertAtStart(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let i = 0;

    while (current && i < index - 1) {
      current = current.next;
      i++;
    }

    newNode.next = current.next;
    if (current.next) {
      current.next.prev = newNode;
    }

    current.next = newNode;
    newNode.prev = current;
  }

  printList() {
    let current = this.head;
    let result = "null ← ";

    while (current) {
      result += current.data + " ↔ ";
      current = current.next;
    }

    result += "null";
    console.log(result);
  }
}

const list = new DoublyLinkedList();

list.insertAtStart(30);
list.insertAtStart(20);
list.insertAtStart(10);
list.printList(); // null ← 10 ↔ 20 ↔ 30 ↔ null`

list.insertAtEnd(40);
list.printList(); // null ← 10 ↔ 20 ↔ 30 ↔ 40 ↔ null

list.insertAtPosition(25, 2);
list.printList(); // null ← 10 ↔ 20 ↔ 25 ↔ 30 ↔ 40 ↔ null
