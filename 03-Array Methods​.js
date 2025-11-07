let arr = [1, 2, 3, 4, 5];

console.log(arr);

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.indexOf(9));
console.log(arr.includes(5));

let arr2 = arr.slice(0, 2);
console.log(arr2);
console.log(arr);

arr.splice(1, 2);
console.log(arr);

let merged = arr.concat([40, 50]);
console.log(merged);
console.log(arr);
