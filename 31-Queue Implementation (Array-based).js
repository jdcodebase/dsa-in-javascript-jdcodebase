class Queue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.front = -1;
    this.rear = -1;
    this.capacity = capacity;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue Overflow");
      return;
    }

    if (this.isEmpty()) {
      this.front = 0;
    }

    this.rear++;
    this.items[this.rear] = element;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      return;
    }

    const item = this.items[this.front];
    this.front++;
    this.size--;

    if (this.isEmpty()) {
      this.front = this.rear = -1;
    }

    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }

    return this.items[this.front];
  }
}

const q1 = new Queue(5);
q1.enqueue(10);
q1.enqueue(20);
q1.dequeue();
console.log(q1.peek());
console.log(q1);
