function evaluatePostfix(expr) {
  const stack = [];

  for (let ch of expr.split(" ")) {
    if (!isNaN(ch)) {
      stack.push(Number(ch));
    } else {
      let b = stack.pop();
      let a = stack.pop();

      switch (ch) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
      }
    }
  }

  return stack.pop();
}

console.log(evaluatePostfix("2 3 1 * + 9 -"));
