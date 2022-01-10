/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

const plusOne = (arr) => {
  let cont = true;
  for (let i = arr.length - 1; i >= 0 && cont; i--) {
    arr[i]++;
    if (arr[i] === 10) {
      arr[i] = 0;
    } else {
      cont = false;
    }
  }

  if (cont) {
    arr.unshift(1);
  }

  return arr;
};

console.log(plusOne([9, 9, 9, 9]));
