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
}

let list = new LinkedList();
list.head = new Node(10);
list.head.next = new Node(20);
list.head.next.next = new Node(30);

console.log(list);

let current = list.head;
console.log(current);

while (current !== null) {
  console.log(current.data);
  current = current.next;
  console.log(current);
}
