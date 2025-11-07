function nonRepeating(str) {
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      if (cnt >= 1) {
        cnt = 0;
      } else {
        return str[i];
      }
    }
  }
}

let str = "aabbccde";

console.log(nonRepeating(str));
