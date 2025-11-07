let str = "Hello World";

let vowels = 0,
  consonants = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    continue;
  } else if ("aeiou".includes(str[i])) {
    vowels++;
  } else {
    consonants++;
  }
}

console.log(vowels, consonants);
