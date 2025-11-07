function longestWord(str) {
  let longest = "";

  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longest.length) {
      longest = str[i];
    }
  }

  return longest;
}

let str = "I loveeeeeeeeeee programming in javascript";

console.log(longestWord(str));
