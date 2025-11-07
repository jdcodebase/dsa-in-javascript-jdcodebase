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

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  search(value) {
    let current = this.head;

    let index = 0;

    while (current) {
      if (current.data === value) {
        console.log(`${value} found at position ${index}`);
        return;
      }

      current = current.next;
      index++;
    }

    console.log(`${value} not found in the list`);
  }
}

const list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);

list.traverse();
list.search(20);
list.search(40);
