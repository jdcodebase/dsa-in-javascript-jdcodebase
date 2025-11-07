let str1 = "listen";
let str2 = "world";

let sort1 = str1.split("").sort().join("");
let sort2 = str2.split("").sort().join("");

console.log(sort1 === sort2);
