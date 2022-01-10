/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/

const maxSubArray = (arr) => {
  const hasPositives = arr.some((item) => item >= 0);
  if (!hasPositives) {
    return Math.max(...arr);
  }

  let current = 0;
  let maxEnding = 0;

  for (let i = 0; i < arr.length; i++) {
    current = current + arr[i];
    if (current > maxEnding) {
      maxEnding = current;
    }

    if (current < 0) {
      current = 0;
    }
  }
  return maxEnding;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
