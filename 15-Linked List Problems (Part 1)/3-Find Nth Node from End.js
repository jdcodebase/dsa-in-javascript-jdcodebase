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

  findNthFromEnd(N) {
    if (!this.head) {
      console.log("List is Empty");
      return;
    }

    let first = this.head;
    let sec = this.head;

    for (let i = 0; i < N; i++) {
      if (!first) {
        console.log("N is Greater Than the length of the list");
        return;
      }

      first = first.next;
    }

    while (first !== null) {
      first = first.next;
      sec = sec.next;
    }

    console.log(`The ${N}th node from the end is ,${sec.data}`);
  }
}

const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);

list.traverse();

console.log("\n--- Problem 3 ---");
list.findNthFromEnd(3);
