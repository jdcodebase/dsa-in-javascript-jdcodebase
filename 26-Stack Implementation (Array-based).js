class Stack {
  constructor(maxSize) {
    this.items = [];
    this.maxSize = maxSize;
  }

  push(element) {
    if (this.items.length === this.maxSize) {
      console.log("Stack Overflow");
      return;
    }

    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      console.log("Stack Underflow");
      return;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      console.log("Stack is Empty");
      return;
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  isFull() {
    return this.items.length === this.maxSize;
  }
}

const stack = new Stack(5);

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
stack.pop();
console.log(stack.items);
