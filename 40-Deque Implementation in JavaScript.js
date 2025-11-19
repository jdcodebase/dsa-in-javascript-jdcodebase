class Deque {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.front === this.rear + 1
    );
  }

  isEmpty() {
    return this.front === -1;
  }

  insertFront(value) {
    if (this.isFull()) {
      return console.log("Deque is Full");
    }

    if (this.front === -1) {
      this.front = this.rear = 0;
    } else if (this.front === 0) {
      this.front = this.size - 1;
    } else {
      this.front--;
    }

    this.arr[this.front] = value;
  }

  insertRear(value) {
    if (this.isFull()) {
      return console.log("Deque is Full");
    }

    if (this.front === -1) {
      this.front = this.rear = 0;
    } else if (this.rear === this.size - 1) {
      this.rear = 0;
    } else {
      this.rear++;
    }

    this.arr[this.rear] = value;
  }

  deleteFront() {
    if (this.isEmpty()) {
      return console.log("Deque is Empty");
    }

    if (this.front === this.rear) {
      this.front = this.rear = -1;
    } else if (this.front === this.size - 1) {
      this.front = 0;
    } else {
      this.front++;
    }
  }

  deleteRear() {
    if (this.isEmpty()) {
      return console.log("Deque is Empty");
    }

    if (this.front === this.rear) {
      this.front = this.rear = -1;
    } else if (this.rear === 0) {
      this.rear = this.size - 1;
    } else {
      this.rear--;
    }
  }

  getFront() {
    if (this.isEmpty()) {
      return console.log(`Deque is Empty`);
    }

    return this.arr[this.front];
  }

  getRear() {
    if (this.isEmpty()) {
      return console.log(`Deque is Empty`);
    }

    return this.arr[this.rear];
  }
}

const dq = new Deque(5);

dq.insertFront(5);
dq.insertRear(10);
dq.insertFront(20);
dq.insertRear(3);
console.log(dq);
console.log(dq.getFront());
console.log(dq.getRear());
