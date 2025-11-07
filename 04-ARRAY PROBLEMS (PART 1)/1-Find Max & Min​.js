let arr = [3, 7, 2, 9, 1];

let max = -Infinity,
  min = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
  if (arr[i] < min) min = arr[i];
}

console.log(max, min);

let maxi = Math.max(...arr);
let mini = Math.min(...arr);

console.log(maxi, mini);
