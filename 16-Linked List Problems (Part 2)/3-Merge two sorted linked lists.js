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
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

function mergeSortedLists(head1, head2) {
  let dummy = new Node(-1);
  let tail = dummy;

  while (head1 && head2) {
    if (head1.data < head2.data) {
      tail.next = head1;
      head1 = head1.next;
    } else {
      tail.next = head2;
      head2 = head2.next;
    }

    tail = tail.next;
  }

  if (head1) {
    tail.next = head1;
  }
  if (head2) {
    tail.next = head2;
  }

  return dummy.next;
}

const list1 = new LinkedList();
list1.insertAtEnd(1);
list1.insertAtEnd(3);
list1.insertAtEnd(5);

const list2 = new LinkedList();
list2.insertAtEnd(2);
list2.insertAtEnd(4);
list2.insertAtEnd(6);

console.log("List 1:");
list1.traverse();

console.log("List 2:");
list2.traverse();

const mergedHead = mergeSortedLists(list1.head, list2.head);

let current = mergedHead;
let result = "";
while (current) {
  result += current.data + " -> ";
  current = current.next;
}
console.log("Merged List:");
console.log(result + "null");
