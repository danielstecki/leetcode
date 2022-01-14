/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.
*/

const generate = (rows) => {
  if (r === 1) {
    return [1];
  }
  const result = [[1], [1, 1]];

  for (let i = 2; i < rows; i++) {
    let arr = [];
    for (let j = 0; j <= result[i - 1].length; j++) {
      let r = result[i - 1];
      arr.push((r[j - 1] || 0) + (r[j] || 0));
    }
    result.push(arr);
  }

  return result;
};

console.log(generate(5));
