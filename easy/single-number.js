/* 
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

const singleNumber = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev ^ curr;
  });
};

console.log(singleNumber([1, 2, 3, 2, 1]));
