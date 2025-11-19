// class PriorityQueue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(value, priority) {
//     const newItem = { value, priority };
//     let added = false;

//     for (let i = 0; i < this.items.length; i++) {
//       if (priority < this.items[i].priority) {
//         this.items.splice(i, 0, newItem);
//         added = true;
//         break;
//       }
//     }
//     if (!added) {
//       this.items.push(newItem);
//     }
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     }

//     return this.items.shift();
//   }

//   fron() {
//     return this.items[0];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   print() {
//     console.log(this.items);
//   }
// }

// const pq = new PriorityQueue();
// pq.enqueue("Task1", 10);
// pq.enqueue("Task2", 5);
// pq.enqueue("task3", 15);
// pq.enqueue("task4", 8);

// pq.print();

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.head = null;
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);

    if (!this.head || priority < this.head.priority) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next && current.next.priority <= priority) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  dequeue() {
    if (!this.head) {
      return "underflow";
    }

    let removed = this.head;
    this.head = this.head.next;
    return removed;
  }

  front() {
    return this.head;
  }

  isEmpty() {
    return this.head === null;
  }
}

const pq = new PriorityQueue();
pq.enqueue("Task1", 10);
pq.enqueue("Task2", 5);
pq.enqueue("task3", 15);
pq.enqueue("task4", 8);
console.log(pq);
// pq.print();
