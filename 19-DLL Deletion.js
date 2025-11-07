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

  deleteFromStart() {
    if (!this.head) return;

    let temp = this.head;
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    }

    temp = null;
  }

  deleteFromEnd() {
    if (!this.head) {
      return;
    }

    let temp = this.head;

    while (temp.next) {
      temp = temp.next;
    }

    if (temp.prev) {
      temp.prev.next = null;
    } else {
      this.head = null;
    }

    temp = null;
  }

  deleteFromPosition(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.deleteFromStart();
      return;
    }

    let temp = this.head;
    let count = 0;

    while (temp && count < index) {
      temp = temp.next;
      count++;
    }

    if (!temp) {
      return;
    }

    if (temp.prev) {
      temp.prev.next = temp.next;
    }

    if (temp.next) {
      temp.next.prev = temp.prev;
    }
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

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtEnd(50);
list.insertAtEnd(60);
list.insertAtEnd(70);

list.printList(); // null ← 10 ↔ 20 ↔ 30 ↔ null`

list.deleteFromStart();
list.printList();

list.deleteFromEnd();
list.printList();

list.deleteFromPosition(2);
list.printList();
