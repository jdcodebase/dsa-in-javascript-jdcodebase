let numbers = [1, 2, 3, 4, 5];

let n = numbers.length;
let temp;

for (let i = 0; i < n / 2; i++) {
  temp = numbers[i];
  numbers[i] = numbers[n - i - 1];
  numbers[n - i - 1] = temp;
}

console.log(numbers);

console.log(numbers.reverse());
