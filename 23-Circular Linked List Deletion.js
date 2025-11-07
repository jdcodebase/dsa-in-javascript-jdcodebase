class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CLL {
  constructor() {
    this.head = null;
  }

  insertAtStart(value) {
    const newNode = new Node(value);

    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
    } else {
      let temp = this.head;

      while (temp.next !== this.head) {
        temp = temp.next;
      }

      newNode.next = this.head;
      temp.next = newNode;

      this.head = newNode;
    }
  }

  deleteFromStart() {
    if (!this.head) {
      return console.log("List is Empty");
    }

    if (this.head.next === this.head) {
      this.head = null;
      return;
    }

    let temp = this.head;
    while (temp.next !== this.head) {
      temp = temp.next;
    }

    temp.next = this.head.next;
    this.head = this.head.next;
  }

  deleteFromEnd() {
    if (!this.head) {
      return console.log("List is Empty");
    }

    if (this.head.next === this.head) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next.next !== this.head) {
      current = current.next;
    }

    current.next = this.head;
  }

  deleteFromPostion(index) {
    if (!this.head) {
      return console.log("List is Empty");
    }

    if (index === 1) {
      return this.deleteFromStart();
    }

    let current = this.head;
    let count = 1;

    while (count < index - 1 && current.next !== this.head) {
      current = current.next;
      count++;
    }

    if (current.next === this.head) {
      return console.log("Invalid Position");
    }

    current.next = current.next.next;
  }

  printList() {
    if (!this.head) return;

    let temp = this.head;

    do {
      console.log(temp.value);
      temp = temp.next;
    } while (temp !== this.head);
  }
}

const cll = new CLL();

console.log("Original CLL");
cll.insertAtStart(40);
cll.insertAtStart(30);
cll.insertAtStart(20);
cll.insertAtStart(10);
cll.printList();

// console.log("Delete From Start");
// cll.deleteFromStart();
// cll.printList();

// console.log("Delete From End");
// cll.deleteFromEnd();
// cll.printList();

console.log("Delete From Position");
cll.deleteFromPostion(3);
cll.printList();
