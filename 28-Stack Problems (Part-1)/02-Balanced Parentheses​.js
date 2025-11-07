function isBalanced(str) {
  let stack = [];

  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let ch of str) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else if (ch === ")" || ch === "]" || ch === "}") {
      if (stack.pop() !== pairs[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("({[]})"));
console.log(isBalanced("([})"));
