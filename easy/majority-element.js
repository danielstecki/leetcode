/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

const majorityElement = (nums) => {
  const map = {};
  let max = 0;
  let val;

  for (let i = 0; i < nums.length; i++) {
    let v = nums[i];
    map[v] = map[v] ? map[v] + 1 : 1;

    if (map[v] > max) {
      max = map[v];
      val = v;
    }
  }

  return val;
};

console.log(majorityElement([3, 2, 3]));
