let arr = [1, 2, 3, 4];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = arr[i] + sum;
}

console.log(sum);

let add = arr.reduce((intial, num) => num + intial, 0);

console.log(add);
