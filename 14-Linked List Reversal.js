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

  reverseLinkedList() {
    let current = this.head;
    let next = null;
    let prev = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;

      current = next;
    }

    console.log(prev);
  }

  reverseLinkedList() {
    let current = this.head;
    let next = null;
    let prev = null;

    console.log(`next -> `);
    console.log(next);
    console.log(`current -> `);
    console.log(current);
    console.log(`prev -> `);
    console.log(prev);

    console.log(`
        --------------------------
      `);
    while (current) {
      next = current.next;
      console.log(`next -> `);
      console.log(next);

      current.next = prev;
      console.log(`current -> `);
      console.log(current);

      prev = current;
      console.log(`prev -> `);
      console.log(prev);

      current = next;
      console.log(`
        --------------------------
      `);

      console.log(`current -> `);
      console.log(current);
      console.log(`
        --------------------------
        !!!!!!!!!!!!!!!!!!!!!!!!!!
      `);
    }

    console.log(prev);
  }
}

const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);

list.traverse();
list.reverseLinkedList();
