let array = [1, 2, 3, 4, 5];

let even = 0,
  odd = 0;

for (let num of array) {
  if (num % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(`Even: ${even}  Odd: ${odd}`);
