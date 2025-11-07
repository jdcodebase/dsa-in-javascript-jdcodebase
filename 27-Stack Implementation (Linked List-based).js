class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    console.log(`${data} pushed to stack`);
  }

  pop() {
    if (this.top === null) {
      console.log("Stack Underflow");
      return;
    }

    console.log(`${this.top.data} popped from stack`);
    this.top = this.top.next;
  }

  peek() {
    if (this.top === null) {
      console.log("Stack is Empty");
      return;
    }

    console.log(`Top element is ${this.top.data}`);
  }

  isEmpty() {
    return (this.top = null);
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);
stack.pop();
console.log(stack);

stack.isEmpty();
stack.peek();
