function checkElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

let array = [1, 2, 3, 4, 5];
let target = 4;

let found = checkElement(array, target);

console.log(found);

console.log(array.includes(target));
