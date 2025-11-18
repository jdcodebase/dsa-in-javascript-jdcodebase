class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (
      this.front === this.rear + 1 ||
      (this.rear === this.size - 1 && this.front === 0)
    );
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue Overflow");
      return;
    }

    if (this.front === -1) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.size;

    this.queue[this.rear] = element;

    console.log(`${element} inserted`);
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      return;
    }

    let element = this.queue[this.front];

    if (this.front === this.rear) {
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    console.log(`${element} removed`);
  }

  display() {
    if (this.isEmpty()) {
      console.log(`Queue is Empty`);
      return;
    }

    let i = this.front;
    let result = "";

    while (true) {
      result += this.queue[i] + " ";

      if (i === this.rear) {
        break;
      }

      i = (i + 1) % this.size;
    }

    console.log(result);
  }
}

const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
console.log(cq);
cq.display();

cq.dequeue();
cq.dequeue();
cq.enqueue(50);
cq.enqueue(60);
console.log(cq);
cq.display();
