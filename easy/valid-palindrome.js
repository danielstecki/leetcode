/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

const isPalindrome = (str = "") => {
  const format = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  const reversed = [...format].reverse().join("");

  return format === reversed;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
