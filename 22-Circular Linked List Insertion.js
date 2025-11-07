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

  insertAtEnd(value) {
    const newNode = new Node(value);

    if (!this.head) {
      newNode.next = newNode;

      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next !== this.head) {
        temp = temp.next;
      }

      temp.next = newNode;
      newNode.next = this.head;
    }
  }

  insertAtPostion(value, index) {
    const newNode = new Node(value);

    if (index === 0) {
      this.insertAtStart(value);
      return;
    }

    let temp = this.head;
    let count = 0;

    while (count < index - 1 && temp.next !== this.head) {
      temp = temp.next;
      count++;
    }

    newNode.next = temp.next;
    temp.next = newNode;
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

cll.insertAtStart(30);
cll.insertAtStart(20);
cll.insertAtStart(10);
// cll.printList();

cll.insertAtEnd(50);
cll.insertAtEnd(60);
// cll.printList();

cll.insertAtPostion(40, 3);
cll.printList();
