class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  deqeue() {
    if (!this.front) {
      console.log("Queue is Empty");
      return null;
    }

    const value = this.front.value;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    return value;
  }

  peek() {
    if (!this.front) {
      console.log("Queue is Empty");
      return null;
    }

    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }

  display() {
    let current = this.front;
    let result = "";

    while (current) {
      result += current.value + "->";
      current = current.next;
    }

    console.log(result + "null");
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
// console.log(queue);

queue.display();

console.log(queue.deqeue());
queue.display();
console.log(queue.peek());
