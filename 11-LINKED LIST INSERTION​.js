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

  printLL() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  insertAtStart(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
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
  }

  insertAtPostion(index, data) {
    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let count = 0;

    while (current !== null && count < index - 1) {
      current = current.next;
      count++;
    }
    if (current === null) {
      console.log("Postion out of range");
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }
}

let list = new LinkedList();
list.head = new Node(10);
list.head.next = new Node(20);
list.head.next.next = new Node(30);

list.insertAtStart(0);
list.insertAtStart(-10);
list.insertAtStart(-20);

list.insertAtEnd(40);
list.insertAtEnd(50);

list.insertAtPostion(0, -90);
list.insertAtPostion(1, -100);
list.insertAtPostion(1, 5);

list.printLL();
