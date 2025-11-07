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

  traverse() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " <-> ";
      current = current.next;
    }

    console.log(result);
  }

  reverseTraversal() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.prev;
    }

    console.log(result);
  }

  search(value) {
    let current = this.head;

    let position = 1;

    while (current) {
      if (current.data === value) {
        console.log(`Value ${value} found at postion ${position}`);
        return;
      }

      current = current.next;
      position++;
    }

    console.log(`Value ${value} not found in the list`);
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

list.traverse();

list.reverseTraversal();

list.search(90);
