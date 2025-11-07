let arr = [10, 5, 8, 20, 15];

// arr.sort((a, b) => a - b);
// console.log(arr[arr.length - 2]);

let first = -Infinity,
  second = -Infinity;

for (let num of arr) {
  if (num > first) {
    second = first;

    first = num;
  } else if (num > second && num < first) {
    second = num;
  }
}

console.log(second);
