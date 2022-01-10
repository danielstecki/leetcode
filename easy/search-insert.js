/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
*/

const searchInsert = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= val) {
      return i;
    }
  }
  return arr.length;
};

console.log(searchInsert([1, 3, 5, 6], 4));
