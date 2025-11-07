let str = "Hello";

console.log(str);
console.log(str[0]);
console.log(str[str.length - 1]);

console.log(str.length);

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.charAt(1));

let msg = "I Love JavaScript";

console.log(msg.indexOf("Love"));
console.log(msg.includes("Javat"));

let word = "JavaScript";

console.log(word.slice(0, 4));
console.log(word.substring(0, 4));

let spaced = "  hello  ";
console.log(spaced, spaced.length);

console.log(spaced.trim().length);

let text = "a,b,c,d";
let arr = text.split(",");
console.log(arr);
console.log(arr.join("-"));

let line = "Java, I like Java";
console.log(line.replace("Java", "JS"));
console.log(line.replaceAll("Java", "JS"));
