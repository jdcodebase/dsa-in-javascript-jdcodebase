let numbers = [10, 20, 30, 40];
console.log(numbers);

let arr2 = new Array(5);
console.log(arr2);

let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("for of");
for (let num of arr) {
  console.log(num);
}

console.log("for Each");
arr.forEach((num) => console.log(num));
