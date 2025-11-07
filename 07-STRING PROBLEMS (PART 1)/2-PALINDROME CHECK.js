let str = "madam";

let rev = str.split("").reverse().join("");

console.log(str === rev);

function checkPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(checkPalindrome(str));
